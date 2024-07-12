import { useState, } from 'react'
import { useNavigate } from 'react-router-dom'; // Correct import
import 'react-quill/dist/quill.snow.css';
import Editor from '../components/Editor';
import upload from "../utils/upload.js";
import newRequest from "../utils/newRequest.js";

const AddRecipe = () => {
    const [file, setFile] = useState(null);
    //const [content, setContent] = useState('');
    const [user, setUser] = useState({
        name: "",
        desc: "",
        content: "",
        img: "",
        cuisine: "",
        category: "",
        difficulty: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });

        console.log(user)
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = await upload(file);
        try {
            await newRequest.post("/auth/register", {
                ...user,
                img: url,
            });
            navigate("/")
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='w-full'>
            <div className='w-[90%] md:container mx-auto'>
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
                            onChange={e => setFile(e.target.file[0])}
                        />
                    </div>
                    <p className='text-[#5a5a5a] text-sm'>Add ingredients and instructions below:</p>
                    <Editor name='content' onChange={handleChange} />
                    <button className='bg-[#171717] text-white h-10 cursor-pointer rounded-lg'>Create Recipe</button>
                </form>
            </div>
        </div>
    )
}

export default AddRecipe