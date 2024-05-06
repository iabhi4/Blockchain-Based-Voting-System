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
          currentTime >= votingTime
            ? 'Voting has ended.'
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
    <div className='max-w-xl mx-auto p-4 bg-gray-700 bg-opacity-80 rounded-xl shadow-lg space-y-4 text-white'
         style={{
           boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
           textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
           transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
           transform: 'scale(1.01)',
           backdropFilter: 'blur(10px)'
         }}>
      <h1 className='text-2xl font-semibold text-center'>Ballot</h1>
      <section>
        <h2 className='text-lg font-medium'>Proposals</h2>
        <ul className='list-none space-y-2'>
          {proposals.map((proposal, index) => (
            <li key={index} className='flex justify-between items-center p-2 bg-transparent rounded-lg border border-gray-300'>
              <span className='font-light'>Proposal {index + 1}</span>
              <button onClick={() => handleVote(index)} className='px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition duration-300'
                      style={{
                        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.4)'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0px) scale(1)'}
              >
                Vote
              </button>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className='text-lg font-medium'>Delegate Vote</h2>
        <input
          type='text'
          value={delegateAddress}
          onChange={(e) => setDelegateAddress(e.target.value)}
          placeholder='Enter delegate address'
          className='w-full p-2 bg-transparent border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500'
        />
        <button onClick={handleDelegateVote} className='mt-2 w-full p-2 bg-green-500 rounded hover:bg-green-600 transition duration-300'
                style={{
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.4)'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0px) scale(1)'}
        >
          Delegate
        </button>
      </section>
      <section>
        <h2 className='text-lg font-medium'>User Status</h2>
        <p className='p-2 bg-transparent rounded'>{userStatus}</p>
      </section>
      <div>
        {showChart && (
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
                    text: 'Proposals', // X-axis label
                  },
                },
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: 'Vote Count', // Y-axis label
                  },
                  ticks: {
                    stepSize: 1, // Ensure ticks at every integer
                    precision: 0, // No decimal places in the ticks
                    callback: function (value) {
                      if (value % 1 === 0) { // Check if it's an integer
                        return value;
                      }
                    },
                  },
                },
              },
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Ballot;
