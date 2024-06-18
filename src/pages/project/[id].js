import mongoose, { isObjectIdOrHexString, isValidObjectId } from "mongoose"
import { useRouter } from "next/router"
import Schema from "../../models/Schema"
import dbConnect from "../../utils/mongo"
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Layout } from "../../layout/Layout";
import styled from "styled-components";
import Image from "next/image";
import { Tags } from "../../components/Admin/AdminStyles";
import styles from "../../styles/Ghhh.module.css"
export const ProjectTitle = styled.h1`
  display: inline-block;
  width: 100%;
  font-weight: 800;
  font-size: 40px;
  line-height: '40px';
  color: #e7e7e7;
  padding: '16px 0 16px';
  letter-spacing: 2px;
  font-weight: 500; 
  margin-top: 50px;
  margin-bottom: 50px;
  //margin-left: 25px;
  /*breakpoints: {
    vsm: 'screen and (max-width: 410px)',
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    
    
    sp: 'screen and (max-width: 1478px)',
    
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
  },*/

  @media ${'screen and (max-width: 768px)'}{

  }

  @media ${'screen and (max-width: 640px)'}{

  }
`
export const ProjectSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 100px 5% 100px 5%;
  box-sizing: content-box;
  position: relative;


  @media ${'screen and (max-width: 768px)'} {
    padding:0;
    margin:100px 5% 0 5%;

    flex-direction: column;
    
  }

  @media ${'screen and (max-width: 640px)'} {
    padding:0;
    margin:100px 5% 100px 5%;
    flex-direction: column;
  }
`
export const ProjectWrapper = styled.div`
    .img{
        width: 100%;
        height: 500px;
        object-fit: cover;
        
    }
    .desc{
        //margin-top: 25px;
        color: #c2c2c2;
        font-size: 15px;
        letter-spacing: 1px;
        font-weight: 100;
        line-height: 25px;
        margin-bottom: 50px;

    }
    .tags{
        margin-top: 100px;
        span{
            margin: 0 10px 0 0;
        }
        
    }
    @media ${'screen and (max-width: 768px)'}{
        .img{
            height: 300px;
        }
    }

    @media ${'screen and (max-width: 640px)'}{
        .img{
            height: 300px;
        }
    }
`
export const ContentHolder = styled.div`
h1,h2,h3,h4,h5,h6{
    letter-spacing: 2px;
    font-weight: 500;
    margin-top: 50px;
    font-size: 30px;
}
p{
    margin-top: 50px;
    font-size: 20px;
    color: white;
    letter-spacing: 1px;
    font-weight: 100;
    line-height: 40px;

}
.imgC{
        width: 100%;
        height: 500px;
        object-fit: cover;
        margin-top: 50px;
        
    }
    @media ${'screen and (max-width: 768px)'}{
        .imgC{
            height: 300px;
        }
    }

    @media ${'screen and (max-width: 640px)'}{
        .imgC{
            height: 300px;
        }
    }
