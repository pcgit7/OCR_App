import axios from 'axios';

export const  UploadImage = async(image) => {
    try 
    {
        const response = await axios.post('http://localhost:5000/api/ocr/upload-id-image',image,{
            headers : {
                'content-type': 'multipart/form-data'
            }
        });
        return response.data;

    } catch (error) {
        console.log(error);
        return error.response.data;
    }
}



