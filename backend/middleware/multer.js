import multer from "multer";
import path, {extname, join} from "path";
import CustomError from "../utils/CustomeError.js";

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        const imageTypes = /jpeg|jpg|png|gif/;
    const videoTypes = /mp4|mov|avi|wmv/;

    if (imageTypes.test(file.mimetype)) {
      cb(null, 'public/images/');
    } else if (videoTypes.test(file.mimetype)) {
      cb(null,  'public/videos/'); // Store videos in 'public/videos'
    } else {
      
      cb(new Error('Only images and videos are allowed!'));
    }
},
filename:(req,file,cb)=>{
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const filename = file.fieldname + "-"+ uniqueSuffix+"-"+ path.extname(file.originalname);
    cb(null,filename);
}
});

const fileFilter = (req,file,cb)=>{
     const allowedTypes = /jpeg|jpg|png|gif|mp4|mov|avi|wmv/;
     const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
     const mimetype = allowedTypes.test(file.mimetype);

     if(extname && mimetype){
        return cb(null,true); //accept file
     }else{
        cb(new CustomError('Only images and videos are allowed'))
    }
};

const upload = multer({
    storage,
    fileFilter
})

export default upload;