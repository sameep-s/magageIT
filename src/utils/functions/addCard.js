import { v4 as uuid } from 'uuid';

export function addCard(title, board, boards, setBoards) {
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