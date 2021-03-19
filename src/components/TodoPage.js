import React, { useState } from 'react';
import TodoList from "./TodoList"

const TASK_STATUSES = ["Pending", "In Progress", "Completed"]

const TodoPage = (props) => {
    const [cardForm, showCardForm] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const formToggler = () => {
        showCardForm(!cardForm)
    }

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const resetForm = () => {
        setTitle("");
        setDescription("");
        showCardForm(false);
    }

    const onCreateTask = (e) => {
        e.preventDefault();
        props.onCreateTask({
            title,
            description
        });
        resetForm();
    }

    const renderTaskLists = () => {
        const { tasks } = props;
        return TASK_STATUSES.map((status, id) => {
            const statusTasks = tasks.filter((task) => task.status === status);
            return (
                <div className="col-md-3 card m-2 p-0" key={id}>
                    <TodoList
                        key={status}
                        status={status}
                        tasks={statusTasks}
                        onStatusChange={props.onStatusChange}
                        onRemoveTask={props.onRemoveTask}
                    />
                </div>
            )
        })
    }


    return (
        <div className="container my-5">
            <div className="jumbotron py-5">
                <div className="row">
                    <div className="col-md-2">
                        <button className="btn btn-success m-3" onClick={formToggler}>+</button>
                    </div>
                    <div className="col-md-10">
                        <h2 className="display-4 text-center text-uppercase">
                            To Do List
                        </h2>
                    </div>
                </div>
                {/* Form Input */}
                {cardForm && (
                    <form onSubmit={onCreateTask}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="To Do Title" onChange={onChangeTitle} />
                        </div>
                        <div className="form-group">
                            <textarea type="text" className="form-control" placeholder="To Do Description" onChange={onChangeDescription}></textarea>
                        </div>
                        <button className="btn btn-primary">
                            Submit
                    </button>
                    </form>
                )}
            </div>
            <div className="row d-flex justify-content-center position-relative" style={{ background: "#e9ecef" }}>
                {renderTaskLists()}
            </div>
        </div>
    )
}

export default TodoPage;
