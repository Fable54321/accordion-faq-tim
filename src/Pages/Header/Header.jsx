import styles from './Header.module.css'
import starIcon from '../../assets/images/icon-star.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={starIcon} alt='' aria-hidden='true'/>
      <h1>FAQs</h1>
    </header>
  )
}

export default Header
