import Sidebar from "./components/Sidebar";
import ProjectLayout from "./components/ProjectLayout";
import Mainlayout from "./components/MainLayout";
import { useState } from "react";
import type { IProject } from "./assets/interfaces/IProject";

function App() {
  const [projectList, setProjectList] = useState<IProject[]>([]);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null);
  const [isCreating, setIsCreating] = useState(false);

  const handleAddButtonClick = () => {
    setSelectedProjectIndex(null);
    setIsCreating(true);
  };

  const handleDeleteButtonClick = () => {
    let newList = Array.from(projectList);
    newList = newList.filter((_, index) => index != selectedProjectIndex);
    setProjectList(newList);
    setSelectedProjectIndex(null);
    setIsCreating(false);
  };

  const handleSelectProject = (index: number) => {
    setSelectedProjectIndex(index);
    setIsCreating(false);
  };

  return (
    <div className="flex h-screen w-full">
      <Sidebar
        projectList={projectList}
        onSelectedProject={handleSelectProject}
        onAddButtonClick={handleAddButtonClick}
      />

      <main className="flex w-full items-center justify-center">
        {isCreating ? (
          <ProjectLayout
            projectList={projectList}
            setProjectList={setProjectList}
          />
        ) : selectedProjectIndex !== null ? (
          <Mainlayout
            project={projectList[selectedProjectIndex]}
            onDeleteButtonClick={handleDeleteButtonClick}
          />
        ) : (
          <p className="text-center text-gray-500">
            Select a project or click "+Add projects"
          </p>
        )}
      </main>
    </div>
  );
}

export default App;
