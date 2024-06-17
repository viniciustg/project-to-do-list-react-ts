import { useState } from 'react';
import styles from './App.module.css';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';

import './global.css';

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function deleteTaskById(taskId: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => task.id !== taskId);
    setTasks(tasksWithoutDeletedOne);
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
    setTasks(newTasks);
  }

  return (
    <div>
      <Header onAddTask={addTask} />
      <div className={styles.wrapper}>        
        <Tasks 
        tasks={tasks}
        onDelete={deleteTaskById} 
        onComplete={toggleTaskCompletedById}/>
      </div>
    </div>
  )
}

export default App
