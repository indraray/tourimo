// Gallery.js
import React from 'react';
import './Gallery.css';

const images = [
  'https://imgs.search.brave.com/ohI37m4CuzDxMf0dseWl7V5LKkOXqhiwqF44U7X3Vf4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tYWxk/aXZlcy1tYWdhemlu/ZS5jb20vcGljdHVy/ZXMvcGhvdG8taWRl/YXMuanBn',
  'https://imgs.search.brave.com/ohI37m4CuzDxMf0dseWl7V5LKkOXqhiwqF44U7X3Vf4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tYWxk/aXZlcy1tYWdhemlu/ZS5jb20vcGljdHVy/ZXMvcGhvdG8taWRl/YXMuanBn',
  'https://imgs.search.brave.com/UOPX1lbBFsK_qpudaMEKyK3g6whnpmOtFCbSOogpKIQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/cmV0dHktd29tYW4t/b2NlYW4tbWFsZGl2/ZXMtYmFjay1zaWRl/LXZpZXdfNjI0MzI1/LTE2MjEuanBnP3Np/emU9NjI2JmV4dD1q/cGc',
  'https://imgs.search.brave.com/UOPX1lbBFsK_qpudaMEKyK3g6whnpmOtFCbSOogpKIQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/cmV0dHktd29tYW4t/b2NlYW4tbWFsZGl2/ZXMtYmFjay1zaWRl/LXZpZXdfNjI0MzI1/LTE2MjEuanBnP3Np/emU9NjI2JmV4dD1q/cGc',
  'https://imgs.search.brave.com/UOPX1lbBFsK_qpudaMEKyK3g6whnpmOtFCbSOogpKIQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/cmV0dHktd29tYW4t/b2NlYW4tbWFsZGl2/ZXMtYmFjay1zaWRl/LXZpZXdfNjI0MzI1/LTE2MjEuanBnP3Np/emU9NjI2JmV4dD1q/cGc',
  'https://imgs.search.brave.com/UOPX1lbBFsK_qpudaMEKyK3g6whnpmOtFCbSOogpKIQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/cmV0dHktd29tYW4t/b2NlYW4tbWFsZGl2/ZXMtYmFjay1zaWRl/LXZpZXdfNjI0MzI1/LTE2MjEuanBnP3Np/emU9NjI2JmV4dD1q/cGc',
  'https://imgs.search.brave.com/ohI37m4CuzDxMf0dseWl7V5LKkOXqhiwqF44U7X3Vf4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tYWxk/aXZlcy1tYWdhemlu/ZS5jb20vcGljdHVy/ZXMvcGhvdG8taWRl/YXMuanBn'
  // Add more image URLs as needed
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img className='image_gallery' src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
