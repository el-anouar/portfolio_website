
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, Form, HoverImageEffect } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

import { use, useEffect, useState } from 'react';
import Link from 'next/link';

const Projects = (props) => {

  const itemList = props.tags.map((item, i) => {
    return Object.keys(item)[0]
  })
  //const [filter,setFilter]=useState(null)
  const [dropDownn, setDropDown] = useState('closed')
  //const [dropDownArray,setDropDownArray]=useState([])
  const [filteredList, setFilteredList] = useState(itemList);
  const [filterBarValue, setFilterBarValue] = useState("")
  const [filter, setFilter] = useState(null)
  const [projects, setProjects] = useState(null)
  const [show, setShow] = useState(true)
  const [filteredProjects, setFilteredProjects] = useState([])
  useEffect(() => {
    setProjects(props.data)
  }, [])
  useEffect(() => {

    let array = document.getElementsByClassName("BlogCard")

    let collection = document.getElementsByClassName("BlogCard");
    for (let item of collection) {
      if (show === true) {
        item.style.display = "flex"
        setFilteredProjects([])
      } else {
        item.style.display = "none"
        setFilteredProjects(projects?.filter((item, i) => item.tags.indexOf(filter) > -1))
      }
    }
    
    
  }, [show,filter])

  //setProjects(props.data)
  const filterBySearch = (event) => {
    setDropDown('open')
    // Access input value
    if (event.target.value === "") {

      setShow(true)
    }
    const query = event.target.value;
    setFilterBarValue(query)
    // Create copy of item list
    var updatedList = [...itemList];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    setFilteredList(updatedList);
  };
  const inputbarClick = (e) => {
    if (dropDownn === 'open') {
      setDropDown('closed')
    } else {
      setDropDown('open')
    }


  }
  const filterItemClicked = (e) => {
    e.preventDefault
    setFilterBarValue(e.target.innerText)
    setFilter(e.target.innerText)
    setDropDown('closed')
    setShow(false)
  }
  const func = (tags) => {
    var array = new Array()
    for (var i = 0; i < tags.length; i++) {
      if (i >= 5) {
        array.push(<Tag style={{marginRight:"15px"}} key={i}>{"..."}</Tag>);
        return array
      }
      array.push(<Tag style={{marginRight:"15px"}} key={i}>{tags[i]}</Tag>);
    }

    return array
  }
  return (
    <Section hero hss id="projects" >

      <div style={{width:"100%"}}>
      <span style={{ marginBottom: "10px", fontSize: "10px", display: "flex", alignItems: "center", marginTop: "50px" }}>
        <span style={{ height: "2px", backgroundColor: "#9a9d3a", width: "50px", display: "flex" }}></span>
        <span className={"ssqq"} style={{ marginLeft: "10px" }}>TAKE A LOOK AT MY</span>
      </span>

      <SectionTitle hss main><span style={{ color: "#9a9d3a" }}>P</span>rojects</SectionTitle>
      </div>
      <Form onSubmit={(e) => { e.preventDefault(); setDropDown('closed') }}>
        <input onClick={inputbarClick} onChange={filterBySearch} value={filterBarValue} className={"chosen-value"} type={"text"} placeholder={"Type to filter"} />
        <ul className={`value-list ${dropDownn}`}>
          {filteredList.map((item, i) => (<li key={i} onClick={filterItemClicked}>{item}</li>))}
        </ul>
      </Form>
      <div style={{width:"100%"}}>
      <GridContainer className='projectsGridContainer'>
        {filteredProjects&&filteredProjects?.map((p, i) => {

          return (
            
            <BlogCard key={i} id={p._id}>
              
              <Link style={{ cursor: 'pointer' ,height:"420px"}} href={`/project/${p._id}`} >
              
                <HoverImageEffect>
                  <div className='DiV'>

                  </div>
                  <TitleContent className='titleH'>
                    <div className="cont" >
                      <HeaderThree style={{textAlign:"start",padding:"0"}} className='title'>{p.title.length>50?p.title.substring(0, Math.min(p.title.length, 50)) +"...":p.title.substring(0, Math.min(p.title.length, 50)) +""}</HeaderThree>
                      <p style={{textAlign:"start",marginTop:"15px"}}>{p.desc.length>100?p.desc.substring(0, Math.min(p.desc.length, 100))+"...":p.desc.substring(0, Math.min(p.desc.length, 100))+""}</p>
                      <TagList style={{width:"100%",padding:"0",justifyContent:"start",marginTop:"15px"}}>
                        {func(p.tags)}
                      </TagList>
                    </div>
                  </TitleContent>



                </HoverImageEffect>
                <Img src={p.image} />
              </Link>

              

            </BlogCard>
          );
        })
        }




        {props.data?.map((p, i) => {

          return (
            <BlogCard className="BlogCard" key={i} id={p._id}>
              
              <Link style={{ cursor: 'pointer' ,height:"420px"}} href={`/project/${p._id}`} >
                
                <HoverImageEffect>
                  <div className='DiV'>

                  </div>
                  <TitleContent className='titleH'>
                    <div className="cont">
                      <HeaderThree style={{textAlign:"start",padding:"0"}} className='title'>{p.title.length>50?p.title.substring(0, Math.min(p.title.length, 50)) +"...":p.title.substring(0, Math.min(p.title.length, 50)) +""}</HeaderThree>
                      <p style={{textAlign:"start",marginTop:"15px"}} >{p.desc.length>100?p.desc.substring(0, Math.min(p.desc.length, 100))+"...":p.desc.substring(0, Math.min(p.desc.length, 100))+""}</p>
                      <TagList style={{width:"100%",padding:"0",justifyContent:"start",marginTop:"15px"}}>
                        {func(p.tags)}
                      </TagList>
                    </div>
                  </TitleContent>



                </HoverImageEffect>
                <Img src={p.image} />
              </Link>

              

            </BlogCard>
          );
        })}
      </GridContainer>
      </div>


    </Section>
  );
}

export default Projects;

/*{<CardInfo className="card-info">{p.description}</CardInfo>}
{<div>
  <TitleContent>Stack</TitleContent>
  <TagList>
    {p.tags.map((t, i) => {
      return <Tag key={i}>{t}</Tag>;
    })}
  </TagList>
</div>}
{<UtilityList>
  <ExternalLinks href={p.visit}>Code</ExternalLinks>
  <ExternalLinks href={p.source}>Source</ExternalLinks>
</UtilityList>}*/
