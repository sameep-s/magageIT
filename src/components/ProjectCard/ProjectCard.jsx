import { Link } from 'react-router-dom';
import './projectCard.css';

export function ProjectCard(props) {
    const { title, desc, project } = props;
    const urlImg = `https://images.unsplash.com/photo-1595878715977-2e8f8df18ea8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80`
    return (
        <>
            <Link to={`/project/${project._id}`} >
                <div className="container__main__projectCard">
                    <div className="project__cover__image">
                        <img src={urlImg} alt="project_cover_image" />
                    </div>
                    <div className="project__title">{title}</div>
                    <div className="project__desc">{desc}</div>
                </div>
            </Link>
        </>
    );
}