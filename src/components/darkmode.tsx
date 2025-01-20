'use client';

import { Switch } from 'antd';
import { useTheme } from 'next-themes';
import React, { useState, useEffect } from 'react';

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

  const toggleTheme = (checked: boolean) => {
    const newTheme = checked ? 'dark' : 'light';
    setIsDarkMode(checked);
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Lưu trạng thái vào localStorage
  };

  return (
    <Switch
      checked={isDarkMode} // Cập nhật giá trị Switch theo trạng thái isDarkMode
      checkedChildren="Dark"
      unCheckedChildren="Light"
      onChange={toggleTheme} // Gọi hàm toggleTheme khi chuyển trạng thái
    />
  );
}
