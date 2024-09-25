// import { Pencil, Trash } from 'lucide-react'
// import React from 'react'
// import { deleteproj } from '../services/api'

// const ProjectCard = ({ title, desc, pid, cover, id ,fetchProject}) => {
//     const handledelete = async () => {
//         try {
//             const response = await deleteproj(id)
//             console.log(response.status)
//             if (response.status === 200) {
//                 console.log("deleted")

//             }
//         } catch (error) {
//             console.log(error)

//         }
// fetchProject()
//     }
//     return (
//         <>
//             <div className="service-card w-[300px] h-[300px] shadow-xl cursor-pointer rounded-md shrink-0 bg-white flex flex-col items-start gap-3 transition-all duration-300 hover:shadow-transparent border-2 z-10">
//                 <img src={cover} alt={title} className='h-[150px] w-[100%] relative' />

//                 <p className="font-bold text-2xl  text-black/80  px-6">
//                     {title}
//                 </p>
//                 <p className="text-gray-400 text-sm  px-6">
//                     {desc}
//                 </p>
//                 <div className='w-full h-auto flex justify-center items-center'>
//                     <div className="w-[80%] flex justify-center h-full items-center gap-2  hover:animate-pulse">
//                         <button className='p-2 w-12 h-12  rounded-full border-2 border-blue-700 text-blue-700 font-bold'>
//                             <Pencil className='h-6 w-6' />
//                         </button>
//                         <button className='p-2 w-12 h-12  rounded-full border-2 border-red-500 text-red-500 font-bold' onClick={handledelete}>
//                             <Trash className='h-6 w-6' />
//                         </button>
//                     </div>
//                     <p style={{ WebkitTextStroke: '1px gray', WebkitTextFillColor: 'transparent' }} className="text-5xl font-bold self-end  px-6">
//                         {parseInt(pid, 10) + 1}
//                     </p>
//                 </div>

//             </div>

//         </>
//     )
// }

// export default ProjectCard
import dogimg from '../assets/img/electrinics image.jpeg';
import vetImg from '../assets/img/vet img.jpeg';
import crackerImg from '../assets/img/craker img.jpeg';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaSquareGithub } from "react-icons/fa6";
// import Pencil from 'lucide-react'

const img = [
  { name: dogimg,proj:"ElectronicsHub",desc:"This project showcases a curated collection of essential electronic items" },
  { name: vetImg,proj:"VetConnect",desc:"This project offers users a seamless way to connect with trusted veterinarians, " },
  { name: crackerImg,proj:"Crackers Shop",desc:"Crackers is a delightful platform that celebrates the world of snacks," },
  { name: crackerImg,proj:"Crackers Shop",desc:"Crackers is a delightful platform that celebrates the world of snacks," },
//   { name: crackerImg,proj:"Crackers Shop",desc:"Crackers is a delightful platform that celebrates the world of snacks," },
  // { name: crackerImg,proj:"Crackers Shop",desc:"Crackers is a delightful platform that celebrates the world of snacks," }
];



const ProjectCard = () => {
  return (
    <div className="h-[30vh] w-full flex flex-wrap gap-5  rounded-md justify-center items-center  text-black">
      <div className="flex flex-wrap justify-center gap-5 text-black ">
        {img.map((item, index) => (
          <div key={index} className="h-[400px] w-[250px] bg-white border-2 z-10 rounded-lg shadow-lg  overflow-hidden flex flex-col    cursor-pointer hover:scale-110">
            <img src={item.name} alt={`Image ${index + 1}`} className='h-[70%] w-full object-cover' />
            <div className="h-[20%] flex items-center justify-center text-center">
              <p className="text-lg font-bold ">{item.proj}</p>
            </div>
            <div className="h-[30%] flex  items-center justify-center text-center">
              <p className="text-lg ">{item.desc}</p>
            </div>
            <div className="h-[10vh] rounded-full text-2xl flex justify-center items-center gap-4 ">
            <FaSquareGithub className='h-full hover:border-3 hover:border-red-500'/>
            <FaRegEdit className=' h-full text-blue-950' />
            <MdDelete  className='h-full text-red-700'/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
