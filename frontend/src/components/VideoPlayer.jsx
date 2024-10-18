import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { AiOutlineLike , AiOutlineDislike } from 'react-icons/ai';
import { abbreviateNumber } from 'js-abbreviation-number';

const VideoPlayer = () => {
  return (
    <div className="w-full">
      {/* Video Player */}
      <div className="relative pb-[56.25%] h-0">
        <ReactPlayer
          className="absolute top-0 left-0"
          url="https://www.youtube.com/watch?v=yqxhMcq6f_o"
          width="100%"
          height="100%"
          controls
        />
      </div>

      {/* Video Information */}
      <div className="mt-4">
        <h1 className="text-lg font-semibold">Finally Boruto & Kawaki TEAMED UP!</h1>
        <div className="flex lg:w-[calc(100%-260px)] items-center justify-between mt-2">
            <div className='flex gap-5 items-center'>
                <img src="http://localhost:5001/images/thumbnail-1729154845065-925985498-.png" className='w-10 h-10  rounded-full object-cover' alt="" />
                <div className='flex flex-col '>
                    <div className='font-bold lg:text-lg'>channel name</div>
                    <div>subscriber count</div>
                </div>
            </div>
          <button className="px-2 py-1 lg:text-lg sm::text-sm text-xs bg-blue-600 text-white  rounded-xl">Subscribe</button>
          <div className="flex space-x-4">
            <div className="flex items-center px-4 py-2 bg-gray-200 rounded-lg">
              <AiOutlineLike className="mr-2" /> {abbreviateNumber(4400)} 
            </div>
            <div className="flex items-center px-4  py-2 bg-gray-200 rounded-xl">
              <AiOutlineDislike className="mr-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
