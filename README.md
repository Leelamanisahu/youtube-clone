**YouTube Clone Project**

This project is a YouTube-inspired platform where users can create profiles, watch and upload videos, manage their channels, and interact with other users’ content. Built with React and Node.js, it offers a variety of features similar to YouTube, including video uploads, comments, likes, and dislikes. It also incorporates Multer and Cloudinary for file uploads and JWT for secure authentication.

 - **Features**
    - **User Profiles**
    - **User Registration and Login**:Users can sign up, create a profile, and securely log in to the platform.
    - **Authentication** : Handled using JWT to ensure secure sessions.

 - **Video Streaming and Channels**
    - **Watch Videos** : Users can watch videos uploaded by other users.
    - **Create Channel** : Registered users can create their own channels.
    - **Upload Videos0** : After creating a channel, users can upload videos with thumbnails.
    - **Edit and Delete Videos** : Channel owners can edit or delete their videos.

 - **Video Interactions**
    - **Like and Dislike Videos** : Users can like or dislike any video on the platform.
    - **Comment on Videos** : Users can add comments, and edit or delete their own comments on videos.

 - **Technology Stack**
    - **Frontend**: React.js
    - **Backend**: Node.js, Express.js
    - **Database**: MongoDB
    - **Authentication**: JWT (JSON Web Token)
    - **File Storage**: Multer for file handling and Cloudinary for storing videos and thumbnails

    **Clone project**

    git clone https://github.com/Leelamanisahu/youtube-clone.git
    cd youtube-clone
 
    **run backend**
   - cd backend
   - npm install
   - npm start

    **run frontend**
   - cd frontend
   - npm install
   - npm run dev

- **how to use**
   - create profile and register
   - check the vidoe by touching on the thumbnail and go to channel by touching on the channel image
   - to uplaod video create channel to create channel touch on the user profile and touch the your channel
   - if user have alredy created the channel then it goes to the user channel and if not then modal open to create it
   - after creating the channel it goes to the channel page and in the channel page there is + button 
   - after clicking in the + button the modal will open to the upload video from and give thumbnaiil and all the details
   - after clicking on the uplaod it will upload 
   - in the channel video will be seen and in the thumbnail three dots will apear that will open menu in that there will be option for the edit and delete
   - click on edit and modal will open and you can update the video 
   - click on the delete and you can delete the video
   - in the video there are comment section where you can uplaod the comment 
   - in this comment there three dot 
   - after clicking on this three dot the edit and delete menu will be apear where you can edit and delete the comment
   