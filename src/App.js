import './App.css';
import ProfilePicture from '../src/Components/ProfilePicture/ProfilePicture'
import Description from '../src/Components/Description/Description'

function App() {
  return (
    <div className="App">
      <div className="ProfilePicture">
        <ProfilePicture/>
      </div>
      <Description className="Description"/>
    </div>
  );
}

export default App;
