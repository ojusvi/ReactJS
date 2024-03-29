import React from 'react';
import { x } from '../assets/images';
import { y } from '../assets/images';

function Hero({ background, setBackground }) {
  return (
    <div className="w-full h-screen flex items-center justify-center">
        <div>
            <div>
                <button onClick={() => {setBackground(x)}} className="text-white bg-blue-500 px-4 py-2 rounded-md mr-4">
                    TESLA X
                </button>
                <button onClick={() => {setBackground(y)}} className="text-white bg-blue-500 px-4 py-2 rounded-md">
                    TESLA Y
                </button>
            </div>
        </div>
    </div>
  );
}

export default Hero;
