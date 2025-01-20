'use client';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer } from 'antd';
import React, { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex items-center justify-between bg-white px-10 py-5 shadow-lg">
      <label className="flex font-bold">
        <span className="text-2xl text-blue-600">Next</span>
        <span className="text-2xl text-black">Dev</span>
      </label>
      <ul className="hidden md:flex gap-5 cursor-pointer">
        <li className="hover:text-blue-600">Giới thiệu</li>
        <li className="hover:text-blue-600">Kỹ năng</li>
        <li className="hover:text-blue-600">Dự án</li>
        <li className="hover:text-blue-600">Liên hệ</li>
      </ul>
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
