import * as React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import NumberPad from "./NumberPad";
import Button from "./Button";
import { fill, toggleNotes, remove } from "../reducer";
import type { State, Action } from "../reducer";

import "./controls.css";

export type ControlsProps = {
    state: State;
    dispatch: React.Dispatch<Action>;
    showControls?: boolean;
};

const propTypes = {
    /** The Sudoku reducer state */
    state: PropTypes.any.isRequired,

    /** The dispatch function for the Sudoku reducer */
    dispatch: PropTypes.func.isRequired,

    /** Determines whether the controls should be shown */
    showControls: PropTypes.bool,
};

const Controls = ({
    state,
    dispatch,
    showControls,
}: ControlsProps): JSX.Element => {
    return (
        <div
            className={classNames("sudoku__controls_container", {
                sudoku__controls_hidden: !showControls,
            })}
        >
            <div className="sudoku__controls">
                <NumberPad
                    size={state.initial.length}
                    dispatchNumber={(value: number) => dispatch(fill(value))}
                />
                <div className="sudoku__other_btns">
                    <Button
                        className="sudoku__notes_btn"
                        onClick={() => dispatch(toggleNotes())}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                        </svg>
                        <div
                            className={classNames({
                                sudoku__notes_indicator_on: state.notesOn,
                                sudoku__notes_indicator_off: !state.notesOn,
                            })}
                        >
                            {state.notesOn ? "ON" : "OFF"}
                        </div>
                        Notes
                    </Button>
                    <Button
                        className="sudoku__erase_btn"
                        onClick={() => dispatch(remove())}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414l-3.879-3.879zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z" />
                        </svg>
                        Erase
                    </Button>
                </div>
            </div>
        </div>
    );
};

Controls.propTypes = propTypes;

export default Controls;
