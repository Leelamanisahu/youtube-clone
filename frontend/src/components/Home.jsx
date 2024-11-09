import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Video from './Video'
import ListItems from './ListItem'
import { useSelector } from 'react-redux'
import api from "../axios/api";


const Home = () => {

  const currentUser = useSelector((state)=> state.user)

  const api_uri = import.meta.env.VITE_API_URI;

  const [videos,setVideos] = useState([]);

  const[categories,setCategories] = useState('');

  const getVideos = async(cat)=>{
      try {
        console.log("working")
        const response = await api.get(`/video/get?genre=${cat}`);
        const data = response.data;
        setVideos(data);
      } catch (error) {
        console.log(error)
      }
  }

  useEffect(()=>{
    getVideos(categories)
  },[categories])

  // console.log(categories)

  // const videos = [
  //   {
  //     videoId: "abc123",
  //     thumbnails: [{ url: "https://example.com/thumbnail1.jpg" }],
  //     lengthSeconds: 320,
  //     title: "Learn React in 20 Minutes!",
  //     author: {
  //       title: "CodeCraze",
  //       avatar: [{ url: "https://example.com/avatar1.jpg" }],
  //       badges: [{ type: "VERIFIED_CHANNEL" }],
  //     },
  //     stats: { views: 120000 },
  //     publishedTimeText: "1 day ago",
  //   },
  //   {
  //     videoId: "def456",
  //     thumbnails: [{ url: "https://example.com/thumbnail2.jpg" }],
  //     lengthSeconds: 215,
  //     title: "Mastering JavaScript: Tips & Tricks",
  //     author: {
  //       title: "JS Mastery",
  //       avatar: [{ url: "https://example.com/avatar2.jpg" }],
  //       badges: [{ type: "VERIFIED_CHANNEL" }],
  //     },
  //     stats: { views: 54000 },
  //     publishedTimeText: "3 days ago",
  //   },
  //   {
  //     videoId: "ghi789",
  //     thumbnails: [{ url: "https://example.com/thumbnail3.jpg" }],
  //     lengthSeconds: 600,
  //     title: "Node.js Best Practices",
  //     author: {
  //       title: "Backend Guru",
  //       avatar: [{ url: "https://example.com/avatar3.jpg" }],
  //       badges: [{ type: "VERIFIED_CHANNEL" }],
  //     },
  //     stats: { views: 90000 },
  //     publishedTimeText: "2 weeks ago",
  //   },
  //   {
  //     videoId: "jkl012",
  //     thumbnails: [{ url: "https://example.com/thumbnail4.jpg" }],
  //     lengthSeconds: 180,
  //     title: "Understanding React Hooks",
  //     author: {
  //       title: "React Pro",
  //       avatar: [{ url: "https://example.com/avatar4.jpg" }],
  //       badges: [{ type: "VERIFIED_CHANNEL" }],
  //     },
  //     stats: { views: 43000 },
  //     publishedTimeText: "4 days ago",
  //   },
  //   {
  //     videoId: "mno345",
  //     thumbnails: [{ url: "https://example.com/thumbnail5.jpg" }],
  //     lengthSeconds: 540,
  //     title: "CSS Grid vs Flexbox: Which One to Use?",
  //     author: {
  //       title: "CSS Expert",
  //       avatar: [{ url: "https://example.com/avatar5.jpg" }],
  //       badges: [{ type: "VERIFIED_CHANNEL" }],
  //     },
  //     stats: { views: 67000 },
  //     publishedTimeText: "1 week ago",
  //   },
  //   {
  //     videoId: "pqr678",
  //     thumbnails: [{ url: "https://example.com/thumbnail6.jpg" }],
  //     lengthSeconds: 420,
  //     title: "10 JavaScript Libraries You Should Know",
  //     author: {
  //       title: "Frontend Dev",
  //       avatar: [{ url: "https://example.com/avatar6.jpg" }],
  //       badges: [{ type: "VERIFIED_CHANNEL" }],
  //     },
  //     stats: { views: 82000 },
  //     publishedTimeText: "2 days ago",
  //   },
  //   {
  //     videoId: "stu901",
  //     thumbnails: [{ url: "https://example.com/thumbnail7.jpg" }],
  //     lengthSeconds: 195,
  //     title: "Intro to TypeScript: Why Use It?",
  //     author: {
  //       title: "TS Expert",
  //       avatar: [{ url: "https://example.com/avatar7.jpg" }],
  //       badges: [{ type: "VERIFIED_CHANNEL" }],
  //     },
  //     stats: { views: 54000 },
  //     publishedTimeText: "5 days ago",
  //   },
  //   {
  //     videoId: "vwx234",
  //     thumbnails: [{ url: "https://example.com/thumbnail8.jpg" }],
  //     lengthSeconds: 260,
  //     title: "How to Build a REST API in Express.js",
  //     author: {
  //       title: "API Guru",
  //       avatar: [{ url: "https://example.com/avatar8.jpg" }],
  //       badges: [{ type: "VERIFIED_CHANNEL" }],
  //     },
  //     stats: { views: 71000 },
  //     publishedTimeText: "3 weeks ago",
  //   },
  //   {
  //     videoId: "yzb567",
  //     thumbnails: [{ url: "https://example.com/thumbnail9.jpg" }],
  //     lengthSeconds: 220,
  //     title: "What's New in ES2023?",
  //     author: {
  //       title: "JavaScript Daily",
  //       avatar: [{ url: "https://example.com/avatar9.jpg" }],
  //       badges: [{ type: "VERIFIED_CHANNEL" }],
  //     },
  //     stats: { views: 87000 },
  //     publishedTimeText: "1 month ago",
  //   },
  //   {
  //     videoId: "xyz890",
  //     thumbnails: [{ url: "https://example.com/thumbnail10.jpg" }],
  //     lengthSeconds: 280,
  //     title: "React Native Crash Course",
  //     author: {
  //       title: "Mobile Master",
  //       avatar: [{ url: "https://example.com/avatar10.jpg" }],
  //       badges: [{ type: "VERIFIED_CHANNEL" }],
  //     },
  //     stats: { views: 64000 },
  //     publishedTimeText: "2 weeks ago",
  //   },
  //   {
  //     videoId: "abc011",
  //     thumbnails: [{ url: "https://example.com/thumbnail11.jpg" }],
  //     lengthSeconds: 300,
  //     title: "Understanding Redux Toolkit",
  //     author: {
  //       title: "State Master",
  //       avatar: [{ url: "https://example.com/avatar11.jpg" }],
  //       badges: [{ type: "VERIFIED_CHANNEL" }],
  //     },
  //     stats: { views: 57000 },
  //     publishedTimeText: "6 days ago",
  //   },
  //   {
  //     videoId: "def122",
  //     thumbnails: [{ url: "https://example.com/thumbnail12.jpg" }],
  //     lengthSeconds: 320,
  //     title: "Next.js vs React: What's the Difference?",
  //     author: {
  //       title: "Fullstack Developer",
  //       avatar: [{ url: "https://example.com/avatar12.jpg" }],
  //       badges: [{ type: "VERIFIED_CHANNEL" }],
  //     },
  //     stats: { views: 92000 },
  //     publishedTimeText: "1 month ago",
  //   },
  //   {
  //     videoId: "ghi233",
  //     thumbnails: [{ url: "https://example.com/thumbnail13.jpg" }],
  //     lengthSeconds: 240,
  //     title: "Building an E-commerce Website",
  //     author: {
  //       title: "Commerce Coder",
  //       avatar: [{ url: "https://example.com/avatar13.jpg" }],
  //       badges: [{ type: "VERIFIED_CHANNEL" }],
  //     },
  //     stats: { views: 66000 },
  //     publishedTimeText: "2 months ago",
  //   },
  //   {
  //     videoId: "jkl344",
  //     thumbnails: [{ url: "https://example.com/thumbnail14.jpg" }],
  //     lengthSeconds: 400,
  //     title: "Async JavaScript: Promises and Async/Await",
  //     author: {
  //       title: "Async Pro",
  //       avatar: [{ url: "https://example.com/avatar14.jpg" }],
  //       badges: [{ type: "VERIFIED_CHANNEL" }],
  //     },
  //     stats: { views: 120000 },
  //     publishedTimeText: "3 weeks ago",
  //   },
  //   {
  //     videoId: "mno455",
  //     thumbnails: [{ url: "https://example.com/thumbnail15.jpg" }],
  //     lengthSeconds: 360,
  //     title: "Intro to React Router v6",
  //     author: {
  //       title: "React Router Guru",
  //       avatar: [{ url: "https://example.com/avatar15.jpg" }],
  //       badges: [{ type: "VERIFIED_CHANNEL" }],
  //     },
  //     stats: { views: 45000 },
  //     publishedTimeText: "5 days ago",
  //   },
  //   {
  //     videoId: "pqr566",
  //     thumbnails: [{ url: "https://example.com/thumbnail16.jpg" }],
  //     lengthSeconds: 310,
  //     title: "Debugging JavaScript with Chrome DevTools",
  //     author: {
  //       title: "Debug Master",
  //       avatar: [{ url: "https://example.com/avatar16.jpg" }],
  //       badges: [{ type: "VERIFIED_CHANNEL" }],
  //     },
  //     stats: { views: 78000 },
  //     publishedTimeText: "1 week ago",
  //   },
  //   {
  //     videoId: "stu677",
  //     thumbnails: [{ url: "https://example.com/thumbnail17.jpg" }],
  //     lengthSeconds: 275,
  //     title: "Introduction to WebSockets in Node.js",
  //     author: {
  //       title: "Socket Dev",
  //       avatar: [{ url: "https://example.com/avatar17.jpg" }],
  //       badges: [{ type: "VERIFIED_CHANNEL" }],
  //     },
  //     stats: { views: 91000 },
  //     publishedTimeText: "2 weeks ago",
  //   },
  //   {
  //     videoId: "vwx788",
  //     thumbnails: [{ url: "https://example.com/thumbnail18.jpg" }],
  //     lengthSeconds: 190,
  //     title: "How to Build a Portfolio Website",
  //     author: {
  //       title: "Web Dev Enthusiast",
  //       avatar: [{ url: "https://example.com/avatar18.jpg" }],
  //       badges: [{ type: "VERIFIED_CHANNEL" }],
  //     },
  //     stats: { views: 65000 },
  //     publishedTimeText: "3 days ago",
  //   },
  //   {
  //     videoId: "yzb899",
  //     thumbnails: [{ url: "https://example.com/thumbnail19.jpg" }],
  //     lengthSeconds: 410,
  //     title: "Node.js Event Loop Explained",
  //     author: {
  //       title: "Node Master",
  //       avatar: [{ url: "https://example.com/avatar19.jpg" }],
  //       badges: [{ type: "VERIFIED_CHANNEL" }],
  //     },
  //     stats: { views: 72000 },
  //     publishedTimeText: "1 week ago",
  //   },
  //   {
  //     videoId: "xyz900",
  //     thumbnails: [{ url: "https://example.com/thumbnail20.jpg" }],
  //     lengthSeconds: 285,
  //     title: "Understanding CSS Animations",
  //     author: {
  //       title: "CSS Pro",
  //       avatar: [{ url: "https://example.com/avatar20.jpg" }],
  //       badges: [{ type: "VERIFIED_CHANNEL" }],
  //     },
  //     stats: { views: 86000 },
  //     publishedTimeText: "2 days ago",
  //   },
  // ];
  return (
    <div className="flex mt-20">
    <Sidebar />
    <div className="h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
      <ListItems setCategories={setCategories} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5 " >
      {
        videos &&
         videos.map((item) => {
          return (<Video  key={item._id} video={item} />);
        })
      }
      </div>
    </div>
  </div>
  )
}

export default Home
