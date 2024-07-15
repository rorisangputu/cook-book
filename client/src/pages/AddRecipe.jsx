import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'; // Correct import
import 'react-quill/dist/quill.snow.css';
import Editor from '../components/Editor';
import upload from "../utils/upload.js";
import newRequest from "../utils/newRequest.js";

const AddRecipe = () => {

    const [file, setFile] = useState([]);
    const [content, setContent] = useState('');
    const [recipe, setRecipe] = useState({
        name: "",
        desc: "",
        content: "",
        img: "",
        cuisine: "",
        category: "",
        difficulty: ""
    });

    const [redirect, setRedirect] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (redirect) {
            navigate('/');
        }
    }, [redirect, navigate]);

    const handleChange = (e) => {
        setRecipe((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });


    };

    // useEffect(() => {
    //     console.log("File state updated:", file);
    // }, [file]);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        console.log("Selected file:", selectedFile);
        setFile(selectedFile);

    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = await upload(file);
        const text = content
        try {
            await newRequest.post("recipes/createRecipe", {
                ...recipe,
                img: url, content: text
            });
            setRedirect(true)
        } catch (err) {
            console.log(err);
        }
    };



    return (
        <div className='w-full'>
            <div className='w-[90%] md:container lg:w-[90%] xl:container mx-auto'>
                <h1 className='mt-4 text-[17px]'>Create Recipe</h1>
                <form action="" onSubmit={handleSubmit} className='flex flex-col gap-y-4 my-5 md:w-[90%] md:mx-auto'>
                    <input type="text"
                        placeholder={'Name'}
                        className='border rounded-lg h-10 border-[#a4a4a4] p-2'
                        name='name'
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder={'Description'}
                        className='border rounded-lg h-10 border-[#a4a4a4] p-2'
                        name='desc'
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder={'Cuisine'}
                        className='border rounded-lg h-10 border-[#a4a4a4] p-2'
                        name='cuisine'
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder={'Category'}
                        className='border rounded-lg h-10 border-[#a4a4a4] p-2'
                        name='category'
                        onChange={handleChange}
                    />

                    <select
                        className='border rounded-lg h-10 border-[#a4a4a4] p-2'
                        name='difficulty'
                        onChange={handleChange}
                        required
                    >
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Advanced">Advanced</option>
                    </select>

                    <div>
                        <label>Image</label>
                        <input
                            type="file"
                            className='p-2 border rounded-lg border-[#a3a3a3]'
                            onChange={handleFileChange}
                        />
                    </div>
                    <p className='text-[#5a5a5a] text-sm'>Add ingredients and instructions below:</p>
                    <Editor value={content} onChange={setContent} />
                    <button className='bg-[#171717] text-white h-10 cursor-pointer rounded-lg'>Create Recipe</button>
                </form>
            </div>
        </div>
    )
}

export default AddRecipe