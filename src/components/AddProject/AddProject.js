import dynamic from "next/dynamic";
import Image from "next/image";
import { createRef, useEffect, useRef, useState } from "react";
import { Section } from "../../styles/GlobalComponents";
import { TextArea } from "../Admin/AdminStyles";
import { Input, Label, Tags } from "./AddProjectStyle";
const Editor = dynamic(() => import("../EditorJs/Editor.js"), {
    ssr: false,
});

const AddProject = () => {
    let bool = false
    const [update, setUpdate] = useState(false)
    const [projectImage, setProjectImage] = useState(null);
    const [descInput, setDescInput] = useState(null);
    const [titleInput, setTitleInput] = useState(null);
    const [dataFromEditor, setDataFromEditor] = useState(null);
    const myRef = createRef(null);
    const selectRef = createRef(null);
    const [tags, setTags] = useState([]);
    const [options, setOptions] = useState([]);
    const [editorData, setEditorData] = useState(null)
    const[_Id,set_Id]=useState(null)
    const addSelectedOptionToTags = () => {
        setTags([...tags, selectRef.current.value]);
    };
    const remove = (item1) => {
        setTags((obj) => obj.filter((item) => item !== item1));
    };
    useEffect(() => {
        if (bool === false) {
            async function updateDataTags() {
                const res = await fetch('/api/Mongo?type=getTags')
                const data = await res.json()
                setOptions([...data])
            }
            updateDataTags()
            async function fun() {
                const urlParams = new URLSearchParams(window.location.search);
                const type = urlParams.get('type');
                if (type === "update") {
                    setUpdate(true)
                    const id = urlParams.get('id');
                    if (id !== "") {
                        const res = await fetch('/api/Mongo?type=update&id=' + id)
                        const data = await res.json()
                        setTitleInput(data.title)
                        const url = data.image
                        const pathSegments = url.split('/');
                        const fileNameAndExtension = pathSegments[pathSegments.length - 1].split('.');
                        setProjectImage({ url: data.image, name: fileNameAndExtension.join('.').split("addProjectDescImage")[1] })
                        setDescInput(data.desc)
                        set_Id(data._id)
                        setTags([...data.tags])
                        setEditorData(data.editordata)

                    }
                } else {
                    setUpdate(false)
                }

            }
            fun()
            bool = true
        }
    }, [])
    useEffect(() => {
        if (
            dataFromEditor !== null &&
            projectImage !== null &&
            titleInput !== null &&
            descInput !== null &&
            tags !== null
        ) {
            if (
                dataFromEditor.blocks.length > 0 &&
                titleInput !== "" &&
                descInput !== "" &&
                tags.length > 0 &&
                projectImage.url !== ""
            ) {
                let dataOthers = {};
                dataOthers["title"] = titleInput;
                dataOthers["descInput"] = descInput;
                dataOthers["tags"] = tags;
                dataOthers["dataFromEditor"] = dataFromEditor;
                const upload = async (arrayBufferP, type, name, uploadUrl1, method, id) => {
                    const uploadUrl = `${uploadUrl1}?type=${type}&name=${type + name}&id=${id}`
                    return await fetch(uploadUrl, {
                        method: method,
                        body: arrayBufferP,
                        headers: {
                            'Content-Type': 'application/octet-stream',
                        },
                    }).then(async (res) => {
                        if (type === "addProject") {
                            const data = await res.text()
                            return JSON.parse(data)
                        } else {
                            const data = JSON.parse(await res.text())
                            return { url: data.url, msg: `Uploaded image tag ${type + name}` }
                        }

                    }).catch(err => {
                        return `Failed to upload ${type + name}`
                    })

                }

                const uploadDescImage = async () => {
                    async function imageUrlToFile(imageUrl, name) {
                        return fetch(imageUrl)
                            .then(response => response.blob())
                            .then(blob => {
                                const file = new File([blob], name, { type: blob.type });

                                return file;
                            })
                    }
                    const imageBuff = await readChunkAsArrayBuffer(await imageUrlToFile(projectImage.url, projectImage.name));
                    const uploadUrl = `http://localhost:3000/api/upload`
                    const responseUploadImage = await upload(imageBuff, "addProjectDescImage", projectImage.name, uploadUrl, "POST", "")
                    setProjectImage({ url: responseUploadImage.url, name: projectImage.name })
                    dataOthers["descImage"] = responseUploadImage.url;
                    return dataOthers
                }
                
                const promises = dataOthers.dataFromEditor.blocks.map(async (item, i) => {
                    if (item.type === "image") {
                        const uploadUrl = `http://localhost:3000/api/upload`
                        const blobUrl = item.data.url;

                        const response = await fetch(blobUrl)
                        const responseUploadImage = await upload(await response.arrayBuffer(), "addProjectEditorImage", item.data.name, uploadUrl, "POST", "")
                        dataOthers.dataFromEditor.blocks[i].data.url = responseUploadImage.url
                        
                    }

                });
                Promise.all(promises).then(async () => {
                    const uploadUrl = `http://localhost:3000/api/Mongo`;
                    if (update === true) {
                        await upload(JSON.stringify(await uploadDescImage()), "updateProject", "", uploadUrl, "PUT",_Id)
                        
                        
                    } else if (update === false) {
                        await upload(JSON.stringify(await uploadDescImage()), "addProject", "", uploadUrl, "POST", "")
                       
                    }

                });
            }
        }
    }, [dataFromEditor]);

    function readChunkAsArrayBuffer(image) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsArrayBuffer(image);
            reader.addEventListener("load", () => resolve(reader.result));
            reader.addEventListener("error", () => reject("Reading file failed"));
            reader.addEventListener("abort", () => reject("Reading file aborted"));
        });
    }
    const EditorData = (data) => {
        setDataFromEditor(data);
    };
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 100}`
    }
    return (
        <Section hero id="projects">
            <Input onChange={(e) => setTitleInput(e.target.value)} defaultValue={titleInput} type="text" placeholder="Title" />
            <Label htmlFor="DescFile-input">
                {projectImage !== null ? (
                    <Image
                        loader={myLoader}
                        height={"72"}
                        width={"72"}
                        alt=""
                        src={projectImage ? projectImage.url : "/"}
                    />
                ) : (
                    <Image height={"72"} width={"72"} alt="" src />
                )}
                <span>Tap to upload a Picture </span>
            </Label>
            <input
                type="file"
                id="DescFile-input"
                style={{ display: "none" }}
                onChange={(e) => setProjectImage({ url: URL.createObjectURL(e.target.files[0]), name: e.target.files[0].name })}
            />
            <TextArea
                onChange={(e) => setDescInput(e.target.value)}
                placeholder="Description"
                defaultValue={descInput}
            ></TextArea>
            {
            editorData !== null &&
                (<Editor
                    addProjectParentRef={myRef}
                    onChildData={(data) => EditorData(data)}
                    dataE={{ update: update, editorData: editorData }}
                />)
            }
            {
            update ===false &&
                (<Editor
                    addProjectParentRef={myRef}
                    onChildData={(data) => EditorData(data)}
                    dataE={{ update: false}}
                />)
            }

            <label className="tagsLabel">
                <select ref={selectRef} className="selectTags">
                    {options.length > 0 && options.map((item, i) => (
                        <option key={i}>{item}</option>
                    ))}
                </select>
                <button onClick={addSelectedOptionToTags} className="tagsAddButton">
                    Add
                </button>
            </label>
            <Tags>
                {tags.map((item, i) => {
                    return (
                        <span onClick={() => remove(item)} key={i}>
                            {item}
                        </span>
                    );
                })}
            </Tags>

            <button ref={myRef}>Save</button>
        </Section>
    );
};

export default AddProject;
