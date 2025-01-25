'use client';

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
// ________________________________________________________
// npm install react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// ________________________________________________________




//COnnnection with Bucket
const supabaseUrl = 'https://uenjlyfmspzvqiljrxys.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlbmpseWZtc3B6dnFpbGpyeHlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0MzUwMTAsImV4cCI6MjA1MzAxMTAxMH0.EgfsETxOqE6sfMOb7fFs40A2aqKH0VjX7N1Hu0Z8N2c';
const supabase = createClient(supabaseUrl, supabaseKey);



//Function for uploading food image
const UploadFoodImage = () => {

    let [Picurl, setPicUrl] = useState("");

    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleUpload = async () => {

        if (!image) {
            toast.error('Please select an image to upload!', {
                position: 'top-center',
                autoClose: 3000,
            });
            return;
        }

        const fileName = `${Date.now()}-${image.name}`;

        try {

            const { data, error } = await supabase.storage
                .from('Student_Bucket')
                .upload(fileName, image);

            if (error) {
                throw error;
            }

            const { data: publicData, error: publicError } = supabase.storage
                .from('Student_Bucket')
                .getPublicUrl(fileName);

            setPicUrl((publicData.publicUrl).toString());

            if (publicError) {
                throw publicError;
            }

            toast.success(`Image uploaded successfully!`, {
                position: 'top-center',
                autoClose: 3000,
            });


            setImage(null);

        } catch (error) {
            toast.error(`Upload Failed: ${error.message}`, {
                position: 'top-center',
                autoClose: 3000,
            });
        }
    };






    return (

        <div className="min-h-screen bg-gradient-to-r from-red-800 to-white flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-2xl font-bold text-center mb-4 text-red-800">Upload Food Image</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Select Image:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-800 focus:border-red-800"
                    />
                </div>
                <button
                    onClick={handleUpload}
                    className="w-full bg-red-800 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                    Upload
                </button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default UploadFoodImage;
