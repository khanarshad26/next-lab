import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, { formats, modules } from "../Editor/EditorToolbar";
import { demoBlogHtml } from './demo-blog-data';
import "./styles.css";

export const Editor = () => {
  const [state, setState] = React.useState({ value: demoBlogHtml });
  const handleChange = value => {
    setState({ value });
  };
  return (
    <div className="text-editor" style={{marginTop: '100px'}}>
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={state.value}
        onChange={handleChange}
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
      />
      
      <div onClick={() => console.log('html : ', state.value)}>Preview</div>
      <div contentEditable='false' dangerouslySetInnerHTML={{ __html: state.value }}></div>
    </div>
  );
};

export default Editor;