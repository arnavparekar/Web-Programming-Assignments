import React from 'react';
import profile from '../../Images/srcImage.png';

const ProfileImage = () => {
  return <img src={profile} alt="Profile" style={{ width: 150, borderRadius: '50%' }} />;
};

export default ProfileImage;
