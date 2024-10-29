import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { abbreviateNumber } from 'js-abbreviation-number';
import api from '../axios/api';
import { BsThreeDotsVertical } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux';
import { dislike, like } from '../redux/videoSlice';
import Comment from './Comment';
import { formatDistanceToNow } from 'date-fns';

const VideoPlayer = () => {

  const video = useSelector(state => state.video.currentVideo);
  const userId = useSelector(state => state.user._id);
  const username = useSelector(state => state.user.username);
  const dispatch = useDispatch();


  const [comment, setComment] = useState('');
  const [isComment, setIsComment] = useState(false);
  const [comments, setComments] = useState([]);

  const likedislikeHandler = async (videoId, action) => {
    try {
      const response = await api.put(`/video/react/${videoId}?action=${action}`);
      if (action == 'like') {
        dispatch(like(userId));
      } else {
        dispatch(dislike(userId));
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getComments = async (videoId) => {
    try {
      const response = await api.get(`/video/get-comment/${videoId}`);
      // console.log(response.data);
      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getComments(video?._id)
  }, [video])



  const commentHandler = (value) => {
    setComment(value);
    setIsComment(true)
  }

  const cancelComment = () => {
    setComment('');
    setIsComment(false);
  }

  const submitComment = async (videoId) => {
    try {
      const response = await api.post(`/video/add-comment/${videoId}`,{text:comment});
      const data = response.data.comment;
      let newComment = {
        username:username,
        text:data.text,
        createdAt:data.createdAt,
        userId:userId
      };
      setComments((prev)=>[...prev,newComment])
      cancelComment();
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full">
      {/* Video Player */}
      <div className="relative pb-[56.25%] h-0">
        {
          video?.video && <ReactPlayer
            className="absolute top-0 left-0"
            url={`http://localhost:5001${video?.video}`}
            width="100%"
            height="100%"
            controls
          />
        }

      </div>

      {/* Video Information */}
      <div className="mt-4">
        <h1 className="text-lg font-semibold">{video?.title}</h1>
        <div className="flex lg:w-[calc(100%-260px)] items-center justify-between mt-2">
          <div className='flex gap-5 items-center'>
            <img src="http://localhost:5001/images/thumbnail-1729154845065-925985498-.png" className='w-10 h-10  rounded-full object-cover' alt="" />
            <div className='flex flex-col '>
              <div className='font-bold lg:text-lg'>{video?.channelName}</div>
              <div>subscriber count</div>
            </div>
          </div>
          <button className="px-2 py-1 lg:text-lg sm::text-sm text-xs bg-blue-600 text-white  rounded-xl">Subscribe</button>
          <div className="flex space-x-4">
            <div onClick={() => likedislikeHandler(video._id, 'like')} className="flex items-center cursor-pointer px-4 py-2 bg-gray-200 rounded-lg">
              <AiOutlineLike className="mr-2" />
              {video?.likes?.length}
            </div>
            <div onClick={() => likedislikeHandler(video._id, 'dislike')} className="flex items-center cursor-pointer px-4  py-2 bg-gray-200 rounded-xl">
              <AiOutlineDislike className="mr-2" />
            </div>
          </div>
        </div>
      </div>
      {/* comment section */}
      <div className='w-full mt-12'>
        <Comment isComment={isComment}
          comment={comment}
          commentHandler={commentHandler}
          cancelComment={cancelComment}
          submitComment={submitComment}
          videoId = {video?._id}

        />
      </div>
      {/* comments  */}
      {
        comments.map((comment) => (
          <div key={comment._id} className="relative mt-8 flex space-x-4  ">
            {/* Avatar */}
            <div>
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
                {comment.username.charAt(0).toUpperCase()}
              </div>
            </div>
            {/* Comment Content */}
            <div className="flex-1">
              {/* User Info */}
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-sm">@{comment.username}</span>
                <span className="text-gray-500 text-xs">
                  {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                </span>
              </div>

              {/* Comment Text */}
              <p className="text-sm mt-1">
                {comment.text}
              </p>
            </div>

            {/* Three Dots (Options Menu) */}
            <div className="absolute top-4 right-4">
              <button className="text-gray-400 hover:text-black">
                <BsThreeDotsVertical />
              </button>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default VideoPlayer;
