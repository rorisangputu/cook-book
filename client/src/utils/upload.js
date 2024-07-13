import axios from "axios";

const upload = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "recipe-cooks");
    const uploadLink = 'https://api.cloudinary.com/v1_1/dslkrakk7/image/upload'
    try {
        const res = await axios.post(uploadLink, data);

        const { url } = res.data;
        return url;
    } catch (err) {
        console.log("Upload error:", err);
    }
};

export default upload; 