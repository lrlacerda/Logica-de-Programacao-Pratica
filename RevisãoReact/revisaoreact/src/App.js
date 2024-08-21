import React, { useState } from "react";
import TaskList from "./Components/TaskList";
import TaskModal from "./Components/TaskModal";
import "./App.css";

// Função para formatar a data como "Terça-Feira, 24 de Julho"
function formatDate(date) {
  const daysOfWeek = [
    'Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira',
    'Quinta-Feira', 'Sexta-Feira', 'Sábado'
  ];

  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const day = daysOfWeek[date.getDay()];
  const month = months[date.getMonth()];
  const dayNumber = date.getDate();
  
  return {
    dayOfWeek: day,
    dayNumber: dayNumber,
    month: month
  };
}

function App() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
    setIsModalOpen(false);
  };

  const handleEditTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setIsModalOpen(false);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const openModal = (task) => {
    setCurrentTask(task);
    setIsModalOpen(true);
  };

  const today = new Date();
  const { dayOfWeek, dayNumber, month } = formatDate(today);

  return (
    <div className="app">
      <h1>
        {dayOfWeek}, <span className="day-number">{dayNumber}</span> de {month}
      </h1>
     
      <TaskList tasks={tasks} onEdit={openModal} onDelete={handleDeleteTask} />
      <button className="new-task-button" onClick={() => openModal(null)}>
        Nova tarefa
      </button>
      {isModalOpen && (
        <TaskModal
          onClose={() => setIsModalOpen(false)}
          onSave={currentTask ? handleEditTask : handleAddTask}
          currentTask={currentTask}
        />
      )}
    </div>
  );
}

export default App;
