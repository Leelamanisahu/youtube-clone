import React from 'react';
import VideoPlayer from './VideoPlayer';
import SuggestedVideos from './SuggestedVideos';
import { useParams } from 'react-router-dom';

const VideoPage = () => {
    const {id} = useParams();
    const getVideo = async()=>{
        try {
            
        } catch (error) {
            
        }
    }
  return (
    <div className="flex justify-center flex-col lg:flex-row w-full h-full mt-20 lg:px-20">
      {/* Main Video Section */}
      <div className="lg:w-[70%] w-full lg:p-4">
        <VideoPlayer />
      </div>

      {/* Suggestions Section */}
      <div className="lg:w-[30%] w-full bg-white p-4 border-l border-gray-200">
        <SuggestedVideos />
      </div>
    </div>
  );
};

export default VideoPage;
