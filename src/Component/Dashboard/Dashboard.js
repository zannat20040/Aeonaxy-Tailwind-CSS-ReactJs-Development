import React, { useState } from 'react';
import DashbaordNav from './DashbaordNav';
import { faChevronDown, faEllipsisVertical, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Project from './Project';
import Modal from './Modal';

const Dashboard = ({ newStory, setNewStory, searchQuery }) => {
    // State for controlling modal open/close
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className='px-4 py-10 bg-[#F5F6F0]'>
            {/* Dashboard navigation */}
            <DashbaordNav setModalOpen={setModalOpen} />
            <div className='bg-white mt-10 p-8 container mx-auto rounded '>
                {/* Project header */}
                <div className='flex flex-wrap items-center gap-5 justify-between'>
                    <div className='flex gap-5 items-end'>
                        <FontAwesomeIcon icon={faFolderOpen} className='text-4xl hidden sm:flex' />
                        <div>
                            <p className='font-medium text-lg capitalize'>Default Project</p>
                            <p className='text-gray-400 -mt-1'>{newStory?.length} storyboard</p>
                        </div>
                    </div>
                    <div className='space-x-8'>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                </div>
                {/* Project cards */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-between items-center mt-10'>
                    {/* Render the project component */}
                    <Project setModalOpen={setModalOpen} newStory={newStory} searchQuery={searchQuery} />
                </div>
                {/* Modal component show */}
                {modalOpen && <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} setNewStory={setNewStory} newStory={newStory} />}
            </div>
        </div>
    );
};

export default Dashboard;
