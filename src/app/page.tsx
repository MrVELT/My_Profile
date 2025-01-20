'use client';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar } from 'antd';
import { motion } from 'motion/react';
import { FaGithub, FaReact } from 'react-icons/fa';
import { IoCodeSlashOutline, IoLibrary } from 'react-icons/io5';
import data from '../../public/data.json';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="flex items-center justify-center py-20 bg-blue-600 dark:bg-gradient-to-r dark:from-purple-800 dark:via-indigo-700 dark:to-teal-600">
        <motion.div
          className="flex flex-col gap-5 items-center"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          //viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
        >
          <Avatar size={150} icon={<FontAwesomeIcon icon={faUserTie} />} />
          <h1 className="font-bold text-3xl md:text-5xl text-white dark:text-gray-100">
            Nguyễn Minh Đức
          </h1>
          <p className="font-bold text-2xl text-white dark:text-gray-300">
            Frontend Developer
          </p>
          <p className="text-xl text-white dark:text-gray-400">
            Chuyên gia Next.js
          </p>
          <button className="flex items-center justify-center px-5 py-2 gap-2 rounded-2xl bg-white text-blue-500 dark:text-gray-100 dark:bg-gray-700 hover:bg-gray-100">
            <FontAwesomeIcon icon={faGithub} />
            <p>Github</p>
          </button>
        </motion.div>
      </div>
      <div className="flex flex-col items-center justify-center py-20 px-10 gap-10 dark:bg-gray-800">
        <h1 className="text-3xl font-bold dark:text-gray-100">
          Kỹ năng chuyên môn
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            className="grid p-5 gap-3 rounded-lg bg-gray-50 dark:bg-gray-700"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            //viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
          >
            <FaReact size={32} className="text-blue-500" />
            <p className="font-bold text-xl text-black dark:text-gray-100">
              Frontend Development
            </p>
            <p className="text-black dark:text-gray-300">
              Next.js, TypeScript, Tailwind CSS, Restful API, Git, ...
            </p>
          </motion.div>
          <motion.div
            className="grid p-5 gap-3 rounded-lg bg-gray-50 dark:bg-gray-700"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            //viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
          >
            <IoLibrary size={32} className="text-blue-500" />
            <p className="font-bold text-xl text-black dark:text-gray-100">
              Library
            </p>
            <p className="text-black dark:text-gray-300">
              FontAweSome, Ant Design, Framer motion, MUI, ReactBits, ...
            </p>
          </motion.div>
          <motion.div
            className="grid p-5 gap-3 rounded-lg bg-gray-50 dark:bg-gray-700"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            //viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
          >
            <IoCodeSlashOutline size={32} className="text-blue-500" />
            <p className="font-bold text-xl text-black dark:text-gray-100">
              Clean Code
            </p>
            <p className="text-black dark:text-gray-300">
              Best Practices, Code Review, ...
            </p>
          </motion.div>
        </div>
      </div>
      <div className="py-20 gap-10 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
        <h1 className="text-3xl font-bold text-black dark:text-white">
          Dự án tiêu biểu
        </h1>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 md:px-28">
          {data.project.map((data: any, index: any) => (
            <div
              key={data.id}
              className="bg-white dark:bg-gray-800 rounded-lg p-5 gap-5 flex flex-grow-1 flex-col"
            >
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-xl text-nowrap lg:text-2xl text-black dark:text-white">
                  {data.title}
                </h1>
                <FaGithub
                  className="text-blue-500 dark:text-blue-300"
                  size={30}
                />
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {data.description}
              </p>
              <p className="font-bold text-black dark:text-white">
                Chức năng chính:
              </p>
              <div className="grid gap-2">
                {data.functionName.map((item: any, index: any) => (
                  <ul
                    key={index}
                    className="list-disc list-inside text-gray-600 dark:text-gray-400"
                  >
                    <li className="">{item}</li>
                  </ul>
                ))}
              </div>
              <div className="grid grid-cols-2 xl:flex items-end h-full gap-3 px-2">
                {data.technology.map((item: any, index: any) => (
                  <span
                    key={index}
                    className="text-nowrap flex items-center justify-center px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="py-20 flex flex-col items-center gap-10">
          <h1 className="text-3xl font-bold">Thông tin liên hệ</h1>
          <ul className="grid list-inside list-disc gap-3">
            <li>Email: nguyenminhduc7899@gmail.com</li>
            <li>Số điện thoại: 0834070899</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
