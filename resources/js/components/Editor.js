import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';





export default class Editor extends React.Component {
    constructor() {
        super();
        this.state = {
      editorState: EditorState.createEmpty(),
    };
    this.setDomEditorRef = ref => this.domEditor =ref;

    }
  
    onEditorStateChange: Function = (editorState) => {
      this.setState({
        editorState,
    }, () => {
        this.props.sendResult(draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())));
      });
    };
    reset = () => {
        let {editorState} = this.state;
        editorState = clearEditorContent(editorState);
        this.setState({ editorState });
    };
  
  
    render() {
      const { editorState } = this.state;
      return (
         < Editor onEditorStateChange={this.onEditorStateChange.bind(this)} editoerState={this.state.outputEditorState} defaultEditorState={this.state.initState} uploadCallback={uploadImageCallBack} wrapperClassName="global-rte-class" editorClassName="editor-class" toolbarClassName="toolbar-class"/>);

    
          
      );
    }
  }


if (document.getElementById('app')) {
    ReactDOM.render(<Editor/>, document.getElementById('app'));
}