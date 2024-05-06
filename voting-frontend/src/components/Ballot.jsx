import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import ballotJson from '../../../build/contracts/Ballot.json';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Ballot = () => {
  const [contract, setContract] = useState(null);
  const [proposals, setProposals] = useState(
    JSON.parse(localStorage.getItem('proposals')) || []
  );
  const [delegateAddress, setDelegateAddress] = useState('');
  const [userStatus, setUserStatus] = useState('Loading...');
  const [votingStatus, setVotingStatus] = useState('');
  const [isBallotActive, setIsBallotActive] = useState(false);
  const [disable, setDisable] = useState(false);
  const [proposalsChecked, setProposalsChecked] = useState(false);
  const [chartData, setChartData] = useState({
    labels: [], // will hold proposal names or indices
    datasets: [
      {
        label: 'Number of Votes',
        data: [], // will hold votes count
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  });
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    const loadBlockchainData = async () => {
      console.log('LoadDataRunning');
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        const accounts = await web3.eth.getAccounts();
        const userAddress = accounts[0];

        const contractAddress = localStorage.getItem('ballotAddress');
        const contractAbi = ballotJson.abi;
        const loadedContract = new web3.eth.Contract(
          contractAbi,
          contractAddress
        );
        setContract(loadedContract);
        const hasRegistered = await loadedContract.methods
          .checkEligibilityToVote(userAddress)
          .call();
        if (!hasRegistered) {
          alert('You are not eligible to vote in this ballot.');
          return setUserStatus('You are not eligible to vote.');
        }
        const voterExists = await loadedContract.methods
          .checkVoterExists(userAddress)
          .call();
        if (!voterExists) {
          await loadedContract.methods
            .initializeVoter(userAddress)
            .send({ from: userAddress });
        }
        const hasVoted = await loadedContract.methods
          .hasVoted(userAddress)
          .call();
        setUserStatus(
          hasVoted
            ? 'You have already voted.'
            : 'Click on one of the proposals to vote for them or you can also wish to delegate to someone else.'
        );

        if (hasVoted) {
          setDisable(true);
          setShowChart(true);
        }

        const currentTime = new Date();
        const registrationTime = new Date(
          Number(await loadedContract.methods.getRegistrationTime().call()) *
            1000
        );
        const votingTime = new Date(
          Number(await loadedContract.methods.getVotingTime().call()) * 1000
        );

        setIsBallotActive(
          currentTime >= registrationTime && currentTime < votingTime
        );
        setVotingStatus(
          currentTime > votingTime
            ? 'Winner: ' + await loadedContract.methods.winnerName().call()
            : 'Voting is in Progress'
        );

        if (!proposalsChecked) {
          fetchProposals(loadedContract, userAddress);
        }
      } else {
        console.log('Non-Ethereum browser detected. Consider trying MetaMask!');
      }
    };
    loadBlockchainData();
  }, [proposalsChecked, userStatus]);

  useEffect(() => {
    let interval = null;
    if (showChart) {
      fetchChartData(); // Fetch immediately if chart is visible
      interval = setInterval(fetchChartData, 10000); // Refresh the data every 10 seconds
    }
    return () => {
      if (interval) {
        clearInterval(interval); // Clear only when component unmounts
      }
    };
  }, [contract]); // Depend on showChart and contract instance

  const fetchProposals = async (contract, userAddress) => {
    try {
      const fetchedProposals = await contract.methods.getProposals().call();
      if (fetchedProposals.length === 0 && !proposalsChecked) {
        await contract.methods
          .fetchProposals()
          .send({ from: userAddress, gas: '5000000' });
      } else {
        setProposals(fetchedProposals);
        localStorage.setItem('proposals', JSON.stringify(fetchedProposals));
        setProposalsChecked(true); // Ensure we don't refetch unnecessarily
      }
    } catch (error) {
      console.error('Error fetching proposals:', error);
    }
  };

  const fetchChartData = async () => {
    console.log('Fetching data to update');
    const proposalsCount = await contract.methods.proposalsCount().call();
    const proposals = [];
    for (let i = 0; i < proposalsCount; i++) {
      const proposal = await contract.methods.getProposal(i).call();
      proposals.push({
        name: proposal.name,
        voteCount: parseInt(proposal.voteCount),
      });
    }

    setChartData({
      labels: proposals.map((p) => p.name),
      datasets: [
        {
          label: 'Number of Votes',
          data: proposals.map((p) => p.voteCount),
          backgroundColor: 'rgba(75, 192, 192, 0.7)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    });

    setShowChart(true);
  };

  const handleDelegateVote = async () => {
    if (!window.ethereum) {
      console.log(
        'Ethereum object not found, you should consider using MetaMask!'
      );
      return;
    }

    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();

    try {
      await contract.methods
        .delegate(delegateAddress)
        .send({ from: accounts[0] });
      setUserStatus('Delegate vote successful.');
      setShowChart(true); // Show the chart after delegating
      fetchChartData();
    } catch (error) {
      console.error('Error occurred while delegating vote:', error);
      setUserStatus('Failed to delegate vote.');
    }
  };

  const handleVote = async (index) => {
    if (!window.ethereum) {
      console.log(
        'Ethereum object not found, you should consider using MetaMask!'
      );
      return;
    }

    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    try {
      await contract.methods.vote(index).send({ from: accounts[0] });
      setUserStatus(`You voted for proposal ${index + 1}.`);
      setShowChart(true); // Show the chart after voting
      fetchChartData(); // Refresh data and show chart
    } catch (error) {
      console.error('Error voting:', error);
    }
  };

  return (
    <div className='max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg'>
      <h1 className='text-3xl font-bold text-center text-gray-700 mb-6'>
        Ballot System
      </h1>
      <div className='mb-4'>
        <h2 className='text-xl font-semibold text-gray-600'>Proposals</h2>
        <ul className='list-disc list-inside'>
          {proposals.map((proposal, index) => (
            <li key={index} className='ml-4'>
              {proposal}
            </li>
          ))}
        </ul>
      </div>
      <div className='mb-4'>
        <h2 className='text-xl font-semibold text-gray-600'>Delegate Vote</h2>
        <input
          type='text'
          value={delegateAddress}
          onChange={(e) => setDelegateAddress(e.target.value)}
          placeholder='Enter delegate address'
          disabled={!isBallotActive || disable}
          className='w-full p-2 mb-2 border rounded shadow-sm'
        />
        <button
          onClick={handleDelegateVote}
          disabled={!isBallotActive || disable}
          className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50'>
          Delegate
        </button>
      </div>
      <div className='mb-4'>
        <h2 className='text-xl font-semibold text-gray-600'>Vote</h2>
        <div>
          {proposals.map((proposal, index) => (
            <button
              key={index}
              onClick={() => handleVote(index)}
              disabled={!isBallotActive || disable}
              className='px-4 py-2 mr-2 mb-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50'>
              Vote for {proposal}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h2 className='text-lg font-semibold text-gray-600 mb-2'>
          User Status
        </h2>
        {!isBallotActive ? (
          <p> </p>
        ) : (
          <p className='text-sm text-gray-800'>{userStatus}</p>
        )}

        <p className='text-sm text-gray-800'>{votingStatus}</p>
      </div>
      {showChart && (
        <div>
          <h2 className='text-xl font-semibold text-gray-600 mt-4 mb-2'>
            Voting Results
          </h2>
          <Bar
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                tooltip: {
                  mode: 'index',
                  intersect: false,
                },
              },
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'Proposals',
                  },
                },
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: 'Vote Count',
                  },
                  ticks: {
                    stepSize: 1,
                    precision: 0,
                    callback: function (value) {
                      if (value % 1 === 0) {
                        return value;
                      }
                    },
                  },
                },
              },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Ballot;
