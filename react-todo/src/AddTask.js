import React from 'react';

const AddTask = ({ add }) => {
    let task = React.createRef();

    return (
        <div>
            <input type="text" ref={task} />
            <button onClick={() => {
                add(task.current.value);
            }}>ADD</button>
        </div>
    );
};

export default AddTask;