`
export const ProjectTitleDescHolder = styled.div`
/*border-left: 2px solid white;
margin-top: 50px;
margin-bottom: 50px;*/
`
const project = ({ project }) => {
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 100}`
    }
    return (
        <Layout about="a">
            <ProjectSection>
                {project !== null &&
                    (
                        <ProjectWrapper>
                            <Image loader={myLoader} width={"100"} height={"100"} src={project.image} alt={"Project Image"} className={"img"}></Image>
                            <ProjectTitleDescHolder>
                                <ProjectTitle>{project?.title}</ProjectTitle>
                                <p className="desc">{project.desc}</p>
                            </ProjectTitleDescHolder>

                            <div style={{ marginTop: "50px", marginBottom: "50px", width: "100px", height: "10px", backgroundColor: "#a34e4e" }}></div>

                            <ContentHolder>
                                {project?.editordata?.blocks?.length > 0 && project.editordata.blocks.map((item, i) => {
                                    switch (item.type) {
                                        case "header":
                                            if (item.data.text.length > 0) {
                                                if (item.data.level === 1) {
                                                    return (<h1 key={`${i}${item.id}`}>{item.data.text}</h1>)
                                                }
                                                if (item.data.level === 2) {
                                                    return (<h2 key={`${i}${item.id}`}>{item.data.text}</h2>)
                                                }
                                                if (item.data.level === 3) {
                                                    return (<h3 key={`${i}${item.id}`}>{item.data.text}</h3>)
                                                }
                                                if (item.data.level === 4) {
                                                    return (<h4 key={`${i}${item.id}`}>{item.data.text}</h4>)
                                                }
                                                if (item.data.level === 5) {
                                                    return (<h5 key={`${i}${item.id}`}>{item.data.text}</h5>)
                                                }
                                                if (item.data.level === 6) {
                                                    return (<h6 key={`${i}${item.id}`}>{item.data.text}</h6>)
                                                }
                                            }
                                            break
                                        case "paragraph":
                                            if (item?.data?.text?.length > 0) {
                                                return (<p key={`${i}${item.id}`}>{item.data.text}</p>)
                                            }
                                            break
                                        case "list":
                                            if (item.data.style === "unordered") {
                                                if (item?.data?.items?.length > 0) {
                                                    return (<ul key={`${i}${item.id}u`} >{item.data.items.map((item1, i) => (<li className={styles.listItem} key={`${i}${item.id}l`} id={item.id}>{item1}</li>))}</ul>)

                                                }
                                            }
                                            if (item.data.style === "ordered") {
                                                if (item?.data?.items?.length > 0) {
                                                    return (<ol key={`${i}${item.id}o`} >{item.data.items.map((item1, i) => (<li className={styles.listItem} key={`${i}${item.id}l`} id={item.id}>{item1}</li>))}</ol>)

                                                }
                                            }
                                            break
                                        case "raw":
                                            if (item?.data?.html.length > 0) {
                                                return (<div key={`${i}${item.id}`}>{item.data.html}</div>)
                                            }
                                            break
                                        case "image":
                                            if (item?.data?.url.length > 0) {
                                                return (<Image className={"imgC"} loader={myLoader} width={"100"} height={"100"} key={`${i}${item.id}`} src={item.data.url} alt={item.data.caption} />)
                                            }
                                            break
                                        case "checklist":
                                            if (item?.data?.items?.length > 0) {
                                                return (<div key={`${i}${item.id}`}>{
                                                    item.data.items.map((item1, b) => (
                                                        <div className={styles.checkBox} key={`${b}${item.id}d`}>
                                                            <span className={item1.checked === true ? styles.checked : styles.unchecked} key={`${b}${item.id}s1`} ></span>
                                                            <span key={`${b}${item.id}s2`} >{item1.text}</span>
                                                        </div>
                                                    ))
                                                }</div>)


                                            }
                                            break
                                    }
                                })}
                            </ContentHolder>
                            <Tags className="tags">
                                {project.tags.map((item, i) => {
                                    return (
                                        <span key={i}>
                                            {item}
                                        </span>
                                    );
                                })}
                            </Tags>
                        </ProjectWrapper>

                    )
                }
            </ProjectSection>
        </Layout >


    )
}


export async function getStaticProps({ params }) {
    await dbConnect()
    if (mongoose.Types.ObjectId.isValid(params.id)) {
        const project = await Schema.findOne({ 'projects._id': params.id });
        const exists = project !== null;
        if (exists === false) {
            return { notFound: true };
        } else {
            const project = await Schema.findOne({ 'projects': { $elemMatch: { _id: params.id } } }, { 'projects.$': 1 });
            return {
                props: {
                    project: JSON.parse(JSON.stringify(project.projects[0])),
                },
            }
        }
    } else {
        return { notFound: true };
    }

}
export async function getStaticPaths() {
    await dbConnect()
    const ids = await Schema.find({}, { 'projects._id': 1 });
    if (ids[0].projects.length > 0) {
        const lisyId = ids[0].projects.map(item => ({ params: { id: item._id.toString() } }))
        return { paths: lisyId, fallback: 'blocking' }
    }
    return { paths: [], fallback: 'blocking' }

}

export default project