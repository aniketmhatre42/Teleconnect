
import {Routes , Route} from "react-router-dom"
import HomePage from './pages/Home';
import RoomPage from './pages/Home/Room';
import PhoneAuth from "./PhoneAuth";


function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
     // <Route path="/phoneauth" element={<PhoneAuth />} />//
      <Route path='/room/:roomId' element={<RoomPage />} />
    </Routes>
   
  );
}

export default App;
