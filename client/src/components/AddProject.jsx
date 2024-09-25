import { Plus } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { addproject } from '../services/api';
import { Toaster, toast } from 'sonner';

const AddProject = () => {
    const titleref = useRef(null);
    const descref = useRef(null);
    const linkref = useRef(null);
    const coverref = useRef(null);
    
    const handleAdd = async (e) => {
        e.preventDefault();
        const projectdata = {
            title: titleref.current.value,
            desc: descref.current.value,
            link: linkref.current.value,
            coverimg: coverref.current.value,
        };
        
        try {
            const response = await addproject(projectdata);
            if (response.status === 201) {
                toast.success("Project added successfully!");
            }
        } catch (error) {
            toast.error("Error adding project: " + error);
        }
        
        setvisible(false);
    };

    const [visible, setvisible] = useState(false);
    
    return (
        <>
        <div className="h-screen w-screen bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="h-[20vh] w-full flex justify-center items-center">
            <button 
                onClick={() => setvisible(true)} 
                className="h-10 w-16 flex justify-center items-center text-white bg-blue-500 px-2 py-1 rounded-sm"
            >
                Add
                <Plus></Plus>
                
            </button>
            </div>
            </div>
            {visible && (
                <div className="fixed inset-0 bg-black/20 flex justify-center items-center z-50">
                    <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
                        <div className="flex justify-between items-center border-b-2 pb-2">
                            <h2 className="text-gray-700 text-xl font-bold">Add Project</h2>
                            <button onClick={() => setvisible(false)} className="text-gray-700">
                                ✖️
                            </button>
                        </div>
                        <form className="mt-4 space-y-4" onSubmit={handleAdd}>
                            <input 
                                type="text" 
                                ref={titleref} 
                                placeholder="Title" 
                                className="p-3 bg-gray-100 w-full rounded  focus:outline-none hover:border-b-2 border-blue-700 ring-blue-600" 
                                required 
                            />
                            <input 
                                type="text" 
                                ref={descref} 
                                placeholder="Description" 
                                className="p-3 bg-gray-100 w-full rounded  focus:outline-none hover:border-b-2 border-blue-700 ring-blue-600" 
                                required 
                            />
                            <input 
                                type="text" 
                                ref={linkref} 
                                placeholder="Project Link" 
                                className="p-3 bg-gray-100 w-full rounded  focus:outline-none hover:border-b-2 border-blue-700 ring-blue-600" 
                                required 
                            />
                            <input 
                                type="text" 
                                ref={coverref} 
                                placeholder="Cover URL" 
                                className="p-3 bg-gray-100 w-full rounded  focus:outline-none hover:border-b-2 border-blue-700 ring-blue-600"  
                                required 
                            />
                            <button 
                                type="submit" 
                                className="w-full py-2 text-white bg-gradient-to-r from-gray-500 via-purple-600 to-purple-600 rounded hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300"
                            >
                                Add Project
                            </button>
                        </form>
                    </div>
                    <Toaster richColors />
                </div>
            )}
        </>
    );
}

export default AddProject;
