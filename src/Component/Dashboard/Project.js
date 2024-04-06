import React from 'react';
import img1 from '../../assets/jay-mantri-TFyi0QOx08c-unsplash.jpg';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Project = ({ setModalOpen, newStory, searchQuery }) => {
    // Function to handle opening the modal
    const HandleModal = () => {
        setModalOpen(true);
    };

    // Filtering stories based on search query
    const filteredStories = newStory.filter(story =>
        story.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            {/* Render filtered stories */}
            {filteredStories.map((story, index) => (
                <div key={index} className='border rounded cursor-pointer'>
                    <img src={story.image || img1} className='filter grayscale' />
                    <div className='p-6 '>
                        <p className='font-medium text-xl capitalize break-words'>{story.title}</p>
                        <span className='text-gray-400'>Uploaded {story.timeStamp}</span>
                    </div>
                </div>
            ))}
            
            {/* Add button for creating new project */}
            <div className='border rounded w-full h-full justify-center items-center flex bg-[#F5F6F0] p-10' >
                <FontAwesomeIcon onClick={HandleModal} icon={faPlus} className='text-xl h-6 w-6 rounded-full border border-gray-400 p-4 cursor-pointer text-gray-400 ' />
            </div>
        </>
    );
};

export default Project;
