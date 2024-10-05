import { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import { getproj } from "../services/api";
import AddComponent from "../components/AddProject";
import { toast } from "sonner";
import { MessageCircleWarning } from "lucide-react";

const Projects = () => {
  const [projectdata, setProjectdata] = useState([]);
  const fetchprojects = async () => {
    try {
      const { data } = await getproj();
      setProjectdata(data);
    } catch (error) {
      console.warn(error);
      toast("Error", {
        className:
          "bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold",
        icon: <MessageCircleWarning />,
      });
    }
  };
  console.log(projectdata);
  useEffect(() => {
    fetchprojects();
  }, []);
  // if (!projectdata||projectdata.length===0) {
  //   return (
  //     <div className="w-full h-[15vh] flex justify-center items-start mb-0">
  //         <AddComponent  />
  //       </div>

  //   )
  // }
  console.log(projectdata.coverimg);
  return (
    <>
      <div className="w-full h-45 flex flex-row flex-wrap gap-8 justify-center items-center bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="w-full h-[15vh] flex justify-center items-start mb-0">
          <AddComponent fetchprojects={fetchprojects} />
        </div>

        {projectdata.map((data, index) => (
          <ProjectCard
            key={index}
            title={data.title}
            desc={data.desc}
            id={data._id}
            coverimg={data.coverimg}
            git={data.git}
            link={data.link}
            fetchProjects={ fetchprojects}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
