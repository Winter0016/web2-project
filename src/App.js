import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout/Layout.js";
import HOME from "./pages/homepage/homepage.js";
import PATRON from "./pages/patron/patron.js";
import SEE from "./pages/moreblogs/blogs.js";
import Submitted from"./pages/submit/submit.js";
import FORMAT from "./pages/form/form.js";
// import { BlogContextProvider } from './context/blogContextProvider.js';
//import { Provider } from 'react-redux';

function App() {
  return (
    
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HOME />} />
          <Route path="/patrons" element={<PATRON />} />
          <Route path ="/moreblogs" element={<SEE />} />
          <Route path="/sucessfully-submitted" element={<Submitted />} />
          <Route path="/sign" element={<FORMAT />} />
        </Routes>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
