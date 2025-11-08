import axios from "axios";


const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;


export const uploadToCloudinary = async (file) => {
    if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_UPLOAD_PRESET) {
        throw new Error("Missing Cloudinary credentials in environment variables");
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    // if (folder) formData.append("folder", folder);

    try {
        const response = await axios.post(url, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        const data = await response.data;
        console.log(data)
        console.log(response.data.secure_url)
        return response.data.secure_url;
    } catch (e) {
        console.log("uploading image to cloudinary error: ", e)
        throw new Error("Failed to upload image to Cloudinary");
    }

};