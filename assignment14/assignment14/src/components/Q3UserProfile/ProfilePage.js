import React from 'react';
import ProfileImage from './ProfileImage';
import UserInfo from './UserInfo';
import UserPosts from './UserPosts';

const ProfilePage = () => {
  return (
    <div style={{ border: '1px solid grey', padding: '20px', borderRadius: '10px' }}>
      <ProfileImage />
      <UserInfo />
      <UserPosts />
    </div>
  );
};

export default ProfilePage;
