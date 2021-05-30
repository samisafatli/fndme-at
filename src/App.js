import './App.css';
import ProfilePicture from '../src/Components/ProfilePicture/ProfilePicture'
import Editor from './Components/Editor/Editor'

function App() {
  return (
    <div className="App">
      <div className="ProfilePicture">
        <ProfilePicture/>
      </div>
      <div className="Description">
        <Editor limit={262}placeholder=" Description"/>
      </div>
      <div className="Experience">
        <Editor limit={1384} placeholder=" Experience"/>
      </div>
      <div className="Education">
        <Editor limit={485} placeholder=" Education"/>
      </div>
    </div>
  );
}

export default App;
