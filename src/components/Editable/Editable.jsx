import { useEffect, useRef, useState } from 'react';
import './editable.css';

export function Editable(props) {
    const [isEditable, setIsEditable] = useState(false);
    const refEditable = useRef();
    const { Text } = props;

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
            <div className="container__main__editable">
                {
                    isEditable ?
                        <div className="editable__form__addtask">
                            <form onSubmit={(e) => {
                                e.preventDefault()
                            }}>
                                <input
                                    type="text"
                                    className='editable__inputFiled'
                                    autoFocus
                                    placeholder='Enter Title'
                                />
                                <div className="editable__form__actions">
                                    <button className="editableAddButton">Add</button>
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