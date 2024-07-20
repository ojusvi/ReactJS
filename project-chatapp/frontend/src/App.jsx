import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import Homepage from "./Pages/Homepage";
import Layout from "./Pages/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="chat" element={<Chatpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
