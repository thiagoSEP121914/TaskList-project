import { type IProject } from "@/interfaces/IProject";

interface SidebarProps {
  projectList: IProject[];
  onSelectedProject: (index: number) => void;
  onAddButtonClick: () => void;
}

function Sidebar({
  projectList,
  onSelectedProject,
  onAddButtonClick,
}: SidebarProps) {
  return (
    <section
      className="
        w-1/4 xl:w-1/6 2xl:w-1/8 
        h-screen            
        bg-gray-950 shadow-2xl
        rounded-r-2xl
        p-5                  
      "
    >
      <div className="flex flex-col justify-center items-center  gap-8 mt-4 text-white  ">
        <h2 className="font-bold text-2xl">Your projects</h2>
        <button
          className="bg-gray-700 rounded-md p-2 hover:bg-gray-600 cursor-pointer"
          onClick={onAddButtonClick}
        >
          +Add projects
        </button>
      </div>
      <div className="mt-6 text-white">
        <ul>
          {projectList.map((project, index) => (
            <li
              className="p-4 rounded-md hover:bg-gray-600 cursor-pointer"
              key={index}
              onClick={() => onSelectedProject(index)}
            >
              {project.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Sidebar;
