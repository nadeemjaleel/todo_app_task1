import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todo:tasks';

interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

function Todo() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }

  function setTasksAndSave(newTasks: Task[]) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  function addTask(taskTitle: string) {
    const newTask: Task = {
      id: uuidv4(),
      title: taskTitle,
      isCompleted: false,
    };

    setTasksAndSave([...tasks, newTask]);
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  function toggleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  return (
    <>
      <Header handleAddTask={addTask} />
      <Tasks tasks={tasks} onDelete={deleteTaskById} onComplete={toggleTaskCompletedById} />
    </>
  );
}

export default Todo;
