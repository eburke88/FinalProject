import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ReXplore from "./ReXplore/ReXplore.js";
import ProjectPage from "./Project-Components/projectPage.js"

import ProfilePage from './ProfilePage/ProfilePage.js'



export default function App() {
  
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
          <Route index element={<ProfilePage />} />
          <Route path="ReXplore" element={<ReXplore />} />
          <Route path="Project" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}



