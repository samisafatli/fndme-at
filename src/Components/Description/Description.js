import React from "react";
import {MegadraftEditor, editorStateFromRaw, EditorState} from "megadraft";
import 'megadraft/dist/css/megadraft.css'
import icons from 'megadraft/lib/icons'

const MAX_LENGTH = 262

const customActions = [
  { type: "inline", label: "B", style: "BOLD", icon: icons.BoldIcon },
  { type: "inline", label: "I", style: "ITALIC", icon: icons.ItalicIcon },
  { type: "entity", label: "Link", style: "link", entity: "LINK", icon: icons.LinkIcon },
]

class Description extends React.Component {
  constructor(props) {
    super(props)
    this.state = {editorState: editorStateFromRaw(null)}
  }

  onChange = editorState => {
    this.setState({editorState});
  }

  render() {
    return (
      <div className="Description" style={{height:310, border:"1px solid black", width:225}}>
        <MegadraftEditor
          editorState={this.state.editorState}
          onChange={this.onChange}
          placeholder='Add your Description'
          sidebarRendererFn={{}}
          actions={customActions}
          modalOptions={{width:225, height:310}}
          handleBeforeInput={this._handleBeforeInput}
          handlePastedText={this._handlePastedText}/>
      </div>
    )
  }

  _getLengthOfSelectedText = () => {
    const currentSelection = this.state.editorState.getSelection();
    const isCollapsed = currentSelection.isCollapsed();

    let length = 0;

    if (!isCollapsed) {
      const currentContent = this.state.editorState.getCurrentContent();
      const startKey = currentSelection.getStartKey();
      const endKey = currentSelection.getEndKey();
      const startBlock = currentContent.getBlockForKey(startKey);
      const isStartAndEndBlockAreTheSame = startKey === endKey;
      const startBlockTextLength = startBlock.getLength();
      const startSelectedTextLength = startBlockTextLength - currentSelection.getStartOffset();
      const endSelectedTextLength = currentSelection.getEndOffset();
      const keyAfterEnd = currentContent.getKeyAfter(endKey);
      console.log(currentSelection)
      if (isStartAndEndBlockAreTheSame) {
        length += currentSelection.getEndOffset() - currentSelection.getStartOffset();
      } else {
        let currentKey = startKey;

        while (currentKey && currentKey !== keyAfterEnd) {
          if (currentKey === startKey) {
            length += startSelectedTextLength + 1;
          } else if (currentKey === endKey) {
            length += endSelectedTextLength;
          } else {
            length += currentContent.getBlockForKey(currentKey).getLength() + 1;
          }

          currentKey = currentContent.getKeyAfter(currentKey);
        };
      }
    }
    return length;
  }

  _handleBeforeInput = () => {
    const currentContent = this.state.editorState.getCurrentContent();
    const currentContentLength = currentContent.getPlainText('').length;
    const selectedTextLength = this._getLengthOfSelectedText();
    if (currentContentLength - selectedTextLength > MAX_LENGTH - 1) return 'handled'
  }

  _handlePastedText = (pastedText) => {
    const currentContent = this.state.editorState.getCurrentContent();
    const currentContentLength = currentContent.getPlainText('').length;
    const selectedTextLength = this._getLengthOfSelectedText();

    if (currentContentLength + pastedText.length - selectedTextLength > MAX_LENGTH) return 'handled'
  }
}

export default Description