import React from 'react';
import { motion } from 'framer-motion';

interface InfoCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <motion.article
      className="flex flex-col flex-1 shrink px-6 pt-6 pb-10 rounded-3xl border-b border-amber-400 basis-0 bg-slate-50 min-w-[240px] shadow-[33px_39px_52px_rgba(179,176,201,0.14)] max-md:px-5 hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex flex-col w-full">
        <motion.div
          className="flex overflow-hidden gap-2.5 justify-center items-center pr-6 pl-6 border-solid bg-violet-950 bg-opacity-10 border-[5px] border-white border-opacity-30 h-[90px] min-h-[90px] rounded-[900px] w-[90px] max-md:px-5"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <img
            loading="lazy"
            src={imageSrc}
            alt=""
            className="object-contain self-stretch my-auto aspect-square w-[45px]"
          />
        </motion.div>
        <motion.div
          className="flex flex-col mt-7 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="flex flex-col w-full">
            <motion.h2
              className="text-xl font-semibold leading-7 text-neutral-800 mb-5"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {title}
            </motion.h2>
            <motion.p
              className="mt-3.5 text-base leading-6 text-gray-500"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {description}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
};

export default InfoCard;
