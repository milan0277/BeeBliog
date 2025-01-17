import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import { BlogContext } from '../Context/BlogsContext';
function Blog() {

    const { id } = useParams()
    // const [blogs, setBlogs] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState({})
    const [content, setcontent] = useState('')

    const { blogs } = useContext(BlogContext)
    useEffect(() => {
        const selectedBlog = blogs.find((blog) => blog._id === id);
        setSelectedBlog(selectedBlog || {});
    }, [blogs])

    const handleUpdate = () => {

    }

    return (
        <>
            <div className='flex flex-col justify-center items-cente'>
                <div className='p-10 md:p-20'>
                    <div className="w-full h-[400px]">
                        <img className='w-full h-full object-' src={selectedBlog.image} alt="" />
                    </div>
                    <div className='flex justify-end gap-2 p-4 '>
                        <p className='text-red-500'> <i className="fa-solid fa-trash"></i></p>
                        <p className='text-blue-500'><i className="fa-solid fa-pen-to-square"></i></p>

                    </div>
                    <div className='flex justify-between pb-5'>
                       <p className='text-gray-500'>{selectedBlog.updatedAt}</p>
                    </div>

                    <h1 className="text-3xl md:text-5xl text-slate-800 font-bold py-4 text-center mb-5 ">{selectedBlog.title}</h1>
                    {/* <input className="text-5xl w-full font-bold py-4 bg-emerald-800 text-center mb-5 text-white" type="text" value={"Lorem ipsum dolor sit amet"} /> */}
                    <p className="p-3 text-slate-700 font-semibold text-sm md:text-xl text-justify">
                        {selectedBlog.content}
                    </p>
                    {/* <textarea value={selectedBlog.content} className="p-3 w-full h-full  bg-emerald-800 text-white font-semibold rounded-md outline-none" onChange={e => setcontent(e.target.value)}>

                    </textarea>
                    <div className='flex justify-end'>
                        <button onClick={handleUpdate} className='py-3 px-4 font-semibold rounded-full bg-emerald-500'>Update</button>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Blog