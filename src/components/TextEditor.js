import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import { draftToHtml } from "draft-html";

const TextEditor = () => {
  const [editorState, setEditorState] = useState(() => {
    return EditorState.createEmpty();
  });

  let textToHtml = draftToHtml(convertToRaw(editorState.getCurrentContent()));

  return (
    <div>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={setEditorState}
        localization={{
          locale: "ja",
        }}
        placeholder="ここに入力してください"
        mention={{
          separator: " ",
          trigger: "@",
          suggestions: [
            { text: "田中太郎", value: "田中夫郎", url: "tanakataro" },
            { text: "山田花子", value: "山田花子", url: "yamadahanako" },
            { text: "鈴木一郎", value: "鈴木一郎", url: "suzukiichiro" },
          ],
        }}
      />
      <div>
        <textarea cols="100" rows="10" disabled value={textToHtml}></textarea>
      </div>
      <div dangerouslySetInnerHTML={{ __html: textToHtml }} />
    </div>
  );
};

export default TextEditor;
