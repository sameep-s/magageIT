import { useEffect, useRef, useState } from 'react';
import './editable.css';
import { handleEditableFormSubmit } from '../../utils/functions';

export function Editable(props) {
    const [isEditable, setIsEditable] = useState(false);
    const [title, setTitle] = useState("");
    const refEditable = useRef();
    const { Text, onSubmit } = props;

    useEffect(() => {
        const handler = (e) => {
            if (!refEditable?.current?.contains(e.target)) {
                setIsEditable(false);
            }
        }
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    return (
        <>
            <div className="container__main__editable" ref={refEditable}>
                {
                    isEditable ?
                        <div className="editable__form__addtask">
                            <form onSubmit={(e) => handleEditableFormSubmit(e, title, onSubmit, setTitle, setIsEditable)}>
                                <input
                                    type="text"
                                    className='editable__inputFiled'
                                    autoFocus
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                    placeholder='Enter Title'
                                />
                                <div className="editable__form__actions">
                                    <button
                                        type="submit"
                                        className="editableAddButton">
                                        Add
                                    </button>
                                </div>
                            </form>
                        </div>
                        :
                        <div
                            className="container__editable__action"
                            onClick={() => setIsEditable(true)}
                        >
                            {Text}
                        </div>
                }
            </div >
        </>
    );
}