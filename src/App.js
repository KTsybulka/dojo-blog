

import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Toolbar from './components/Toolbar'; // If you plan to use it, otherwise remove
import MyForm from './components/MyForm'; // If you plan to use it, otherwise remove
import Create from './Create';
import Some from './Some';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';

function App() {
  const name = "Kirill"; // Consider using these or removing them if unnecessary
  const age = 37; 
  const link = "https://www.linkedin.com/jobs/view/4024018455/?refId=ByteString(length%3D16%2Cbytes%3D4b7d5002...3d69515f)&trackingId=c3%2BB1PJJWNeOCswwTa%2BTzg%3D%3D";

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path='/create' element={<Create/>} />
            <Route path='/some' element={<Some/>}/>
            <Route path='/blogs/:id' element={<BlogDetails/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;