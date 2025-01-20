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
      <div className="bg-blue-600 flex items-center justify-center py-20">
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
          <h1 className="font-bold text-3xl md:text-5xl text-white">
            Nguyễn Minh Đức
          </h1>
          <p className="font-bold text-2xl text-white">Frontend Developer</p>
          <p className="text-xl text-white">Chuyên gia Next.js</p>
          <button className="flex items-center justify-center px-5 py-2 gap-2 rounded-2xl bg-white text-blue-500 hover:bg-gray-100">
            <FontAwesomeIcon icon={faGithub} />
            <p>Github</p>
          </button>
        </motion.div>
      </div>
      <div className="flex flex-col items-center justify-center py-20 bg-white gap-10">
        <h1 className="text-3xl font-bold text-black">Kỹ năng chuyên môn</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            className="grid p-5 gap-3 rounded-lg bg-gray-50"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            //viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
          >
            <FaReact size={32} className="text-blue-500" />
            <p className="font-bold text-xl text-black">Frontend Development</p>
            <p className="text-black">
              Next.js, TypeScript, Tailwind CSS, Restful API, Git, ...
            </p>
          </motion.div>
          <motion.div
            className="grid p-5 gap-3 rounded-lg bg-gray-50"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            //viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
          >
            <IoLibrary size={32} className="text-blue-500" />
            <p className="font-bold text-xl text-black">Library</p>
            <p className="text-black">
              FontAweSome, Ant Design, Framer motion, MUI, ReactBits, ...
            </p>
          </motion.div>
          <motion.div
            className="grid p-5 gap-3 rounded-lg bg-gray-50"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            //viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
          >
            <IoCodeSlashOutline size={32} className="text-blue-500" />
            <p className="font-bold text-xl text-black">Clean Code</p>
            <p className="text-black">Best Practices, Code Review, ...</p>
          </motion.div>
        </div>
      </div>
      <div className="py-20 gap-10 flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-black">Dự án tiêu biểu</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:px-28">
          {data.project.map((data: any, index: any) => (
            <div
              key={data.id}
              className="bg-white rounded-lg p-5 pb-10 gap-5 flex flex-grow-1 flex-col relative"
            >
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-xl text-nowrap lg:text-2xl text-black">
                  {data.title}
                </h1>
                <FaGithub className="text-blue-500" size={30} />
              </div>
              <p className="text-gray-600">{data.description}</p>
              <p className="font-bold text-black">Chức năng chính:</p>
              <div className="grid gap-2">
                {data.functionName.map((item: any, index: any) => (
                  <ul
                    key={index}
                    className="list-disc list-inside text-gray-600"
                  >
                    <li className="">{item}</li>
                  </ul>
                ))}
              </div>
              <div className="absolute bottom-2 left-0 w-full grid grid-cols-2 xl:flex items-center gap-3 px-5">
                {data.technology.map((item: any, index: any) => (
                  <span
                    key={index}
                    className="text-nowrap flex items-center justify-center px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
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
        <div className="py-20 bg-blue-600 text-white flex flex-col items-center gap-10">
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
