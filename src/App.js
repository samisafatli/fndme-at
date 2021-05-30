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
        <Editor placeholder="Add your Description"/>
      </div>
      <div className="Experience">
        <Editor placeholder="Add your Experience"/>
      </div>
    </div>
  );
}

export default App;
