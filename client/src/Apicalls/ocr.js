import axios from 'axios';

const backend_url = 'https://ocr-app-backend-vjd7.onrender.com';
export const  UploadImage = async(image) => {
    try 
    {
        const response = await axios.post(`${backend_url}/api/ocr/upload-id-image`,image,{
            headers : {
                'content-type': 'multipart/form-data'
            }
        });
        return response.data;

    } catch (error) {
        console.log(error);
        return error.response.data;
    }
};

export const PerformOCR =async(imageURL) => {
    try 
    {
        const response = await axios.post(`${backend_url}/api/ocr/process-image`,imageURL);
        return response.data;

    } catch (error) {
        return error.response.data;
    }
};



