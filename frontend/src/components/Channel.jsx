import React from 'react'
import { useParams } from 'react-router-dom'

const Channel = () => {
    const {channelId} = useParams();

   
  

  return (
     <div className="bg-gray-100 mt-12 min-h-screen">
      {/* Channel Header Section */}
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative">
            {/* Channel Banner */}
            <img
              src={`http://localhost:5001/images/thumbnail-1729592195974-289848577-.png`} // Replace with banner image path
              alt="Channel Banner"
              className="w-full h-52 object-cover"
            />
            {/* Channel Info */}
            <div className="flex mt-10 items-center space-x-4">
              {/* Profile Image */}
              <img
                 src={`http://localhost:5001/images/thumbnail-1729592195974-289848577-.png`} // Replace with profile image path
                alt="Profile Logo"
                className="rounded-full w-20 h-20 border-4 border-white"
              />
              <div>
                <h1 className="text-2xl font-bold">your channel</h1>
                <p className="text-gray-600">@InternshalaOfficial • 117K subscribers • 802 videos</p>
              </div>
              {/* Subscribe Button */}
              <div className="ml-auto">
                <button className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Channel Navigation Tabs */}
          <div className="flex space-x-6 mt-12 px-8">
            <button className="font-semibold text-gray-700">Home</button>
            <button className="font-semibold text-gray-700 border-b-2 border-black">Videos</button>
            <button className="font-semibold text-gray-700">Playlists</button>
            <button className="font-semibold text-gray-700">Community</button>
            <button className="font-semibold text-gray-700">About</button>
          </div>
        </div>
      </div>

      {/* Videos Section */}
      <div className="max-w-screen-xl mx-auto py-8">
        <h2 className="text-xl font-semibold mb-4">Latest Videos</h2>

        {/* Video Thumbnails Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Video Card */}
          <div className="bg-white rounded-lg shadow-lg">
            <img
              src="/path-to-video-thumbnail.jpg" // Replace with video thumbnail
              alt="Video Thumbnail"
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="font-bold text-sm">TCS Interview Questions & Answers</h3>
              <p className="text-xs text-gray-500">122 views • 1 day ago</p>
            </div>
          </div>
          {/* Add more video cards as needed */}
        </div>
      </div>
    </div>
  )
}

export default Channel
