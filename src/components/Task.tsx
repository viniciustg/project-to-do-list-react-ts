import styles from './Task.module.css';
import { Trash } from '@phosphor-icons/react';


export function Task() {
    return (
        <div className={styles.task}>
            <button className={styles.checkOption} title="Selecione a tarefa">
                <div />
            </button>

            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            
            <button className={styles.deleteButton} title="Deletar tarefa">
                <Trash size={20} />
            </button>
        </div>
    )
}