import styles from './Tasks.module.css';
import { Task } from './Task'

export function Tasks() {
    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas Criadas</p>
                    <span>5</span>
                </div>
                <div>
                    <p className={styles.colorPurple}>Concluídas</p>
                    <span>2 de 5</span>
                </div>
            </header>
            <div className={styles.list}>
                <Task />
                <Task />
            </div>
        </section>        
    );
}