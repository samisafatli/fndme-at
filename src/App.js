import './App.css';
import ProfilePicture from '../src/Components/ProfilePicture/ProfilePicture'
import Description from '../src/Components/Description/Description'

function App() {
  return (
    <div className="App">
      <div className="ProfilePicture">
        <ProfilePicture/>
      </div>
      <div style={{width: "225px", marginLeft:"10px", marginTop:"70px"}}>
        <Description className="Description"/>
      </div>
    </div>
  );
}

export default App;
