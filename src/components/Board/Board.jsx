import { MoreHorizontal } from 'react-feather';
import './board.css';
import { Task, Editable } from '../';

const imgTask = `https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1158&q=80`;
const images = [imgTask];

export function Board() {
    return (
        <>
            <div className="container__board">
                <div className="board__title">
                    <span>Board 1</span>
                    <span className='tasksCount'>3</span>
                    <span className="boardOptions"><MoreHorizontal /></span>
                </div>

                <div className="container__main__boardTasks">
                    {/* <Task image={images[0]} /> */}
                    <Task />
                    <Task />
                    <Editable
                        Text="Add Task+"
                    />
                </div>
            </div>
        </>
    );
}