'use client';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer } from 'antd';
import React, { useState } from 'react';
import DarkMode from './darkmode';
import ShinyText from '@/styles/reactbits/shinytext';
import GradientText from '@/styles/reactbits/gradienttext';
import {
  FaCode,
  FaEnvelope,
  FaInfoCircle,
  FaProjectDiagram,
} from 'react-icons/fa';

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex items-center justify-between px-10 py-5 shadow-lg">
      <label className="flex font-bold">
        <GradientText
          colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
          animationSpeed={3}
          showBorder={false}
          className="text-2xl"
        >
          <p className="font-bold">NextDev</p>
        </GradientText>
      </label>
      <div className="flex gap-3 items-center">
        <DarkMode />
        <ul className="hidden xl:flex gap-5 cursor-pointer">
          <li className="hover:text-blue-400 dark:hover:text-blue-300">
            Giới thiệu
          </li>
          <li className="hover:text-blue-400 dark:hover:text-blue-300">
            Kỹ năng
          </li>
          <li className="hover:text-blue-400 dark:hover:text-blue-300">
            Dự án
          </li>
          <li className="hover:text-blue-400 dark:hover:text-blue-300">
            Liên hệ
          </li>
        </ul>
        <FontAwesomeIcon
          icon={faBars}
          className="text-xl text-black xl:hidden dark:text-white"
          onClick={handleOpen}
        />
      </div>
      <Drawer
        onClose={handleClose}
        open={open}
        width={250} // Tăng chiều rộng để tạo cảm giác cân đối hơn
        closeIcon={false}
        style={{
          background: 'rgba(255, 255, 255, 0.9)', // Nền mờ
          backdropFilter: 'blur(10px)', // Hiệu ứng mờ
          padding: '20px', // Tăng khoảng cách
        }}
      >
        <ul className="flex flex-col justify-center gap-4 cursor-pointer">
          {/* Giới thiệu */}
          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-100 hover:scale-105 transition-all">
            <FaInfoCircle className="text-blue-600" size={20} />
            <span className="text-lg font-medium text-gray-800">
              Giới thiệu
            </span>
          </li>

          {/* Kỹ năng */}
          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-100 hover:scale-105 transition-all">
            <FaCode className="text-blue-600" size={20} />
            <span className="text-lg font-medium text-gray-800">Kỹ năng</span>
          </li>

          {/* Dự án */}
          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-100 hover:scale-105 transition-all">
            <FaProjectDiagram className="text-blue-600" size={20} />
            <span className="text-lg font-medium text-gray-800">Dự án</span>
          </li>

          {/* Liên hệ */}
          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-100 hover:scale-105 transition-all">
            <FaEnvelope className="text-blue-600" size={20} />
            <span className="text-lg font-medium text-gray-800">Liên hệ</span>
          </li>
        </ul>
      </Drawer>
    </div>
  );
};

export default Header;
