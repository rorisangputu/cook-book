import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import Editor from '../components/Editor';
import upload from "../utils/upload.js";
import newRequest from "../utils/newRequest.js";
import currentUser from '../utils/getCurrentUser.js';

const AddRecipe = () => {
    const user = currentUser();
    const id = user._id;
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);
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
    const [errors, setErrors] = useState({}); // State to store validation messages
    const [redirect, setRedirect] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (redirect) {
            navigate(`/profile/${id}/myrecipes`);
        }
    }, [id, redirect, navigate]);

    const handleChange = (e) => {
        setRecipe((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
        setErrors((prev) => {
            return { ...prev, [e.target.name]: '' };
        });
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        console.log("Selected file:", selectedFile);
        setFile(selectedFile);
        setErrors((prev) => {
            return { ...prev, img: '' };
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!recipe.name) newErrors.name = 'Name is required';
        if (!recipe.desc) newErrors.desc = 'Description is required';
        if (!content) newErrors.content = 'Content is required';
        if (!recipe.cuisine) newErrors.cuisine = 'Cuisine is required';
        if (!recipe.category) newErrors.category = 'Category is required';
        if (!recipe.difficulty) newErrors.difficulty = 'Difficulty is required';
        if (!file) newErrors.img = 'Image is required';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        let url = '';
        if (file) {
            url = await upload(file);
        }

        try {
            const res = await newRequest.post("recipes/createRecipe", {
                ...recipe,
                img: url,
                content
            });

            if (res.ok || res.status == 201) {
                setRedirect(true);
                //alert('Recipe created successfully.');
            } else if (res.status === 401) {
                alert('Session expired or unauthorized. Please log in again.');
                navigate('/login');
            }
        } catch (err) {
            console.log(err);
            setErrors({ general: 'An unexpected error occurred. Please try again.' });
            setLoading(false);
        }
    };

    return (
        <div className='w-full'>
            <div className='w-[90%] md:container lg:w-[90%] xl:container mx-auto'>
                <h1 className='mt-4 text-[17px]'>Create Recipe</h1>
                <form action="" onSubmit={handleSubmit} className='flex flex-col gap-y-4 my-5 md:w-[90%] md:mx-auto'>
                    <input
                        type="text"
                        placeholder={'Name'}
                        className='border rounded-lg h-10 border-[#a4a4a4] p-2'
                        name='name'
                        onChange={handleChange}
                    />
                    {errors.name && <p className='text-red-500'>{errors.name}</p>}
                    
                    <input
                        type="text"
                        placeholder={'Description'}
                        className='border rounded-lg h-10 border-[#a4a4a4] p-2'
                        name='desc'
                        onChange={handleChange}
                    />
                    {errors.desc && <p className='text-red-500'>{errors.desc}</p>}
                    
                    <input
                        type="text"
                        placeholder={'Cuisine'}
                        className='border rounded-lg h-10 border-[#a4a4a4] p-2'
                        name='cuisine'
                        onChange={handleChange}
                    />
                    {errors.cuisine && <p className='text-red-500'>{errors.cuisine}</p>}
                    
                    <input
                        type="text"
                        placeholder={'Category'}
                        className='border rounded-lg h-10 border-[#a4a4a4] p-2'
                        name='category'
                        onChange={handleChange}
                    />
                    {errors.category && <p className='text-red-500'>{errors.category}</p>}
                    
                    <select
                        className='border rounded-lg h-10 border-[#a4a4a4] p-2'
                        name='difficulty'
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a difficulty</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                    {errors.difficulty && <p className='text-red-500'>{errors.difficulty}</p>}
                    
                    <div>
                        <label>Image</label>
                        <input
                            type="file"
                            className='p-2 border rounded-lg border-[#a3a3a3]'
                            onChange={handleFileChange}
                        />
                    </div>
                    {errors.img && <p className='text-red-500'>{errors.img}</p>}
                    
                    <p className='text-[#5a5a5a] text-sm'>Add ingredients and instructions below:</p>
                    <Editor value={content} onChange={setContent} />
                    {errors.content && <p className='text-red-500'>{errors.content}</p>}
                    
                    <button className='bg-[#171717] text-white h-10 text-center cursor-pointer rounded-lg'>
                        {loading ? (
                                <div className="flex items-center">
                                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.372 0 0 5.372 0 12h4z"></path>
                                    </svg>
                                    Processing...
                                </div>
                            ) : (
                                'Create Recipe'
                            )}
                    </button>
                </form>
                {errors.general && (
                    <div className='text-red-500 text-center mt-4'>
                        {errors.general}
                    </div>
                )}
            </div>
        </div>
    );
}

export default AddRecipe;
