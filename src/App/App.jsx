import styles from './App.module.css'
import Header from '../Pages/Header/Header'
import Main from '../Pages/Main/Main'

function App() {
  

  return (
    <div className={styles.app}>
  
      <Header />
      <Main />
    </div>
  )
}

export default App
