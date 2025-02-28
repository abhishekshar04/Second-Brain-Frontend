import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "./components/Ui/NavBar/NavBar";
import { HeroSection } from "./components/Ui/HeroSection/HeroSection";
import { Footer } from "./components/Ui/Footer/Footer";
import { LoginForm, SignupForm } from "./components/Ui/Auth/Auth";
import DashBoard from "./components/Ui/DashBoard/DashBoard";
import { MainContent } from "./components/Ui/DashBoard/MainContent";
import {atom, RecoilRoot} from "recoil";

export const userState = atom({
  key: 'userState',
  default: {}
})

const App: React.FC = () => {
  const token = localStorage.getItem('token')
  return (
    <RecoilRoot>
      <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<>
            {!token 
              ?
                <><NavBar button="yes" path="/signup"/>
                <HeroSection />
              </>
              :
              <Navigate to="/dashboard/content" />
            }
            </>} />
            <Route path="/signup" element={<><NavBar button="no" path="/signup"/><SignupForm /></>} />
            <Route path="/login" element={<><NavBar button="no" path="/login"/><LoginForm /></>} />
            <Route path="/dashboard" element={<><DashBoard/></>} >
              <Route path="content" element={<><MainContent/></>}/>
              <Route path="search" element={<div>This is search</div>} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
    </RecoilRoot>
    
  );
};

export default App;
