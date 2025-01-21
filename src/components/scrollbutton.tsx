'use client';

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Sử dụng biểu tượng mũi tên

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Hiển thị nút khi cuộn trang xuống
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true); // Khi cuộn xuống 200px, hiển thị nút
      } else {
        setShowButton(false); // Khi cuộn lên đầu trang, ẩn nút
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Cuộn trang lên đầu khi nhấn nút
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Thêm hiệu ứng cuộn mượt
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 p-3 bg-blue-600 text-white rounded-full shadow-lg transition-opacity ${
        showButton ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ display: showButton ? 'block' : 'none' }}
    >
      <FaArrowUp size={24} />
    </button>
  );
};

export default ScrollToTopButton;
