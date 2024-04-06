import React, { useState } from 'react';
import { faCircleXmark, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import defaultImage from '../../assets/jay-mantri-TFyi0QOx08c-unsplash.jpg';

const Modal = ({ setModalOpen, modalOpen, setNewStory, newStory }) => {

    // State declarations
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("Choose One");
    // Array of options 
    const options = ['Landscape (16:9)', 'Portrait (9:16)', 'Landscape (4:3)', 'Landscape (3:2)', 'Portrait (2:3)', 'Square (1:1)'];

    // Function to close the modal
    const handleCloseModal = () => {
        setModalOpen(false);
    };

    // Function to handle storyboard creation
    const handleStoryboard = (e) => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const image = defaultImage;
        const uploadedTime = new Date();
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const day = uploadedTime.getDate();
        const month = months[uploadedTime.getMonth()];
        const year = uploadedTime.getFullYear().toString().substr(-2);
        const formattedDate = (day < 10 ? '0' : '') + day + ' ' + month + ' ' + year;

        // Create storyboard object
        const storyboard = {
            title: title,
            image: image,
            frameSize: selectedValue,
            timeStamp: formattedDate
        };

        // Set the new story and close the modal
        setNewStory([...newStory, storyboard]);
        setModalOpen(false);
    };

    return (
        <>
            {/* Show modal background */}
            {modalOpen && <div className="fixed top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>}
            {/* Show modal */}
            <div className='bg-white fixed max-w-4xl w-auto rounded shadow-xl z-20 top-28 right-0 left-0 bottom-28 overflow-auto m-auto'>
                {/* Storyboard creation form */}
                <form onSubmit={handleStoryboard}>
                    <div className='p-10 border-b'>
                        {/* Top section */}
                        <div className='flex gap-5 justify-between items-center'>
                            <p className='font-bold uppercase text-xl sm:text-3xl'>New storyboard</p>
                            {/* Modal close button */}
                            <FontAwesomeIcon onClick={handleCloseModal} icon={faXmark} className='bg-gray-100 sm:h-5 sm:w-5 h-3 w-3 rounded-full sm:p-4 p-2 cursor-pointer' />
                        </div>
                        {/* Storyboard name input */}
                        <div className='flex flex-col gap-3 mt-10'>
                            <label className='capitalize font-medium text-lg'>Storyboard name</label>
                            <input required name='title' placeholder='e.g. Default Project Storyboard' className='outline-0 w-full px-5 py-3 border rounded' />
                        </div>
                        {/* Frame size options */}
                        <div className='flex flex-col gap-3 mt-6'>
                            <label className='capitalize font-medium text-lg'>Frame Size</label>
                            {/* Dropdown button */}
                            <div onClick={() => setIsOpen(!isOpen)} className="flex w-full items-center justify-between rounded bg-white px-6 py-3 border">
                                <h1 className="font-medium text-gray-600">{selectedValue}</h1>
                                <svg className={`${isOpen ? '-rotate-180' : 'rotate-0'} duration-300`} width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7 10L12 15L17 10" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                            </div>
                            {/* Dropdown options */}
                            <div className={`${isOpen ? 'visible top-0 opacity-100' : 'hidden -top-4 opacity-0'} relative mx-auto my-4 w-full rounded py-4 border duration-300`}>
                                {options?.map((option, idx) => (
                                    <div key={idx} onClick={(e) => { setSelectedValue(e.target.textContent); setIsOpen(false); }} className="px-6 py-2 text-gray-500 hover:bg-gray-100">
                                        {option}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* AI assistant switch */}
                    <div className='p-10 flex sm:flex-row flex-col justify-between items-center gap-5'>
                        <div className='flex gap-3 items-center'>
                            <label htmlFor="BasicSwitch_NavigateUI" className="relative flex h-fit w-14 items-center rounded-full border p-1 border-black">
                                <input type="checkbox" className="peer/toggle hidden" id="BasicSwitch_NavigateUI" />
                                <div className="absolute inset-0 top-0 bottom-0 left-0 right-0 m-auto z-10 w-0 rounded-full duration-300 peer-checked/toggle:w-12 size-2 peer-checked/toggle:bg-black transition-all"></div>
                                <div className="z-20 size-2 rounded-full bg-black duration-200 peer-checked/toggle:translate-x-6"></div>
                            </label>
                            <span className='font-medium text-lg'>AI Assistant</span>
                        </div>
                        {/* Storyboard creation button */}
                        <button className='bg-gray-300 text-white py-2 px-4 rounded'>Create Storyboard</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Modal;
