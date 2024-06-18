import React, { useState, useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';
const Header = require('@editorjs/header');
const LinkTool = require('@editorjs/link');
const RawTool = require('@editorjs/raw');
//const SimpleImage = require('@editorjs/simple-image');
import SimpleImage from './simple-image/simple-image.js'
const Checklist = require('@editorjs/checklist');
import List from '@editorjs/list';
import Embed from '@editorjs/embed';
const Quote = require('@editorjs/quote');

class ColorTool {
    clear() {
        this.hideActions();
    }
    static get sanitize() {
        return {
            mark: {
                class: 'cdx-colorM'
            }
        };
    }
    static get isInline() {
        
        return true;
    }

    get state() {
        
        return this._state;
    }

    set state(state) {
        this._state = state;

        this.button.classList.toggle(this.api.styles.inlineToolButtonActive, state);
    }
    //Now it's time to use the Editor`s API features. We can access the API using the api object passed to the Tool constructor.
    //For Marker Tool we need styles and selection APIs.
    //Styles API provides some CSS classes` names to stylize elements of our Tool with common Editor.js style:
    constructor({ api }) {
        this.api = api;
        this.button = null;
        this._state = false;

        this.tag = 'COLOR';
        this.class = 'cdx-colorM';
    }
    //Render method must return HTML element of the button for Inline Toolbar.
    render() {
        this.button = document.createElement('button');
        this.button.type = 'button';
        this.button.innerHTML = "C";
        this.button.classList.add(this.api.styles.inlineToolButton);

        return this.button;
    }
    //Finally, when button is pressed Editor calls surround method of the tool with Range object as an argument:
    //Selection API has some useful methods to work with selected text fragments.
    //For the Marker Tool we will use following API methods:
    //findParentTag and expandToTag. First one accepts tag name and class name as arguments and returns first found parent element of 
    //anchorNode of the Selection with passed parameters and null if such element doesn't exist.
    //Second one accepts HTML element as argument and expand current selection to that element.
    //After we replace selected text with mark element we need to expand selection to the inserted element:
    surround(range) {
        if (this.state) {
            this.unwrap(range);
            return;
        }

        this.wrap(range);
    }
    //Let's move code of surrounding text to another method called wrap and create unwrap method to remove highlighting.
    // To remove highlight we need to find mark tag from selection position and replace it with plain text:
    wrap(range) {
        const selectedText = range.extractContents();
        const colorM = document.createElement(this.tag);

        colorM.classList.add(this.class);
        colorM.appendChild(selectedText);
        range.insertNode(colorM);

        this.api.selection.expandToTag(colorM);
    }
    unwrap(range) {
        const colorM = this.api.selection.findParentTag(this.tag, this.class);
        colorM.remove();
        const text = range.extractContents();

        

        range.insertNode(text);
    }

    //When user selects some text Editor calls checkState method of each Inline Tool with current Selection to update the state if selected 
    //text contains some of the inline markup.
    checkState() {
        const colorM = this.api.selection.findParentTag(this.tag);

        this.state = !!colorM;

        if (this.state) {
            this.showActions(colorM);
        } else {
            this.hideActions();
        }
    }
    //To add input to the Inline Toolbar we need renderActions method which returns some layout we want to add:
    renderActions() {
        this.colorPicker = document.createElement('input');
        this.colorPicker.type = 'color';
        this.colorPicker.value = '#f5f1cc';
        this.colorPicker.hidden = true;
        return this.colorPicker;
    }

    showActions(colorM) {
        const { color } = colorM.style;
        this.colorPicker.value = color ? this.convertToHex(color) : '#f5f1cc';

        this.colorPicker.onchange = () => {
            colorM.style.color = this.colorPicker.value;
        };
        this.colorPicker.hidden = false;
    }

    hideActions() {
        this.colorPicker.onchange = null;
        this.colorPicker.hidden = true;
    }

    convertToHex(color) {
        const rgb = color.match(/(\d+)/g);

        let hexr = parseInt(rgb[0]).toString(16);
        let hexg = parseInt(rgb[1]).toString(16);
        let hexb = parseInt(rgb[2]).toString(16);

        hexr = hexr.length === 1 ? '0' + hexr : hexr;
        hexg = hexg.length === 1 ? '0' + hexg : hexg;
        hexb = hexb.length === 1 ? '0' + hexb : hexb;

        return '#' + hexr + hexg + hexb;
    }
}
let bool = false
const Editor = (props) => {

    useEffect(() => {
        
        async function fun(){
            const tools ={
                colortool: {
                    class: ColorTool,
                    inlineToolbar: true
                },
                header: {
                    class: Header,
                    inlineToolbar: true
                },
                list: {
                    class: List,
                    inlineToolbar: true
                },
                linkTool: {
                    class: LinkTool,
                    inlineToolbar: true
                },
                raw: {
                    class: RawTool,
                    inlineToolbar: true
                },

                image: {
                    class: SimpleImage,
                    inlineToolbar: true
                },

                checklist: {
                    class: Checklist,
                    inlineToolbar: true,
                },
                list: {
                    class: List,
                    inlineToolbar: true,
                    config: {
                        defaultStyle: 'unordered'
                    }
                },
                embed: {
                    class: Embed,
                    inlineToolbar: true,
                },
                quote: {
                    class: Quote,
                    inlineToolbar: true,
                },
            }
            const editor = new EditorJS({
                holder: 'editorjs',
                tools: tools,
                autofocus: true,

                data: props.dataE.update===true?props.dataE.editorData:{},
            });
            props.addProjectParentRef.current.addEventListener('click', () => {
                editor.save().then((data) => {
                    props.onChildData(data)
                }).catch((error) => {
                });
            })
        }
        if(bool===false){
            fun()
            bool=true
        }
        



    }, []);


    return (

        <div style={{ width: "100%" }}>
            <h1 style={{color:"white"}}>My Editor</h1>
            <div style={{ color: "white" ,width:"100%"}} id="editorjs" />
        </div>
    );
};

export default Editor;