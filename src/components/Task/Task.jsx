import { Calendar, CheckCircle, Edit2, User } from 'react-feather';
import './task.css';
import { TaskPopUp } from '../';
import { useState } from 'react';


export function Task(props) {
    const [popUpOpen, setPopUpOpen] = useState(false);
    const {
        image,
        taskTitle,
        taskDesc,
        assignee,
        dueDate,
        id,
        board,
        handleDragEnd,
        handleDragEnter
    } = props;

    return (
        <>
            <div className="container__main__task"
                draggable
                onDragEnter={() => handleDragEnter(board._id, id)}
                onDragEnd={() => handleDragEnd(board._id, id)}
                onClick={() => setPopUpOpen(true)}
            >
                <div className="container__task__image">
                    {image && <img src={image} alt="task__image" />}
                </div>
                <div className="container__task__Title">
                    <span className="task__title__icon"><CheckCircle size={22} /></span>
                    {taskTitle}
                    <span className="task__options"><Edit2 size={18} /></span>
                </div>
                <div className="task__desc">
                    {taskDesc}
                </div>
                <div className="task__info">
                    <div className="task__assignee"><User size={22} />{assignee}</div>
                    <div className="task__due_date"><Calendar size={22} />{dueDate}</div>
                </div>
            </div>
            {popUpOpen && <TaskPopUp
                setPopUpOpen={setPopUpOpen}
                title={taskTitle}
                desc={taskDesc}
                assignee={assignee}
                date={dueDate}
            />}
        </>
    );
}