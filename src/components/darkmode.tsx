'use client';

import { Switch } from 'antd';
import { useTheme } from 'next-themes';
import React, { useState, useEffect } from 'react';
import { FaRegLightbulb } from 'react-icons/fa';

export default function DarkMode() {
  const { setTheme, resolvedTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Lấy giá trị từ localStorage khi component được mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      setTheme(savedTheme); // Đặt theme dựa trên giá trị đã lưu
    } else {
      // Nếu không có trong localStorage, lấy từ resolvedTheme mặc định
      setIsDarkMode(resolvedTheme === 'dark');
    }
  }, [resolvedTheme, setTheme]);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Lưu trạng thái vào localStorage
  };

  return (
    <>
      <Switch
        checked={isDarkMode}
        checkedChildren="Dark"
        unCheckedChildren="Light"
        onChange={toggleTheme}
        className="hidden xl:block"
      />
      <FaRegLightbulb
        className={`xl:hidden ${isDarkMode ? '' : 'text-yellow-500'}`}
        size={30}
        onClick={toggleTheme}
      />
    </>
  );
}
