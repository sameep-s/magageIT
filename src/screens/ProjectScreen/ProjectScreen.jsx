import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar, Board, Editable } from '../../components';
import { v4 as uuid } from 'uuid';
import './projectScreen.css';

export function ProjectScreen() {
    const [dataProject, setDataProject] = useState({});
    const [boards, setBoards] = useState([]);
    const { projectID } = useParams();

    function addBoard(title) {
        const newBoard = {
            title: title,
            _id: uuid(),
            cards: []
        }
        setBoards(prev => [...prev, newBoard]);
    }



    useEffect(() => {
        let data = localStorage.getItem("dataProjects") || [];
        data = JSON.parse(data);
        const project = data.find((i) => +i._id === +projectID);
        setDataProject({ ...project });
        setBoards([...project.boards])
    }, [])

    return (
        <>
            <Navbar />
            <div className="container__main__projectScreen">
                <div className="projectScreen__title">{dataProject.title}</div>

                <div className="container__main__borads">
                    {boards?.map((board) => <Board
                        key={board._id}
                        board={board}
                        setBoards={setBoards}
                        boards={boards}
                    />)}
                    <div className="container__editable__board">
                        <Editable
                            Text="Add List+"
                            onSubmit={addBoard}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}