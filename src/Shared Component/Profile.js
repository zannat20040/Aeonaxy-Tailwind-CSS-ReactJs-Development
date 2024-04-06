import React from 'react';

const Profile = ({ profile }) => {
    return (
        //Reusable Profile component
        <div className="profile font-extrabold w-14 h-14 rounded-full flex justify-center items-center text-3xl bg-gradient-to-r from-[#F7D9D2] to-[#F6C278] border-2 border-black ">{profile}</div>
    );
};

export default Profile;
