import { ITask } from '../App';
import styles from './Task.module.css';
import { CheckCircle, Trash } from '@phosphor-icons/react';

interface Properties {
    task: ITask;
    onComplete: (taskId: string) => void;
    onDelete: (taskId: string) => void;
  }

export function Task({ task, onComplete, onDelete }: Properties) {
    return (
        <div className={styles.task}>
            <button 
                className={styles.checkOption} 
                title="Selecione a tarefa"
                onClick={() => onComplete(task.id)}>
                {task.isCompleted ? <CheckCircle weight="fill" /> : <div />}
            </button>

            <p className={ task.isCompleted ? styles.textCompleted : "" }>{task.title}</p>

            <button 
                className={styles.deleteButton} 
                title="Deletar tarefa"
                onClick={() => onDelete(task.id)}
                >
                <Trash size={20} />
            </button>
        </div>
    )
}