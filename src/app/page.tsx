'use client';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar } from 'antd';
import { motion } from 'motion/react';
import { FaReact } from 'react-icons/fa';
import { IoCodeSlashOutline } from 'react-icons/io5';

export default function Home() {
  return (
    <>
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
          <p className="font-bold text-3xl text-white">Frontend Developer</p>
          <p className="text-2xl text-white">Chuyên gia Next.js</p>
          <button className="flex items-center justify-center px-5 py-2 gap-2 rounded-2xl bg-white text-blue-500 hover:bg-gray-100">
            <FontAwesomeIcon icon={faGithub} />
            <p>Github</p>
          </button>
        </motion.div>
      </div>
      <div className="flex flex-col items-center justify-center py-20 bg-white gap-10">
        <h1 className="text-3xl font-bold text-black">Kỹ năng chuyên môn</h1>
        <div className="grid md:flex gap-10">
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
            <p className="text-black">Next.js, TypeScript, Tailwind CSS</p>
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
            <p className="text-black">Best Practices, Code Review</p>
          </motion.div>
        </div>
      </div>
      <div className="py-20 gap-10 flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-black">Dự án tiêu biểu</h1>
      </div>
    </>
  );
}
