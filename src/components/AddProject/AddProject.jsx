import { useEffect, useRef, useState } from 'react';
import './addProject.css';
import { toast } from 'react-hot-toast';
import { handleProjectFormSubmit } from '../../utils/functions';

export function AddProject(props) {
    const { setAddProject, setDataProjects } = props;
    const [project, setProject] = useState({
        title: "",
        desc: "",
        _id: Date.now() + Math.random() * 10,
        boards: []
    });
    const addProjectRef = useRef();



    useEffect(() => {
        let handler = (e) => {
            if (!addProjectRef?.current?.contains(e.target)) {
                setAddProject(false);
            }
        }

        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);

    }, [])

    return (
        <>
            <div className="container__main__addProject" ref={addProjectRef}>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleProjectFormSubmit(project, setProject, setAddProject, setDataProjects)
                }}>
                    <div className="projectTitle">
                        <input
                            type="text"
                            name="" id=""
                            placeholder='Enter Project Title'
                            value={project.title}
                            onChange={(e) => setProject({ ...project, title: e.target.value })}
                        />
                    </div>
                    <div className="projectDesc">
                        <textarea
                            cols={30}
                            placeholder='Enter Project Description'
                            name="project_desc" id="project_desc"
                            value={project.desc}
                            onChange={(e) => setProject({ ...project, desc: e.target.value })}
                        />
                    </div>
                    <div className="container__action">
                        <button>Add</button>
                    </div>
                </form>
            </div>
        </>
    );
}