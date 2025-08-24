import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import type { IProject } from "@/assets/interfaces/IProject";

interface ProjectLayoutProps {
  projectList: IProject[];
  setProjectList: React.Dispatch<React.SetStateAction<IProject[]>>;
}

function ProjectLayout({ projectList, setProjectList }: ProjectLayoutProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const saveProject = (project: IProject) => {
    const newList = Array.from(projectList);
    newList.push(project);
    setProjectList(newList);
  };

  const clearData = () => {
    setTitle("");
    setDescription("");
    setDate("");
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTiitle = event.target.value;
    setTitle(newTiitle);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newDescription = event.target.value;
    setDescription(newDescription);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLDataElement>) => {
    const newDate = event.target.value;
    setDate(newDate);
  };

  const handleSaveButton = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title || !description || !date) {
      alert("Os campos não podem estar vazios!!");
      return;
    }

    const newProject: IProject = {
      title,
      description,
      date: new Date(date),
    };
    saveProject(newProject);
    clearData();
  };

  const handleCancelButton = () => {
    clearData();
  };

  return (
    <section className="w-full max-w-xxl h-2/4  flex flex-col">
      <header className="w-3/4 flex justify-end gap-4 self-center mt-8">
        <Button
          className="cursor-pointer"
          variant="ghost"
          type="button"
          onClick={handleCancelButton}
        >
          Cancel
        </Button>
        <Button
          className="cursor-pointer"
          variant="default"
          type="submit"
          form="project-form"
        >
          Save
        </Button>
      </header>

      <div className="flex flex-1 justify-center items-center">
        <form
          id="project-form"
          onSubmit={handleSaveButton}
          className="w-3/4 flex flex-col gap-4"
        >
          <label htmlFor="title" className="font-medium">
            Title
          </label>
          <Input
            id="title"
            name="title"
            placeholder="Enter project title"
            className="p-6"
            value={title}
            onChange={handleTitleChange}
          />

          <label htmlFor="description" className="font-medium">
            Description
          </label>
          <Textarea
            id="description"
            name="description"
            placeholder="Enter description"
            className="p-8"
            value={description}
            onChange={handleDescriptionChange}
          />

          <label htmlFor="date" className="font-medium">
            Date
          </label>
          <Input
            id="date"
            name="date"
            type="date"
            value={date}
            onChange={handleDateChange}
          />
        </form>
      </div>
    </section>
  );
}

export default ProjectLayout;
