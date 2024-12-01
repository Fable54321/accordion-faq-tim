import styles from './Main.module.css'
import minus from '../../assets/images/icon-minus.svg'
import plus from '../../assets/images/icon-plus.svg'
import { useState } from 'react'

const Main = () => {

  const [answerHidden, setAnswerHidden] = useState({
    1: true,
    2: true,
    3: true,
    4: true
  })


  return (
    <main className={styles.main}>
      <section className={styles.main__questions}>
        <div className={styles.main__questions__questionAnswer} onClick={() => setAnswerHidden({...answerHidden, 1: !answerHidden[1]})}>
          <div  className={styles.main__questions__tile}>
            <h2>What is Frontend Mentor, and how will it help me?</h2>
            <button><img id={1} src={!answerHidden[1] ? minus : plus} alt={answerHidden[1] ? 'show answer' : 'hide answer'} /></button>
          </div>
          <p className={answerHidden[1] ? styles.main__questions__questionAnswer__hidden : styles.main__questions__questionAnswer__visible} > Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It&apos;s suitable for all levels and ideal for portfolio building.</p>
        </div>
        <div className={styles.main__questions__questionAnswer} onClick={() => setAnswerHidden({...answerHidden, 2: !answerHidden[2]})}>
          <div  className={styles.main__questions__tile}>
            <h2>Is frontend mentor free?</h2>
            <button><img id={2} src={!answerHidden[2] ? minus : plus} alt={answerHidden[2] ? 'show answer' : 'hide answer'} /></button>
          </div>
          <p className={answerHidden[2] ? styles.main__questions__questionAnswer__hidden : styles.main__questions__questionAnswer__visible} > Yes, Frontend Mentor is completely free. No sign up or subscription is required. We don&apos;t even ask for your email address. You can start coding right away and get instant feedback on the quality of your code.</p>
        </div>
        <div className={styles.main__questions__questionAnswer} onClick={() => setAnswerHidden({...answerHidden, 3: !answerHidden[3]})}>
          <div  className={styles.main__questions__tile}>
            <h2>Can I use Frontend Mentor projects in my portfolio?</h2>
            <button><img id={3} src={!answerHidden[3] ? minus : plus} alt={answerHidden[3] ? 'show answer' : 'hide answer'} /></button>
          </div>
          <p className={answerHidden[3] ? styles.main__questions__questionAnswer__hidden : styles.main__questions__questionAnswer__visible} > Yes, you are allowed to use any Frontend Mentor projects in your portfolio. The projects are designed to be completed and used as part of your portfolio.</p>
        </div>
        <div className={styles.main__questions__questionAnswer} data-border-none="data-border-none" onClick={() => setAnswerHidden({...answerHidden, 4: !answerHidden[4]})}>
          <div  className={styles.main__questions__tile}>
            <h2>Can I use my own text editor or IDE?</h2>
            <button><img id={4} src={!answerHidden[4] ? minus : plus} alt={answerHidden[4] ? 'show answer' : 'hide answer'} /></button>
          </div>
          <p className={answerHidden[4] ? styles.main__questions__questionAnswer__hidden : styles.main__questions__questionAnswer__visible} > Yes, you can use any text editor or IDE of your choice. Frontend Mentor is designed to be used with any code editor or IDE. You can even use a code editor in the browser if you prefer.</p>
        </div>
      </section>
    </main>
  );
}

export default Main
