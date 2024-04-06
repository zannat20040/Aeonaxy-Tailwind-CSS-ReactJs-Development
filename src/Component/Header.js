import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className='bg-[#F9DEB3] px-4 py-2'>
            {/* Container */}
            <div className='container flex gap-5 mx-auto items-center lg:flex-nowrap flex-wrap'>
                {/* One-Time Offer */}
                <div className="one-timer bg-[#F3CB8C] rounded-full font-medium flex items-center gap-2 lg:py-1 lg:px-4 p-2  md:w-fit w-full justify-center">
                    <FontAwesomeIcon icon={faClock} />
                    <span className='lg:flex md:hidden flex'> One-Time Offer</span>
                </div>
                
                {/* Discount Timer */}
                <div className='font-bold w-full md:w-fit text-center'>
                    Your AI Storyboarding Bundle Discount expires in 
                    <button className='px-2 rounded bg-[#FAE7C8] text-[#EA9AA3]'>5:01</button>
                </div>
                
                {/* Claim Discount Button */}
                <button className='py-1 px-3 rounded font-bold bg-[#EA9AA3] md:w-fit w-full'>Claim Discount</button>
            </div>
        </div>
    );
};

export default Header;
