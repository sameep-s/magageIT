import { useEffect, useState } from 'react';
import { AddProject, Navbar, Pagination, ProjectCard } from '../../components';
import './dashboard.css';
import { projects } from '../../data/data-projects';

export function Dashboard() {
    const [dataProjects, setDataProjects] = useState([...projects]);
    const [paginationData, setPaginationData] = useState([]);
    const [addProject, setAddProject] = useState(false);

    useEffect(() => {
        setDataProjects([...projects])
    }, []);



    return (
        <>
            <Navbar />
            <div className="container__main__dashboard">
                <div className="container__dashboard__inner">
                    <div className="title__dashboard">
                        PROJECTS
                        {addProject ?
                            <AddProject setDataProjects={setDataProjects} setAddProject={setAddProject} />
                            :
                            <span onClick={() => setAddProject(true)}>New Project+</span>
                        }
                    </div>

                    <div className="container__cards__project">
                        {paginationData?.map((project) => <ProjectCard
                            key={project._id}
                            title={project.title}
                            desc={project.desc}
                        />
                        )}
                    </div>

                    <div className="contianer__pagination">
                        <Pagination
                            totalPosts={dataProjects.length}
                            data={dataProjects}
                            setData={setPaginationData}
                            postOnPage={2}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
