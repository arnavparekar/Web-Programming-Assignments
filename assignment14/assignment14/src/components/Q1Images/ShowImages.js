import React from 'react';
import srcImage from '../../Images/srcImage.png'; // from src/Images

const ShowImages = () => {
  return (
    <div>
      <h2>Image from Public Folder:</h2>
      <img src="/Images/publicImage.png" alt="Public" width="200" />
      
      <h2>Image from SRC Folder:</h2>
      <img src={srcImage} alt="Src" width="200" />
    </div>
  );
};

export default ShowImages;
