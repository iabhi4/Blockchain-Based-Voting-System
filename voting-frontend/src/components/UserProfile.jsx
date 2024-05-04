// src/components/UserProfile.jsx
import React, { useState } from 'react';

const UserProfile = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        documentNumber: '',
        residence: '',
        isCandidate: 'no',
        proposalName: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        // Add submission logic here
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <h1 className="text-xl font-bold mb-4">User Profile Registration</h1>
            <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Name:</label>
                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="input input-bordered w-full max-w-xs" />
            </div>
            {/* Similar structure for other fields */}
            <input type="submit" value="Submit" className="btn btn-primary mt-4" />
        </form>
    );
};

export default UserProfile;
