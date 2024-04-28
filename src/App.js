
import './App.css';
import AboutStarfish from './Components/AboutStarfish';
import Bottom from './Components/Bottom';
import ClasssesStarfish from './Components/ClasssesStarfish';
import LastBottom from './Components/LastBottom';
import MidBar from './Components/MidBar';
import NavBar from './Components/NavBar';
import Paragraph from './Components/Paragraph';
import StarfishService from './Components/StarfishService';
import VideoAds from './Components/VideoAds';


function App() {
  return (
    <div >
     <NavBar/>
     <VideoAds/>
     <AboutStarfish/>
     <MidBar/>
     <StarfishService/>
     <ClasssesStarfish/>
     <Paragraph/>
     <Bottom/>
     <LastBottom/>
   
    </div>
  );
}

export default App;
