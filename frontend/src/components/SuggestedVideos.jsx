import React from 'react';

const videos = [
  { title: 'Which Hokage can beat Isshiki?', views: '2M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Senjus are strongest', views: '205K', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  { title: 'Dikhawa mat karo 🙏', views: '5.5M', thumbnail: 'https://placekitten.com/300/200' },
  // Add more video objects here
];

const SuggestedVideos = () => {
  return (
    <div className="space-y-4">
      {videos.map((video, index) => (
        <div key={index} className="flex space-x-4">
          <img src={video.thumbnail} alt="thumbnail" className="w-40 h-24 object-cover" />
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold line-clamp-2">{video.title}</h3>
            <span className="text-xs text-gray-500">{video.views} views</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SuggestedVideos;
