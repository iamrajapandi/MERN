import { toast } from "sonner";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaSquareGithub } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MessageCircleWarning, Trash, Check } from "lucide-react";
import { deleteproj } from '../services/api';

const ProjectCard = ({ title, desc, id, coverimg, git, link, fetchProjects }) => {
  const [titleState, setTitleState] = useState(title);
  const [descState, setDescState] = useState(desc);
  const [gitState, setGitState] = useState(git);
  const [imageState, setImageState] = useState(coverimg);
  const [linkState, setLinkState] = useState(link);
  const [visible, setVisible] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [showFullDesc, setShowFullDesc] = useState(false); // State for Read More

  const handleEdit = async (e) => {
    e.preventDefault();
    const projectData = {
      title: titleState,
      desc: descState,
      link: linkState,
      git: gitState,
      image: imageState,
    };

    try {
      const response = await editProject(id, projectData);
      if (response.status === 200) {
        toast('Project updated!', {
          className: 'bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
          icon: <Check />,
        });
        setRefresh(true);
      }
    } catch (error) {
      toast('Error: ' + error.message, {
        className: 'bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
        icon: <MessageCircleWarning />,
      });
    }
    setVisible(false);
  };

  const handleDelete = async () => {
    try {
      const response = await deleteproj(id);
      if (response.status === 200) {
        toast('Project deleted!', {
          className: 'bg-gradient-to-r from-red-500 to-pink-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
          icon: <Trash />,
        });
        setRefresh(true);
      }
    } catch (error) {
      toast('Error: ' + error.message, {
        className: 'bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
        icon: <MessageCircleWarning />,
      });
    }
  };

  useEffect(() => {
    if (refresh) {
      fetchProjects();
      setRefresh(false);
    }
  }, [refresh, fetchProjects]);

  return (
    <>
      <motion.div initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
        <div className="flex flex-wrap justify-center gap-5 p-4">
          <div className="w-full sm:w-80 md:w-64 lg:w-56 bg-white border rounded-lg shadow-lg overflow-hidden flex flex-col cursor-pointer transition-transform transform hover:scale-105">
            <img src={imageState} alt={titleState} className='h-32 w-full object-cover' />
            <div className="flex-grow flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-lg font-bold">{titleState}</h3>
              <p className="text-sm text-gray-600">
                {showFullDesc ? descState : descState.length > 100 ? descState.slice(0, 100) + '...' : descState}
              </p>
              <button className="text-blue-500" onClick={() => setShowFullDesc(!showFullDesc)}>
                {showFullDesc ? "Read Less" : "Read More"}
              </button>
            </div>
            <div className="flex justify-between items-center p-2 border-t">
              <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:text-blue-700">
                <FaSquareGithub className='h-5 w-5' />
              </a>
              <FaRegEdit className='h-5 w-5 text-blue-950 cursor-pointer' onClick={() => setVisible(true)} />
              <MdDelete className='h-5 w-5 text-red-700 cursor-pointer' onClick={handleDelete} />
            </div>
          </div>
        </div>

        {visible && (
          <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3">
              <div className="flex justify-between items-center p-4 border-b text-blue-500 font-bold">
                <span>Edit Project</span>
                <button onClick={() => setVisible(false)} className="text-gray-500 hover:text-gray-700">Close</button>
              </div>
              <form className="p-4 flex flex-col gap-4" onSubmit={handleEdit}>
                <input type="text" value={titleState} onChange={(e) => setTitleState(e.target.value)} placeholder="Title" className="p-2 border rounded" required />
                <input type="text" value={descState} onChange={(e) => setDescState(e.target.value)} placeholder="Description" className="p-2 border rounded" required />
                <input type="text" value={linkState} onChange={(e) => setLinkState(e.target.value)} placeholder="Project Link" className="p-2 border rounded" required />
                <input type="text" value={imageState} onChange={(e) => setImageState(e.target.value)} placeholder="Image URL" className="p-2 border rounded" required />
                <input type="text" value={gitState} onChange={(e) => setGitState(e.target.value)} placeholder="Git" className="p-2 border rounded" required />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Update Project</button>
              </form>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default ProjectCard;
