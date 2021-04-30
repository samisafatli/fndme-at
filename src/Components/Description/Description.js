import React from "react";
import {MegadraftEditor, editorStateFromRaw} from "megadraft";

//Import megadraft.css
import 'megadraft/dist/css/megadraft.css'

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: editorStateFromRaw(null)};
  }

  onChange = (editorState) => {
    this.setState({editorState});
  }

  render() {
    return (
      //Add some margin left to show plugins sidebar
      <div className="Description" style={{height:300, marginLeft: 10, marginTop: 50, border:"1px solid black", width:225}}>
        <MegadraftEditor
          editorState={this.state.editorState}
          onChange={this.onChange}
          placeholder='Add your Description'
          sidebarRendererFn={{}}
          modalOptions={{width:225, height:300}}/>
      </div>
    )
  }
}

export default Description