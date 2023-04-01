import { Navbar, Board, Editable } from '../../components';
import './projectScreen.css';

export function ProjectScreen() {
    return (
        <>
            <Navbar />
            <div className="container__main__projectScreen">
                <div className="projectScreen__title">Project 1</div>

                <div className="container__main__borads">
                    <Board />
                    <Board />
                    <div className="container__editable__board">
                        <Editable
                            Text="Add List+"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}