import Image from 'next/image';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import styles from "../../styles/Ghhh.module.css"
const Footer = () => {
  return (
    <>
      <FooterWrapper>
      <div className={styles.FooterElementsConstainer}>
        <Image src="/images/Logo.svg" className="logo" width={"72"} height={"72"} alt="Logo"></Image>
        <Slogan>© ANOUAR ELATROUSSI 2023</Slogan>
        <ul><li>Home</li><li>Skills</li><li>Projects</li><li>About Me</li></ul>
      </div>


      </FooterWrapper>
    </>

  );
};

export default Footer;
