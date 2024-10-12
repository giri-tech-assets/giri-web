import React from 'react';

const bookDemoStyles = {
  button: "flex overflow-hidden gap-2 justify-center items-center px-7 py-4 mt-20 bg-amber-400 rounded-2xl shadow-[8px_24px_35px_rgba(253,195,46,0.15)] max-md:px-5 max-md:mt-10",
  span: "self-stretch my-auto text-lg font-medium leading-loose text-violet-950",
  outerDiv: "flex overflow-hidden flex-col self-stretch my-auto max-w-[290px] w-[25px]",
  innerDiv: "flex overflow-hidden flex-col justify-center items-center min-h-[24px] w-[25px]",
  img: "object-contain w-full aspect-[1.04]"
};

const bookDemoContent = {
  buttonText: "Book a Demo",
  imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/15cecfc47078d1130b56f0cea083f4cbe22a7305f55b4f118aa969ebfac07e57?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e",
  imgAlt: ""
};

export const BookDemo: React.FC = () => {
  return (
    <button className={bookDemoStyles.button}>
      <span className={bookDemoStyles.span}>{bookDemoContent.buttonText}</span>
      <div className={bookDemoStyles.outerDiv}>
        <div className={bookDemoStyles.innerDiv}>
          <img
            loading="lazy"
            src={bookDemoContent.imgSrc}
            alt={bookDemoContent.imgAlt}
            className={bookDemoStyles.img}
          />
        </div>
      </div>
    </button>
  );
};
