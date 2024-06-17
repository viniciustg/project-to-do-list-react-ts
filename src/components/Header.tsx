import styles from './Header.module.css'
import todoLogo from '../assets/logo-todo-list.svg';
import { PlusCircle} from '@phosphor-icons/react';
import { ChangeEvent, FormEvent, useState } from 'react';

interface Properties {
    onAddTask: (taskTitle: string) => void;
  }

export function Header({ onAddTask }: Properties) {    

    const [newTaskText, setNewTaskText] = useState('');

    function handleCreateNewText(event: FormEvent) {
        event.preventDefault()

        onAddTask(newTaskText);
        setNewTaskText('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTaskText(event.target.value);
      }

    return (
        <header className={styles.header}>
            <img src={todoLogo} alt="Logotipo do ToDo List" />
            <form className={styles.newTaskForm} onSubmit={handleCreateNewText}>
                <input 
                    type="text" 
                    placeholder="Adicione uma nova tarefa"
                    value={newTaskText}
                    onChange={handleNewTaskChange} 
                />
                <button>
                    Criar 
                    <PlusCircle size={20} />
                </button>
            </form>
        </header>  
    )
}