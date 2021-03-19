import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
    return (
        <div>
            <div className="card-header text-uppercase text-center font-weight-bold">
                {props.status}
            </div>
            {props.tasks.map(task => (
                <Todo
                    key={task.id}
                    task={task}
                    onStatusChange={props.onStatusChange}
                    onRemoveTask={props.onRemoveTask}
                />
            ))}

        </div>
    )
}

export default TodoList
