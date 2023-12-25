import React, { useState } from 'react'
import ImageUploader from './ImageUploader'
import ImageResult from './ImageResult'
import { useDispatch } from 'react-redux';
import { HideLoader, ShowLoader } from '../../Redux/loaderSlice';
import toast from 'react-hot-toast';
import { PerformOCR } from '../../Apicalls/ocr';
import FormData from 'form-data';

const ImageProcessor = () => {

    const [imageUrl,setImageUrl] = useState('');
    const [result , setResult] = useState('');

    const dispatch = useDispatch();

    const processingHandler = async () => {
        if(!imageUrl){
            toast.error('No image uploaded');
            return;
        }
        try {
            dispatch(ShowLoader());
            let data = new FormData();
            data.set('imageUrl', imageUrl);
            const response = await PerformOCR(data);
            dispatch(HideLoader());
            if(response.success){
                toast.success('Processing Completed');
                setResult(response.data);
            }

            else {
                dispatch(HideLoader());
                toast.error('something went wrong');
            }
        } catch (error) {
            dispatch(HideLoader());
            toast.error(error);
        }
    }
  return (
    <div className="flex items-center justify-between h-[80vh] p-20">
      <ImageUploader setImageUrl={setImageUrl}/>
      <button className='contained-btn' onClick={processingHandler}>Process</button>
      <ImageResult resultData={result} imageUrl={imageUrl}/>
    </div>
  )
}

export default ImageProcessor
