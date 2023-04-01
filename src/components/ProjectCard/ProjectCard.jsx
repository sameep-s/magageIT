import './projectCard.css';

export function ProjectCard(props) {
    const { title, desc } = props;
    const urlImg = "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1339&q=80";
    return (
        <>
            <div className="container__main__projectCard">
                <div className="project__cover__image">
                    <img src={urlImg} alt="project_cover_image" />
                </div>
                <div className="project__title">{title}</div>
                <div className="project__desc">{desc}</div>
            </div>
        </>
    );
}