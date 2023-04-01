import { MoreHorizontal } from 'react-feather';
import { Task, Editable } from '../';
import { v4 as uuid } from 'uuid';
import './board.css';
import { deepCopyObj } from '../../utils/functions';


let board_ID = "";
let card_ID = "";

export function Board(props) {
    const {
        setBoards,
        board,
        boards } = props;


    function addCard(title) {
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let dateToday = `${day}/${month}/${year}`;

        const newCard = {
            title: title,
            dueDate: dateToday,
            assignee: "",
            _id: uuid(),
            desc: "Lorem ipsum dolor sit amet."
        }
        let newCardArr = [...board.cards, newCard];
        let newBoard = { ...board, cards: newCardArr }
        let boardsObj = [...boards];
        const idxBoard = boards.indexOf(board);
        boardsObj.splice(idxBoard, 1, newBoard);
        setBoards([...boardsObj]);

    }

    function handleDragEnd(board_id, card_id) {

        let s_boardIndex, s_cardIndex, t_boardIndex, t_cardIndex;
        s_boardIndex = [...boards].findIndex((item) => item._id === board_id);
        if (s_boardIndex < 0) return;

        s_cardIndex = [...boards][s_boardIndex]?.cards?.findIndex((item) => item._id === card_id);
        if (s_cardIndex < 0) return;

        t_boardIndex = [...boards].findIndex((item) => item._id === board_ID);
        if (t_boardIndex < 0) return;

        t_cardIndex = [...boards][t_boardIndex]?.cards?.findIndex(item => item._id === card_ID);
        if (t_cardIndex < 0) return;

        const tempBoards = deepCopyObj(boards);
        const sourceCard = tempBoards[s_boardIndex].cards[s_cardIndex];
        tempBoards[s_boardIndex].cards.splice(s_cardIndex, 1);
        tempBoards[t_boardIndex].cards.splice(t_cardIndex, 0, sourceCard);
        setBoards([...tempBoards]);

        board_ID = "";
        card_ID = "";
    };

    // handleDragEnter
    function handleDragEnter(b_id, c_id) {
        board_ID = b_id;
        card_ID = c_id;
    };

    return (
        <>
            <div className="container__board">
                <div className="board__title">
                    <span>{board.title}</span>
                    <span className='tasksCount'>{board.cards.length}</span>
                    <span className="boardOptions"><MoreHorizontal /></span>
                </div>

                <div className="container__main__boardTasks">
                    {board?.cards?.map(card => <Task key={card._id}
                        image={card.image}
                        taskTitle={card.title}
                        taskDesc={card.desc}
                        assignee={card.assignee}
                        dueDate={card.dueDate}
                        id={card._id}
                        board={board}
                        handleDragEnd={handleDragEnd}
                        handleDragEnter={handleDragEnter}
                    />)}
                    <Editable
                        Text="Add Task+"
                        onSubmit={addCard}
                    />
                </div>
            </div>
        </>
    );
}