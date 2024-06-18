import Image from 'next/image';
import { BiCodeAlt } from 'react-icons/bi';
import { GrLanguage } from 'react-icons/gr';

import { BsListCheck, BsCheck } from 'react-icons/bs';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, ListWrapper, LList, LListItem, SList, SListItem } from './TechnologiesStyles';

const Technologies = (props) => {
  return (
    <Section hero hss id="skills">
      <div style={{width:"100%"}}>
      <span style={{ marginBottom: "10px", fontSize: "10px", display: "flex", alignItems: "center", marginTop: "50px" }}>
        <span style={{ height: "2px", backgroundColor: "#9a9d3a", width: "50px", display: "flex" }}></span>
        <span className={"ssqq"} >CHECK OUT MY</span>
      </span>
      <SectionTitle hss ><span style={{ color: "#9a9d3a" }}>S</span>kills</SectionTitle>

      </div>

      <ListWrapper>

        <div>
          <h3><BiCodeAlt />Coding</h3>
          <List>
            {
              props.data.coding.icons.map((item, i) => {
                return (
                  <ListItem key={i}>
                    <Image src={item[Object.keys(item)[0]]} width={"100"} height={"100"} alt="html icon" />
                  </ListItem>
                )
              })
            }
          </List>
        </div>


        <div>
          <h3><BsListCheck />Services</h3>
          <SList>
            {
              props.data.services.map((item, i) => {
                return (
                  <SListItem key={i}><BsCheck /><p style={{ width: "100%" }}>{item}</p></SListItem>
                )
              })
            }
          </SList>
        </div>

        <div>
          <h3><GrLanguage />Languages</h3>
          <LList>
          {
              props.data.languages.map((item, i) => {
                return (
                  <LListItem key={i}>{item}</LListItem>
                )
              })
            }

          </LList>
        </div>

      </ListWrapper>

    </Section>
  )
};

export default Technologies;
