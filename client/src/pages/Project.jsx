


import { useEffect, useState } from "react"
import Navbar from "../components/NavBar"
import ProjectCard from "../components/ProjectCard"
import { getproj } from "../services/api"
import AddComponent from "../components/AddProject"
import dogimg from '../assets/img/electrinics image.jpeg';
import vetImg from '../assets/img/vet img.jpeg';
import crackerImg from '../assets/img/craker img.jpeg';

const img = [
  { name: dogimg,proj:"ElectronicsHub",desc:"This project showcases a curated collection of essential electronic items" },
  { name: vetImg,proj:"VetConnect",desc:"This project offers users a seamless way to connect with trusted veterinarians, " },
  { name: crackerImg,proj:"Crackers Shop",desc:"Crackers is a delightful platform that celebrates the world of snacks," },
  // { name: crackerImg,proj:"Crackers Shop",desc:"Crackers is a delightful platform that celebrates the world of snacks," }
];


const Projects = () => {
  const [projectdata, setProjectdata] = useState(null)
  const fetchprojects = async () => {
    try {
      const { data } = await getproj()
      setProjectdata(data)
    } catch (error) {
      console.warn(error);

    }
  }
  console.log(projectdata)
  useEffect(() => {
    fetchprojects()
  }, [])
  if (!projectdata) {
    return "No data available";
  }
  return (
    <>
      <div className="w-full h-45 flex flex-row flex-wrap gap-8 justify-center items-center bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="w-full h-[15vh] flex justify-center items-start mb-0">
          <AddComponent  />
        </div>

        {
         
            <ProjectCard/>
            // <ProjectCard name={data.name} proj={data.proj} desc={data.desc} key={index}  fetchprojects={fetchprojects}/>
         
        }
      </div>
    </>
  )
}

export default Projects