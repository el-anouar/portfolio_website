import axios from "axios";
//import { createHash } from "crypto";
import Image from "next/image";
import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";
import { BiCodeAlt } from "react-icons/bi";
import { BsCheck, BsListCheck } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";

import { MdOutlineDeleteForever } from "react-icons/md";
import { Section, Div, Input, PLabel, TextArea, AdminContainer, SLabel, AdminList, AdminListItem, AdminListWrapper, SAdminList, SAdminListItem, SAdd, DivInputAbs, Tags, Button } from "./AdminStyles"
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, HoverImageEffect, Img, Tag, TagList, TitleContent, UtilityList } from "../Projects/ProjectsStyles";
import { LList, LListItem } from "../Technologies/TechnologiesStyles";

import { SectionTitle } from "../../styles/GlobalComponents";


const Admin = (props) => {
    
    const [profilePicFileUrl, setProfilePicFileUrl] = useState({})
    const [heroTitle, setHeroTitle] = useState("")
    const [heroDesc, setHeroDesc] = useState("")
    const [heroButtTitle, setHeroButtTitle] = useState("")
    const [heroButtLink, setHeroButtLink] = useState("")
    const [aboutMe, setAboutMe] = useState("")
    const [inputE, setInputE] = useState('closed')
    const [divInputAbs, setDivInputAbs] = useState("")
    const [codingDivInputAbs, setCodingDivInputAbs] = useState('closed')
    const [codingListFileTag, setCodingListFileTag] = useState([])
    const [divInputAbsTag, setDivInputAbsTag] = useState("")
    const [codingIconFile, setCodingIconFile] = useState({})
    
    const [addOnClickType, setAddOnClickType] = useState("")
    const [languagesInput, setLanguagesInput] = useState("")
    const [servicesInput, setServicesInput] = useState("")
    const [languagesList, setLanguagesList] = useState([])
    const [servicesList, setServicesList] = useState([])
    const [projects,setProjects]=useState(null)
    const onChangeSetFile = (e) => {
        const file = e.target.files[0];
        setProfilePicFileUrl({url:URL.createObjectURL(file),name:file.name});



    };
    const serviceAddOnClick = (e) => {
        setDivInputAbs(e.target.innerHTML)

        if (inputE === 'closed') {
            setInputE("open")
        }
        if (inputE === 'open') {
            setInputE("closed")
        }

        setAddOnClickType("s")


    }
    const languageAddOnClick = (e) => {
        setDivInputAbs(e.target.innerHTML)

        if (inputE === 'closed') {
            setInputE("open")
        }
        if (inputE === 'open') {
            setInputE("closed")
        }

        setAddOnClickType("l")
    }
    const router = useRouter()
    const ProjectAddOnClick = () => {

        router.push("/addProject").then(() => window.location.reload())

    }
    const CodingAddOnClick = () => {
        if (codingDivInputAbs === 'closed') {
            setCodingDivInputAbs("open")
        }
        if (codingDivInputAbs === 'open') {
            setCodingDivInputAbs("closed")
        }
    }
    const addCodingIconTagToList = (e) => {
        if (codingIconFile !== null && divInputAbsTag !== null && divInputAbsTag !== "") {
           
            setCodingListFileTag([...codingListFileTag, { tag: divInputAbsTag, file: codingIconFile }]);
            
            setCodingDivInputAbs("closed")
        } else {
        }

    }
    const addCodingIconFile = (e) => {
        const iconFile = URL.createObjectURL(e.target.files[0])

        setCodingIconFile({ url: iconFile, name: e.target.files[0].name });
    }

    const deleteCodingItem = async (tag) => {
        setCodingListFileTag((obj) =>
            obj.filter((item) => item.tag !== tag)
        );

    }
    const deleteServiceItem = (item1) => {
        setServicesList((obj) =>
            obj.filter((item) => item !== item1)
        );
    }

    const deleteLanguagesItem = (item1) => {
        setLanguagesList((obj) =>
            obj.filter((item) => item !== item1)
        );
    }
    const skillsCodingSave = async () => {
        codingListFileTag.map(async (item, i) => {
            try {
                await uploadImage(item, i)
            } catch (err) {
                return
            }

        })
    }
    function readChunkAsArrayBuffer(image) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsArrayBuffer(image)
            reader.addEventListener('load', () => resolve(reader.result));
            reader.addEventListener('error', () => reject('Reading file failed'))
            reader.addEventListener('abort', () => reject('Reading file aborted'))
        })
    }
    const uploadImage = async (obj, i) => {


        async function imageUrlToFile(imageUrl, name) {
            return fetch(imageUrl)
                .then(response => response.blob())
                .then(blob => {
                    const file = new File([blob], name, { type: blob.type });

                    return file;
                })
        }


        const imageBuff = await readChunkAsArrayBuffer(await imageUrlToFile(obj.file.url, obj.file.name));
        const uploadUrl = `http://localhost:3000/api/upload?type=${"coding"}&tag=${obj.tag}&name=${obj.file.name}&index=${i}&length=${codingListFileTag.length}`;
        await fetch(uploadUrl, {
            method: 'POST',
            body: imageBuff,
            headers: {
                'Content-Type': 'application/octet-stream',
            },
        });

    }
    const PostProfilePicFile = async () => {
        async function imageUrlToFile(imageUrl, name) {
            return fetch(imageUrl)
                .then(response => response.blob())
                .then(blob => {
                    const file = new File([blob], name, { type: blob.type });

                    return file;
                })
        }
        const imageBuff = await readChunkAsArrayBuffer(await imageUrlToFile(profilePicFileUrl.url, profilePicFileUrl.name));
        const uploadUrl = `http://localhost:3000/api/upload?type=${"profilePicFile"}&name=${profilePicFileUrl.name}`;
        await fetch(uploadUrl, {
            method: 'POST',
            body: imageBuff,
            headers: {
                'Content-Type': 'application/octet-stream',
            },
        }).then(async (res) => {
            const data = JSON.parse(await res.text())
           
            setProfilePicFileUrl({url:data.url,name:profilePicFileUrl.name})
        })


    }
    const PostHeroTitle = async () => {
        if (heroTitle !== null && heroTitle !== "") {
            const uploadUrl = `http://localhost:3000/api/Mongo?type=${"profileTitle"}`;
            const response = await fetch(uploadUrl, {
                method: 'POST',
                body: heroTitle,
                headers: {
                    'Content-Type': 'application/octet-stream',
                },
            }).then(async (res) => {
            })
               
        }



    }
    const PostHeroDesc = async () => {
        if (heroDesc !== null && heroDesc !== "") {
            const uploadUrl = `http://localhost:3000/api/Mongo?type=${"profileDesc"}`;
            const response = await fetch(uploadUrl, {
                method: 'POST',
                body: heroDesc,
                headers: {
                    'Content-Type': 'application/octet-stream',
                },
            }).then(async (res) => {
            })
               
        }



    }
    const PostHeroButtTitle = async () => {
        if (heroButtTitle !== null && heroButtTitle !== "") {
            const uploadUrl = `http://localhost:3000/api/Mongo?type=${"profileButtTitle"}`;
            const response = await fetch(uploadUrl, {
                method: 'POST',
                body: heroButtTitle,
                headers: {
                    'Content-Type': 'application/octet-stream',
                },
            }).then(async (res) => {
            })
                
        }
    }
    const PostHeroButtLink = async () => {
        if (heroButtLink !== null && heroButtLink !== "") {
            const uploadUrl = `http://localhost:3000/api/Mongo?type=${"profileButtLink"}`;
            const response = await fetch(uploadUrl, {
                method: 'POST',
                body: heroButtLink,
                headers: {
                    'Content-Type': 'application/octet-stream',
                },
            }).then(async (res) => {
            })
                
        }
    }
    const PostAboutMe = async () => {
        if (aboutMe !== null && aboutMe !== "") {
            const uploadUrl = `http://localhost:3000/api/Mongo?type=${"aboutMe"}`;
            const response = await fetch(uploadUrl, {
                method: 'POST',
                body: aboutMe,
                headers: {
                    'Content-Type': 'application/octet-stream',
                },
            }).then(async (res) => {
            })
               
        }
    }
    const changeSLInputState = async (e,) => {
        if (addOnClickType === 's') {
            setServicesInput(e.target.value)
        }
        if (addOnClickType === 'l') {
            setLanguagesInput(e.target.value)
        }


    }
    const addSLToList = () => {
        if (addOnClickType === 's') {
            setServicesList([...servicesList, servicesInput])
        }
        if (addOnClickType === 'l') {
            setLanguagesList([...languagesList, languagesInput])
        }

    }
    const PostLanguages = async () => {
        if (languagesList) {
            const uploadUrl = `http://localhost:3000/api/Mongo?type=${"skillsLanguages"}`;
            const response = await fetch(uploadUrl, {
                method: 'POST',
                body: JSON.stringify(languagesList),
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(async (res) => {
            })
               
        }

    }
    const PostServices = async () => {
        if (servicesList) {
            const uploadUrl = `http://localhost:3000/api/Mongo?type=${"skillsServices"}`;
            const response = await fetch(uploadUrl, {
                method: 'POST',
                body: JSON.stringify(servicesList),
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(async (res) => {
            })
                
        }

    }
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 100}`
    }
    useEffect(() => {
        if (props.dataP !== null) {
            const url=props.dataP[0].Hero.image
            const pathSegments = url.split('/');
            const fileNameAndExtension = pathSegments[pathSegments.length - 1]
            setProfilePicFileUrl({url:url,name:fileNameAndExtension})

            /*const fileName = fileNameAndExtension[0];
            const fileExtension = fileNameAndExtension[1];*/
            
            setHeroTitle(props.dataP[0].Hero.title)
            setHeroDesc(props.dataP[0].Hero.desc)
            setHeroButtTitle(props.dataP[0].Hero.buttTitle)
            setHeroButtLink(props.dataP[0].Hero.buttLink)




            const list = props.dataP[0].Skills.coding.icons.map((item) => {
                const url=item[Object.keys(item)[0]]
                const pathSegments = url.split('/');
                const fileNameAndExtension = pathSegments[pathSegments.length - 1].split('.');

                return { tag: Object.keys(item)[0], file: { url: item[Object.keys(item)[0]], name: fileNameAndExtension.join('.') } }
            })
            //setCodingListFileTag()
            setCodingListFileTag([...list])
            setServicesList([...props.dataP[0].Skills.services])
            setLanguagesList([...props.dataP[0].Skills.languages])
            setAboutMe(props.dataP[0].aboutme.text)
            setProjects(props.dataP[0].projects)
        }

    }, [props.dataP])
    const ProjectEditButtonOnClick=(e)=>{
        window.open('/addProject?type=update&id='+e.target.id, '_blank');
    }
    const ProjectDeleteButtonOnClick=async(e)=>{
            const uploadUrl1 = `/api/Mongo`;
            const uploadUrl = `${uploadUrl1}?type=${"deleteProject"}&id=${e.target.id}`
            await fetch(uploadUrl, {
                method: "DELETE",
            }).then(async (res) => {
                    const data = await res.json()
                    if(data.msg==='Project Deleted'){
                        setProjects(projects.filter((obj)=>obj._id!==e.target.id))
                    }
                    
            }).catch(err => {
                return `Failed to DELETE project`
            })
    }
    return (
        <>
            <Header />
            <AdminContainer>

                <Section id="home">
                    <SectionTitle>Hero</SectionTitle>

                    <Div>
                        <PLabel htmlFor="file-input">
                            {profilePicFileUrl ? (
                                <Image height={"72"} width={"72"} loader={myLoader} alt="" src={profilePicFileUrl.url} />
                            ) : (
                                <Image height={"72"} width={"72"} alt="" src />
                            )}
                        </PLabel>
                        <input
                            type="file"
                            id="file-input"
                            style={{ display: "none" }}
                            onChange={onChangeSetFile}
                        />
                        <Button id="HeroProfilePicture" onClick={PostProfilePicFile}>Save</Button>
                    </Div>

                    <Div>
                        <Input type="text" placeholder="Title" value={heroTitle} onChange={(e) => { setHeroTitle(e.target.value) }} className="write-input" />
                        <Button id="HeroTitle" onClick={PostHeroTitle}>Save</Button>
                    </Div>
                    <Div>
                        <TextArea placeholder="Description" value={heroDesc} typeof="text" onChange={(e) => { setHeroDesc(e.target.value) }} className="write-input write-text">
                        </TextArea>
                        <Button id="HeroDescription" onClick={PostHeroDesc}>Save</Button>
                    </Div>
                    <Div>
                        <Input type="text" placeholder="Button Title" value={heroButtTitle} onChange={(e) => { setHeroButtTitle(e.target.value) }} className="write-input" />
                        <Button id="HeroButtonTitle" onClick={PostHeroButtTitle}>Save</Button>
                    </Div>
                    <Div>
                        <Input type="text" placeholder="Button Link" value={heroButtLink} onChange={(e) => { setHeroButtLink(e.target.value) }} className="write-input" />
                        <Button id="HeroButtonLink" onClick={PostHeroButtLink}>Save</Button>
                    </Div>
                </Section>
                <Section id="skills">
                    <Div className="grid">
                        <SectionTitle>Skills</SectionTitle>

                        <AdminListWrapper>
                            <Div>
                                <h3><BiCodeAlt />Coding</h3>
                                <SAdd onClick={CodingAddOnClick}>Add Coding skill</SAdd>

                                <Button id="SkillsCoding" onClick={skillsCodingSave}>Save</Button>
                            </Div>
                            <DivInputAbs onClick={(e) => { if (e.target.localName === "div") { return setCodingDivInputAbs('closed') } else { return } }} className={codingDivInputAbs === 'closed' ? 'closed' : 'open Coding'}>
                                <Div>
                                    <Input onChange={(e) => setDivInputAbsTag(e.target.value)} type="text" placeholder="Tag" className="write-input" />

                                    <SLabel htmlFor="Skill-input">Add Icon</SLabel>
                                    <label style={{ width: "50px", height: "50px" }}>
                                        {codingIconFile ? (
                                            <Image height={"72"} width={"72"} alt="" src={codingIconFile.url} />
                                        ) : (
                                            <Image height={"72"} width={"72"} src />
                                        )}
                                    </label>
                                    <Button onClick={addCodingIconTagToList} id="HeroTitle">Add</Button>
                                    <input
                                        type="file"
                                        id="Skill-input"
                                        style={{ display: "none" }}
                                        onChange={addCodingIconFile}
                                    />
                                </Div>
                            </DivInputAbs>

                            <AdminList>
                                {
                                    codingListFileTag.length>0&&codingListFileTag.map((item, i) => {
                                        return (
                                            <AdminListItem key={i} onClick={() => deleteCodingItem(item.tag)}>
                                                <div className="div"><MdOutlineDeleteForever id={i} /></div>
                                                <Image src={item?.file?.url} width={"100"} height={"100"} alt={item.tag} />
                                            </AdminListItem>
                                        )
                                    })
                                }
                            </AdminList>
                            <Div>
                                <h3><BsListCheck />Services</h3>
                                <SAdd onClick={serviceAddOnClick}>Add Service</SAdd>
                                <Button onClick={PostServices} id="SkillsService">Save</Button>
                            </Div>

                            <SAdminList>
                                {servicesList.map((item, i) => {
                                    return (
                                        <SAdminListItem onClick={() => deleteServiceItem(item)} key={i}><BsCheck /><p style={{ width: "calc(100% - 80px)" }}>{item}</p></SAdminListItem>
                                    )
                                })}
                                {/*<SAdminListItem><BsCheck /><p style={{ width: "calc(100% - 80px)" }}>Developing, optimizing and maintaining your websites and applications.</p></SAdminListItem>
                                <SAdminListItem><BsCheck /><p style={{ width: "calc(100% - 80px)" }}>Coding design mockups into pixel perfect responsive websites.</p></SAdminListItem>
                                <SAdminListItem><BsCheck /><p style={{ width: "calc(100% - 80px)" }}>Managing your project from concept to completion utilizing the newest technologies.</p></SAdminListItem>
                                <SAdminListItem><BsCheck /><p style={{ width: "calc(100% - 80px)" }}>Setup and administrate Linux servers and software, such as Apache, Nginx, MySQL, and MongoDB.</p></SAdminListItem>
                                <SAdminListItem><BsCheck /><p style={{ width: "calc(100% - 80px)" }}>Deploying your website, and finding the perfect hosting service, and a unique domain name that suits your project.</p></SAdminListItem>
                                <SAdminListItem><BsCheck /><p style={{ width: "calc(100% - 80px)" }}>Managing your project from concept to completion utilizing the newest technologies.</p></SAdminListItem>*/}

                            </SAdminList>
                            <Div>
                                <h3><GrLanguage />Languages</h3>
                                <SAdd onClick={languageAddOnClick}>Add Language</SAdd>
                                <Button onClick={PostLanguages} id="SkillsService">Save</Button>
                            </Div>



                            <LList>
                                {languagesList.map((item, i) => {
                                    return (
                                        <LListItem onClick={() => deleteLanguagesItem(item)} key={i}>{item}</LListItem>
                                    )
                                })}

                                {/*<LListItem>Arabic (Native)</LListItem>
                                <LListItem>Tamazight (Native)</LListItem>*/}

                            </LList>



                        </AdminListWrapper>

                    </Div>

                    <DivInputAbs onClick={(e) => {
                        if (e.target.localName === "div") {
                            return setInputE('closed')
                        } else {
                            return
                        }

                    }} className={inputE === 'closed' ? 'closed' : 'open'}>
                        <input type="text" onChange={(e) => { changeSLInputState(e) }} placeholder={divInputAbs} />
                        <button onClick={addSLToList}>Add</button>
                    </DivInputAbs>
                </Section>
                <Section id="projects">
                    <Div className="grid">
                        <Div>
                            <SectionTitle>Projects</SectionTitle>
                            <SAdd onClick={ProjectAddOnClick}>Add Project</SAdd>
                            <Button id="SkillsService">Save</Button>
                        </Div>


                        <GridContainer>

                            {projects !== null && projects.map((p, i) => {
                                return (<BlogCard key={i}>
                                    <HoverImageEffect>
                                        <div className='DiV'>

                                        </div>
                                        <div style={{display:"flex",position:"absolute",top:"20px",left:"20px",zIndex: "100"}}>
                                                <button id={p._id} onClick={ProjectEditButtonOnClick} target="_blank" style={{padding:"15px",backgroundColor:"#1b892c",
                                                color:"white",outline:"none",borderRadius:"15px",
                                                border: "none",marginRight:"10px",
                                                cursor:"pointer"}}>Edit</button>
                                                <button id={p._id} onClick={ProjectDeleteButtonOnClick} style={{padding:"15px",backgroundColor:"#c12424",
                                                color:"white",outline:"none",borderRadius:"15px",
                                                border: "none",cursor:"pointer"}}>Delete</button>

                                        </div>
                                        <TitleContent className='titleH'>
                                            <div style={{display:"flex!importent",padding:"15px"}}>

                                            <HeaderThree className='title'>{p.title.substring(0, Math.min(p.title.length, 50))+"..."}</HeaderThree>
                                            <p style={{color:"#bdbdbd",fontSize:"14px"}}>{p.desc.substring(0, Math.min(p.desc.length, 100))+"..."}</p>
                                            </div>
                                        </TitleContent>

                                    </HoverImageEffect>
                                    <Img src={p.image} />

                                    {/*<CardInfo className="card-info">{p.description}</CardInfo>*/}
                                    {/*<div>
                                      <TitleContent>Stack</TitleContent>
                                      <TagList>
                                        {p.tags.map((t, i) => {
                                          return <Tag key={i}>{t}</Tag>;
                                        })}
                                      </TagList>
                                    </div>*/}
                                    {/*<UtilityList>
                                      <ExternalLinks href={p.visit}>Code</ExternalLinks>
                                      <ExternalLinks href={p.source}>Source</ExternalLinks>
                                    </UtilityList>*/}
                                </BlogCard>
                                );
                            })}
                        </GridContainer>
                    </Div>
                    {/*<DivInputAbs onClick={(e) => {
                        if (e.target.localName === "div") {
                            return setInputPRE('closed')
                        } else {
                            return
                        }

                    }} className={inputPRE === 'closed' ? 'closed' : 'open Project'}>

                        <input type="text" placeholder='Title' />
                        <label htmlFor="DescFile-input">
                            {PRfile ? (
                                <Image height={"72"} width={"72"} alt="" src={URL.createObjectURL(PRfile)} />
                            ) : (
                                <Image height={"72"} width={"72"} alt="" src/>
                            )}
                            <span>Tap to upload a Picture </span>
                        </label>
                        <input
                            type="file"
                            id="DescFile-input"
                            style={{ display: "none" }}
                            onChange={onChangeSetPRDescFile}
                        />
                        <textarea placeholder='Description'></textarea>
                        <label className="tagsLabel">
                            <select className="selectTags">
                                <option>HTML</option>
                                <option>CSS</option>
                                <option>JavaScript</option>
                                <option>PHP</option>
                            </select>
                            <button className="tagsAddButton">Add</button>
                        </label>
                        <Tags>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                            <span>PHP</span>
                        </Tags>


                        <button>Add</button>
                    </DivInputAbs>*/}

                </Section>
                <Section id="about">
                    <Div>
                        <SectionTitle>About Me</SectionTitle>
                        <Button id="SkillsService" onClick={PostAboutMe}>Save</Button>
                    </Div>

                    <Div><TextArea placeholder="About Me" value={aboutMe} typeof="text" onChange={(e) => { setAboutMe(e.target.value) }} className="write-input write-text"></TextArea></Div>




                </Section>


            </AdminContainer>
            <Footer />
        </>
    )
}

export default Admin