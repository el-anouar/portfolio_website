import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
const Timeline = (props) => {
  return (
    <Section about hero hss id="about">
      <div style={{width:"100%"}}>
      <span style={{marginBottom: "10px",fontSize: "10px",display: "flex",alignItems: "center",marginTop:"50px"}}>
        <span style={{height: "2px",backgroundColor:"#9a9d3a",width: "50px",display: "flex"}}></span>
        <span className={"ssqq"} style={{marginLeft: "10px"}}>SOME INFO</span>
      </span>
      <SectionTitle hss><span style={{ color: "#9a9d3a" }}>A</span>bout Me</SectionTitle>

      </div>
      <div style={{width:"100%"}}>
      <SectionText about style={{color:"#9b9b9b"}}>{props.data.text}</SectionText>

      </div>
    </Section>
  );
};
export default Timeline;
