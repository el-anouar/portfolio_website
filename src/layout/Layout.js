
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'
import styles from "../styles/Ghhh.module.css"
export const Layout = (props) => {
  return (
    
    
    <Container>
    <Header about={props?.about?"a":"b"}/>
     <main className={styles.main}>{props.children}</main> 
     <Footer/>
    </Container>
    

  )
}
