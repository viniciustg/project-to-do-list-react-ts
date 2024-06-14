import styles from './Tasks.module.css';

export function Task() {
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
        </section>        
    );
}