import styles from './Tasks.module.css';
import { Task } from './Task'
import { ClipboardText} from '@phosphor-icons/react';
import { ITask } from '../App';

interface Properties {
    tasks: ITask[];
    onComplete: (taskId: string) => void;
    onDelete: (taskId: string) => void;
  }

export function Tasks({tasks, onComplete, onDelete} : Properties) {
    const tasksQuantity = tasks.length;
    const completedTasks = tasks.filter(x => x.isCompleted).length;
    
    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas Criadas</p>
                    <span>{tasksQuantity}</span>
                </div>
                <div>
                    <p className={styles.colorPurple}>Concluídas</p>
                    <span>{completedTasks} de {tasksQuantity}</span>
                </div>
            </header>
            <div className={styles.list}>
                {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onComplete={onComplete}
                />
                ))}

                {tasks.length <= 0 && (
                <section className={styles.empty}>
                    <ClipboardText size={50} />
                    <div>
                        <p>Você ainda não tem tarefas cadastradas</p>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </div>
                </section>
                )}
            </div>
        </section>        
    );
}