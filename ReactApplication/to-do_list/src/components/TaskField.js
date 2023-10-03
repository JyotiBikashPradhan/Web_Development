import React, { useState } from 'react';

const TaskField = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div className="d-grid gap-2">
      <input type="text" value={task} onChange={handleInputChange} placeholder="Text" />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default TaskField;
