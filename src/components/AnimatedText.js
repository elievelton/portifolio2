import React from 'react';

const AnimatedText = ({ text, className = "" }) => {
  console.log(text);
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden '>
      <h1 className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className}`}>
        {
          (typeof text === 'string') ? text.split(" ").map((word, index) => 
            <span key={word + '-' + index}>
              {word}&nbsp;
            </span>
          ) : 'Texto inválido'
        }
      </h1>
    </div>
  );
};

export default AnimatedText;
