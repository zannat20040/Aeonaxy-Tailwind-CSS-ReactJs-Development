import React from 'react';
import Profile from '../../Shared Component/Profile';

const DashboardNav = ({ setModalOpen }) => {
    // Function to handle opening the modal
    const handleModal = () => {
        setModalOpen(true);
    };

    return (
        <div className='container mx-auto'>
            <div className='md:flex-row flex-col flex gap-5 justify-between md:items-center'>
                <div className='flex gap-3 items-center'>
                    {/* Render shared user profile */}
                    <Profile profile={'A'} />
                    {/* User team name */}
                    <p className='capitalize text-2xl font-bold'>Adam Cooper Team</p>
                </div>
                {/* Button to create new project */}
                <button onClick={handleModal} className='bg-black text-white py-2 px-4 rounded'>
                    New Project
                </button>
            </div>
        </div>
    );
};

export default DashboardNav;
