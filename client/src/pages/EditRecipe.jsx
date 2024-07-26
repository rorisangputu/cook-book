import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'; // Correct import
import 'react-quill/dist/quill.snow.css';
import Editor from '../components/Editor';
import upload from "../utils/upload.js";
import newRequest from "../utils/newRequest.js";

const EditRecipe = () => {
    const {id} = useParams();
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

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const res = await newRequest.get(`recipes/recipe/${id}`);
                const newRecipe = await res.data;
                //console.log(newRecipe)
                setRecipe(newRecipe);
                setContent(newRecipe.content);
            } catch (err) {
                console.error("Failed to fetch recipe", err);
            }
        };
        fetchRecipe();
    }, [id]);

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
            const res = await newRequest.post("recipes/createRecipe", {
                ...recipe,
                img: url, content: text
            });
            setRedirect(true)
            if (res.ok) {
                alert('Log In Successful')
            } else if (res.status === 401) {
                alert('Session expired or unauthorized. Please log in again.');
                navigate('/login');
            }
        } catch (err) {
            console.log(err);
        }
    };
  return (
        <div className='w-full'>
            <div className='w-[90%] md:container lg:w-[90%] xl:container mx-auto'>
                <h1 className='mt-4 text-[17px]'>Edit Recipe</h1>
                <form onSubmit={handleSubmit} className='flex flex-col gap-y-4 my-5 md:w-[90%] md:mx-auto'>
                    <input
                        type="text"
                        placeholder={'Name'}
                        className='border rounded-lg h-10 border-[#a4a4a4] p-2'
                        name='name'
                        value={recipe.name}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder={'Description'}
                        className='border rounded-lg h-10 border-[#a4a4a4] p-2'
                        name='desc'
                        value={recipe.desc}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder={'Cuisine'}
                        className='border rounded-lg h-10 border-[#a4a4a4] p-2'
                        name='cuisine'
                        value={recipe.cuisine}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder={'Category'}
                        className='border rounded-lg h-10 border-[#a4a4a4] p-2'
                        name='category'
                        value={recipe.category}
                        onChange={handleChange}
                    />
                    <select
                        className='border rounded-lg h-10 border-[#a4a4a4] p-2'
                        name='difficulty'
                        value={recipe.difficulty}
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
                    <button className='bg-[#171717] text-white h-10 cursor-pointer rounded-lg'>Update Recipe</button>
                </form>
            </div>
        </div>
    );
}

export default EditRecipe