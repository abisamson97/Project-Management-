import React, { useState } from 'react';

// default date for form fields
const defaultDate = new Date(); 

const TaskForm = ({ onSubmit }) => {
  // Manage form fields
  const [formData, setFormData] = useState({
    title: '',
    dateAssigned: defaultDate,
    deadline: defaultDate,
    description: '',
    stage: 'In Progress',

  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handles form submission

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);

    // Reset form fields after submission 
    setFormData({
        title: '',
        dateAssigned: defaultDate,
        deadline: defaultDate,
        description: '',
        stage: 'In Progress',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        required
      />

     <label>Date Assigned:</label>
      <input
        type="date"
        name="dateAssigned"
        value={formData.dateAssigned}
        onChange={handleInputChange}
        required
      />

      <label>Deadline:</label>
      <input
        type="date"
        name="deadline"
        value={formData.deadline}
        onChange={handleInputChange}
        required
      />

      <label>Description:</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        required
      ></textarea>
    
        <label>Stage:</label>
        <select
            name="stage"
            value={formData.stage}
            onChange={handleInputChange}
        >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
        </select>

      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;