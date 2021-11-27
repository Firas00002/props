
import './App.css';
import Profilecomponents from './Profile/Profilecomponents'
import imageinSrc from "./imageinSrc.png"
function App() {
  const profile = {
    fullname:'Adam Smith',
    bio:' Work with API Gateway, Set up automated tests, Develop and maintain Features',
    Job:'Devlopper',
     }  
   
     const handleName =(name) => alert(`${name}`);
  
     return (
    <div className="App">
      
      <Profilecomponents user={profile} name={handleName}> 
      <img style={{width:'50%' ,height:'50%'}} src={imageinSrc} alt ='myImage' />


      </Profilecomponents>
      
    </div>
  );
}

export default App;
