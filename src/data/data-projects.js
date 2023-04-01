import { imagesCard } from "./card-images";
import { v4 as uuid } from 'uuid';

export const projects = [
    {
        title: "Project Open",
        _id: 1,
        desc: "First Project",
        boards: [{
            title: "To Do",
            _id: uuid(),
            cards: [{
                _id: uuid(),
                title: "Write test Cases",
                desc: "Write test cases using cypress",
                dueDate: '10/04/2023',
                assignee: "Sameep",
            },
            {
                _id: uuid(),
                title: "Refactor Code",
                desc: "Remove unused code and variables",
                dueDate: '10/04/2023',
                assignee: "Sameep",
            },
            {
                _id: uuid(),
                title: "Code Review",
                desc: "Review intern's code",
                dueDate: '10/04/2023',
                assignee: "Sameep",
            },]
        },
        {
            title: "In Progress",
            _id: uuid(),
            cards: [{
                _id: uuid(),
                title: "Analytics",
                desc: "Add Analytics for Quantative",
                dueDate: '14/04/2023',
                assignee: "Sameep",
                image: imagesCard[2]
            },
            {
                _id: uuid(),
                title: "Bug Fix: Electron",
                desc: "Fix Electron remote bug",
                dueDate: '12/04/2023',
                assignee: "Sameep",
                image: imagesCard[0]
            },
            {
                _id: uuid(),
                title: "Test Cases",
                desc: "Add test cases using RTL and jest",
                dueDate: '13/04/2023',
                assignee: "Sameep",
            },]
        },
        {
            title: "Completed",
            _id: uuid(),
            cards: [{
                _id: uuid(),
                title: "Trend Line - Qualitative",
                desc: "Fix UI bugs",
                dueDate: '14/04/2023',
                assignee: "Sameep",
                image: imagesCard[1]
            },
            ]
        }]
    },
    {
        title: "Project Sprint",
        _id: 2,
        desc: "project",
        boards: [{
            title: "To Do",
            _id: uuid(),
            cards: [{
                _id: uuid(),
                title: "Write test Cases",
                desc: "Write test cases using cypress",
                dueDate: '10/04/2023',
                assignee: "Sameep",
            },
            {
                _id: uuid(),
                title: "Refactor Code",
                desc: "Remove unused code and variables",
                dueDate: '10/04/2023',
                assignee: "Sameep",
            },
            {
                _id: uuid(),
                title: "Code Review",
                desc: "Review intern's code",
                dueDate: '10/04/2023',
                assignee: "Sameep",
            },]
        },
        {
            title: "In Progress",
            _id: uuid(),
            cards: [{
                _id: uuid(),
                title: "Analytics",
                desc: "Add Analytics for Quantative",
                dueDate: '14/04/2023',
                assignee: "Sameep",
                image: imagesCard[2]
            },
            {
                _id: uuid(),
                title: "Bug Fix: Electron",
                desc: "Fix Electron remote bug",
                dueDate: '12/04/2023',
                assignee: "Sameep",
                image: imagesCard[0]
            },
            {
                _id: uuid(),
                title: "Test Cases",
                desc: "Add test cases using RTL and jest",
                dueDate: '13/04/2023',
                assignee: "Sameep",
            },]
        },
        {
            title: "Completed",
            _id: uuid(),
            cards: [{
                _id: uuid(),
                title: "Trend Line - Qualitative",
                desc: "Fix UI bugs",
                dueDate: '14/04/2023',
                assignee: "Sameep",
                image: imagesCard[1]
            },
            ]
        }]
    },
    {
        title: "Project Backend",
        _id: 3,
        desc: "project",
        boards: [{
            title: "To Do",
            _id: uuid(),
            cards: [{
                _id: uuid(),
                title: "Write test Cases",
                desc: "Write test cases using cypress",
                dueDate: '10/04/2023',
                assignee: "Sameep",
            },
            {
                _id: uuid(),
                title: "Refactor Code",
                desc: "Remove unused code and variables",
                dueDate: '10/04/2023',
                assignee: "Sameep",
            },
            {
                _id: uuid(),
                title: "Code Review",
                desc: "Review intern's code",
                dueDate: '10/04/2023',
                assignee: "Sameep",
            },]
        },
        {
            title: "In Progress",
            _id: uuid(),
            cards: [{
                _id: uuid(),
                title: "Analytics",
                desc: "Add Analytics for Quantative",
                dueDate: '14/04/2023',
                assignee: "Sameep",
                image: imagesCard[2]
            },
            {
                _id: uuid(),
                title: "Bug Fix: Electron",
                desc: "Fix Electron remote bug",
                dueDate: '12/04/2023',
                assignee: "Sameep",
                image: imagesCard[0]
            },
            {
                _id: uuid(),
                title: "Test Cases",
                desc: "Add test cases using RTL and jest",
                dueDate: '13/04/2023',
                assignee: "Sameep",
            },]
        },
        {
            title: "Completed",
            _id: uuid(),
            cards: [{
                _id: uuid(),
                title: "Trend Line - Qualitative",
                desc: "Fix UI bugs",
                dueDate: '14/04/2023',
                assignee: "Sameep",
                image: imagesCard[1]
            },
            ]
        }]
    },
    {
        title: "Project Frontend",
        _id: 4,
        desc: "project",
        boards: [{
            title: "To Do",
            _id: uuid(),
            cards: [{
                _id: uuid(),
                title: "Write test Cases",
                desc: "Write test cases using cypress",
                dueDate: '10/04/2023',
                assignee: "Sameep",
            },
            {
                _id: uuid(),
                title: "Refactor Code",
                desc: "Remove unused code and variables",
                dueDate: '10/04/2023',
                assignee: "Sameep",
            },
            {
                _id: uuid(),
                title: "Code Review",
                desc: "Review intern's code",
                dueDate: '10/04/2023',
                assignee: "Sameep",
            },]
        },
        {
            title: "In Progress",
            _id: uuid(),
            cards: [{
                _id: uuid(),
                title: "Analytics",
                desc: "Add Analytics for Quantative",
                dueDate: '14/04/2023',
                assignee: "Sameep",
                image: imagesCard[2]
            },
            {
                _id: uuid(),
                title: "Bug Fix: Electron",
                desc: "Fix Electron remote bug",
                dueDate: '12/04/2023',
                assignee: "Sameep",
                image: imagesCard[0]
            },
            {
                _id: uuid(),
                title: "Test Cases",
                desc: "Add test cases using RTL and jest",
                dueDate: '13/04/2023',
                assignee: "Sameep",
            },]
        },
        {
            title: "Completed",
            _id: uuid(),
            cards: [{
                _id: uuid(),
                title: "Trend Line - Qualitative",
                desc: "Fix UI bugs",
                dueDate: '14/04/2023',
                assignee: "Sameep",
                image: imagesCard[1]
            },
            ]
        }]
    },
    {
        title: "Project Devops",
        _id: 5,
        desc: "project",
        boards: [{
            title: "To Do",
            _id: uuid(),
            cards: [{
                _id: uuid(),
                title: "Write test Cases",
                desc: "Write test cases using cypress",
                dueDate: '10/04/2023',
                assignee: "Sameep",
            },
            {
                _id: uuid(),
                title: "Refactor Code",
                desc: "Remove unused code and variables",
                dueDate: '10/04/2023',
                assignee: "Sameep",
            },
            {
                _id: uuid(),
                title: "Code Review",
                desc: "Review intern's code",
                dueDate: '10/04/2023',
                assignee: "Sameep",
            },]
        },
        {
            title: "In Progress",
            _id: uuid(),
            cards: [{
                _id: uuid(),
                title: "Analytics",
                desc: "Add Analytics for Quantative",
                dueDate: '14/04/2023',
                assignee: "Sameep",
                image: imagesCard[2]
            },
            {
                _id: uuid(),
                title: "Bug Fix: Electron",
                desc: "Fix Electron remote bug",
                dueDate: '12/04/2023',
                assignee: "Sameep",
                image: imagesCard[0]
            },
            {
                _id: uuid(),
                title: "Test Cases",
                desc: "Add test cases using RTL and jest",
                dueDate: '13/04/2023',
                assignee: "Sameep",
            },]
        },
        {
            title: "Completed",
            _id: uuid(),
            cards: [{
                _id: uuid(),
                title: "Trend Line - Qualitative",
                desc: "Fix UI bugs",
                dueDate: '14/04/2023',
                assignee: "Sameep",
                image: imagesCard[1]
            },
            ]
        }]
    },
]