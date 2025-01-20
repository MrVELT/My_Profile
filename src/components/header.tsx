'use client';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer } from 'antd';
import React, { useState } from 'react';
import DarkMode from './darkmode';

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
        <span
          className="text-2xl"
          style={{
            background:
              'linear-gradient(90deg, #0061ff 0%, #60efff 50%, #00ff87 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          NextDev
        </span>
      </label>
      <div className="flex gap-3 items-center">
        <DarkMode />
        <ul className="hidden md:flex gap-5 cursor-pointer">
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
      </div>
      <FontAwesomeIcon
        icon={faBars}
        className="text-xl cursor-pointer text-black md:hidden"
        onClick={handleOpen}
      />
      <Drawer onClose={handleClose} open={open} width={150} closeIcon={false}>
        <ul className="flex flex-col justify-center gap-2 cursor-pointer">
          <li className="hover:text-blue-600">Giới thiệu</li>
          <li className="hover:text-blue-600">Kỹ năng</li>
          <li className="hover:text-blue-600">Dự án</li>
          <li className="hover:text-blue-600">Liên hệ</li>
        </ul>
      </Drawer>
    </div>
  );
};

export default Header;
