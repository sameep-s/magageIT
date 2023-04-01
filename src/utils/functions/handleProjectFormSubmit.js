import { toast } from "react-hot-toast";


export function handleProjectFormSubmit(project, setProject, setAddProject, setDataProjects) {

    let dataLocal = localStorage.getItem("dataProjects");

    dataLocal = JSON.parse(dataLocal);

    if (project.title === "") {
        toast.error("Please add title");
        return;
    }
    setProject({ title: "", desc: "" });
    toast.success("New Project Created");
    setAddProject(false);
    setDataProjects(prev => [project, ...prev]);
    dataLocal = [project, ...dataLocal];
    localStorage.setItem("dataProjects", JSON.stringify(dataLocal));
}