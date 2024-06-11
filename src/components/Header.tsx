import styles from './Header.module.css'
import todoLogo from '../assets/logo-todo-list.svg';
import { PlusCircle} from '@phosphor-icons/react';


export function Header() {
    return (
        <header className={styles.header}>
            <img src={todoLogo} alt="Logotipo do ToDo List" />
            <form className={styles.newTaskForm}>
                <input 
                    type="text" 
                    placeholder="Adicione uma nova tarefa"                     
                />
                <button>
                    Criar 
                    <PlusCircle size={20} />
                </button>
            </form>
        </header>  
    )
}