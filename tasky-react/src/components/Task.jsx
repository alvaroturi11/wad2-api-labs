import React from 'react';

const Task = (props) => {
    const priorityColor = () => {
        switch (props.priority) {
            case "High":
                return 'red';
            case "Medium":
                return 'orange';
            case "Low":
                return 'green';
            default:
                return 'grey';
        }
    }

    return (
        <div className="card" style={{ backgroundColor: props.done ? 'lightgrey' : '#5bb4c4' }}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            {props.description && <p className="description" style={{ marginBottom: '4px' }}>{props.description}</p>}
            <span
                className="priority"
                style={{
                    backgroundColor: priorityColor(),
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    fontWeight: 'bold',
                    display: 'inline-block',
                }}
            >
                {props.priority}
            </span>
            <div style={{ marginTop: '8px' }}>
                <button onClick={props.markDone} className='doneButton'>Done</button>
                <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
            </div>
        </div>
    )

}


export default Task;