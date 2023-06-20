
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SearchPage from "./Jams/SearchPage.js"


import JamPage from "./Jams/JamPage.js"


export default function App() {
  
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}> {/* telling broswerrouter where to start  */}
      <Routes>
          <Route index element={<JamPage />} />
          <Route path="Search" element={<SearchPage />} /> 
      </Routes>
    </BrowserRouter>
    // setting the index route, and other available paths in the app 
  );
}



