import React from 'react';
import { Link } from 'react-router-dom';
import Time from "../Loader/Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

const Video = ({ video }) => {

  return (
    <div key={video._id} className="">
      <Link to={`/video/${video._id}`}>
        <div className="flex flex-col">
          {/* thumbnail & duration */}
          <div className="relative h-48 md:h-56 rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={`http://localhost:5001${video?.thumbnail}`}  // Use 'thumbnail' from the new data structure
              alt={video?.title}
            />
            {video?.duration && <Time time={video?.duration} />} {/* Assuming 'Time' needs length */}
          </div>
          {/* channel logo & title */}
          <div className="flex mt-3 space-x-2 ">
            <div className="flex items-start">
              <div className="flex h-9 w-9 rounded-full overflow-hidden border">
                <img
                  className="h-full w-full rounded-full overflow-hidden"
                  src="/images/default-avatar.png"  // Assuming no avatar in data, using a placeholder
                  alt={video?.channelName}
                />
              </div>
            </div>
            <div>
              <span className="text-sm font-bold line-clamp-2">
                {video?.title}
              </span>
              <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-600">
                {video?.channelName}
                {/* Assuming all channels are verified for now, else conditionally render */}
                <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
              </span>
              <div className="flex text-gray-500 text-[12px]">
                <span>{`${abbreviateNumber(video?.views, 2)} views`}</span>
                <span className="flex text-[24px] leading-none font-bold relative top-[-10px] mx-1">
                  .
                </span>
                {/* Assuming video has a published time */}
                <span>{`Published: ${video?.description}`}</span> {/* For demo, using description as time */}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Video;
