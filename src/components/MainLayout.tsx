import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import type { IProject } from "@/interfaces/IProject";

const list: string[] = [];

interface MainLayoutProps {
  project: IProject;
  onDeleteButtonClick: () => void;
}

function Mainlayout({ project, onDeleteButtonClick }: MainLayoutProps) {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState(list);

  const handleButton = () => {
    if (!task) return;
    const newList = Array.from(taskList);
    newList.push(task);
    setTaskList(newList);
    setTask("");
  };

  const handleDeleteTaskButton = (indexToDelete: number) => {
    const newList = taskList.filter((_, index) => index !== indexToDelete);
    setTaskList(newList);
  };

  return (
    <main className="m-4 md:m-20 w-full flex flex-col items-center">
      <section className="flex flex-col md:flex-row w-full justify-between md:gap-80 items-start md:items-center">
        <h2 className="font-bold text-2xl md:text-3xl">{project.title}</h2>
        <Button
          className="cursor-pointer mt-4 md:mt-0"
          variant="ghost"
          onClick={onDeleteButtonClick}
        >
          delete
        </Button>
      </section>
      <p className="w-full text-left mt-4 font-light text-neutral-600 text-sm md:text-base">
        {new Date(project.date).toLocaleDateString()}
      </p>
      <p className="w-full text-left mt-2 font-light text-sm md:text-base">
        {project.description}
      </p>

      <hr className="w-full h-px bg-gray-950 border-0 mt-4" />

      <section className="flex flex-col w-full mt-8">
        <h3 className="font-bold text-xl md:text-3xl">Task</h3>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-8 w-full">
          <Input
            className="w-full sm:w-2/4 border border-gray-800 focus:ring-0 focus:border-gray-800"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Button
            className="cursor-pointer w-full sm:w-auto"
            variant="ghost"
            onClick={handleButton}
          >
            Add Task
          </Button>
        </div>
        <div className="mt-4 w-full">
          <ul className="flex flex-col gap-4 w-full">
            {taskList.map((taskItem, index) => (
              <li
                key={index}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-2 hover:bg-gray-200 rounded"
              >
                <span className="break-words">{taskItem}</span>
                <Button
                  variant="ghost"
                  className="cursor-pointer mt-2 sm:mt-0"
                  onClick={() => handleDeleteTaskButton(index)}
                >
                  Clear
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Mainlayout;
