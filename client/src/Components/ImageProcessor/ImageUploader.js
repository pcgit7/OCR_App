import React, { useState } from "react";
import { UploadImage } from "../../Apicalls/ocr";
import FormData from 'form-data'
import toast from "react-hot-toast";
import { ShowLoader , HideLoader} from '../../Redux/loaderSlice';
import {useDispatch} from 'react-redux';

function ImageUploader({setImageUrl}) {

  const [image = "", setImage] = useState("");
  const dispatch = useDispatch();

  const onFileSelect = async (e) => {
    const file = e.target.files[0];
    if (file.size <= 2 * 1024 * 1024) {
      const reader = new FileReader(file);
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        setImage(reader.result);
      };
    } else {
      toast.error("File size exceeds the limit of 2MB");
      e.target.value = '';
    }
  };

  const uploadIdImage = async () => {
    try {
      dispatch(ShowLoader());
      let data = new FormData();
      data.set('image', image);
      const response = await UploadImage(data);
      setImageUrl(response.imageUrl);
      dispatch(HideLoader());
      if (response.success) {
        toast.success("Profile Pic Updated");
      } else {
        toast.error("something went wrong");
      }
    } catch (error) {
      dispatch(HideLoader());
      toast.error(error.message);
    }
  };


  return (
    <div>
      <div className="h-[22rem] text-xl font-semibold uppercase text-gray-500 flex flex-col gap-2 flex-col p-2 shadow-md border w-max border-gray-300 rounded">
        <div className="flex items-center">
          <div className={`border-gray-50 ${!image && "dotted-border"}`}>
            {image ? (
              <img src={image} alt="profile pic" className="w-56 h-56" />
            ) : (
              <div className="border-black-100 outline-dashed w-56 h-56"></div>
            )}
          </div>
          <label htmlFor="file-input" className="cursor-pointer ml-6">
            Upload Image of ID (size limit of 2MB)
          </label>
        </div>

        <div className="flex gap-2 p-6 mt-5">
          <input
            type="file"
            onChange={onFileSelect}
            className="file-input border-0"
            id="file-input"
          />
          <button className="contained-btn" onClick={uploadIdImage}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageUploader;
