

import Navbar from './Navbar';
import Home from './Home';
import Toolbar from './components/Toolbar';
import MyForm from './components/MyForm';

function App() {
const name = "Kirill";
const age = 37;
  const link = "https://www.linkedin.com/jobs/view/4024018455/?refId=ByteString(length%3D16%2Cbytes%3D4b7d5002...3d69515f)&trackingId=c3%2BB1PJJWNeOCswwTa%2BTzg%3D%3D";
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        {/* <h2>{name}</h2>
        <p>My age is {age}</p>
        <p>{Math.random() * 10}</p>

        <a href={link}>Go LinkedIn</a>

        <Toolbar />

        <MyForm /> */}
      </div>

    </div>
  );
}

export default App;
