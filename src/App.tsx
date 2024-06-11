import styles from './App.module.css';
import { Header } from './components/Header';
import { Task } from './components/Tasks';

import './global.css';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>        
      <main>
        <div>
          <Task />
        </div>
      </main>
      </div>
    </div>
  )
}

export default App
