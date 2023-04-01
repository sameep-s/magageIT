import { Calendar, User } from 'react-feather';
import './taskPopUp.css';

export function TaskPopUp(props) {
    const { setPopUpOpen, title, desc, date, assignee } = props;

    return (
        <>
            <div className="wrapper">
                <div className="container__main__popUp">
                    <div className="popUp__title">{title}</div>
                    <div className="popUp__description">{desc ? `Description: ${desc}` : "No Description"}</div>
                    <div className="popUp__assignee"><User size={20} />: <span>{assignee ? assignee : "Add Assignee"}</span></div>
                    <div className="popUp__dueDate"><Calendar size={20} />: <span>{date ? date : "Not Assigned"}</span></div>

                    <div className="container__popUP__action">
                        <button className="popUp__closed" onClick={() => setPopUpOpen(false)}>Close</button>
                    </div>
                </div>
                <div className="container__popUp__overlay__invisible" onClick={() => setPopUpOpen(false)}>
                </div>
            </div>
        </>
    );
}