import { Calendar, CheckCircle, CheckSquare, Edit, Edit2, User } from 'react-feather';
import './task.css';


export function Task(props) {
    const { image } = props;
    return (
        <>
            <div className="container__main__task" draggable>
                <div className="container__task__image">
                    {image && <img src={image} alt="task__image" />}
                </div>
                <div className="container__task__Title">
                    <span className="task__title__icon"><CheckCircle size={22} /></span>
                    Task Title
                    <span className="task__options"><Edit2 size={18} /></span>
                </div>
                <div className="task__desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, expedita?
                </div>
                <div className="task__info">
                    <div className="task__assignee"><User size={22} /> Sameep</div>
                    <div className="task__due_date"><Calendar size={22} /> 10/04/2023</div>
                </div>
            </div>
        </>
    );
}