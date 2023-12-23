import React, { useState } from "react";

function ImageUploader() {
  
  const [image = "", setImage] = useState("");

  const onFileSelect = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader(file);
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      console.log(reader.result);
      setImage(reader.result);
    };
  };

  /*const updateProfilePic = async () => {
    try {
      dispatch(ShowLoader());
      const response = await UpdateProfilePicture(image);
      dispatch(HideLoader());
      if (response.success) {
        toast.success("Profile Pic Updated");
        dispatch(SetUser(response.data));
      } else {
        toast.error(response.error);
      }
    } catch (error) {
      dispatch(HideLoader());
      toast.error(error.message);
    }
  };
*/
  const updateProfilePic = () => {
    console.log("updating");
  };

  return (
    <div className="flex items-center justify-center h-[80vh]">
      <div className="text-xl font-semibold uppercase text-gray-500 flex flex-col gap-2 flex-col p-2 shadow-md border w-max border-gray-300 rounded">
        <div className="flex items-center">
          <div className={`border-gray-50 ${!image && 'dotted-border'}`}>
            {image ? (
              <img src={image} alt="profile pic" className="w-32 h-32" />
            ) : (
              <div className="border-black-100 outline-dashed w-32 h-32"></div>
            )}
          </div>
          <label htmlFor="file-input" className="cursor-pointer ml-8">
            Upload Image of ID
          </label>
        </div>
  
        <div className="flex gap-2 p-6">
          <input
            type="file"
            onChange={onFileSelect}
            className="file-input border-0"
            id="file-input"
          />
          <button className="contained-btn" onClick={updateProfilePic}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
  

}

export default ImageUploader;