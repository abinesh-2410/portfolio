
import './index.css';
import Portfolio from './component/Portfolio';
import Second from './component/Second';
import Third from './component/Third';
import Fourthpage from './component/Fourthpage';
import { BrowserRouter as Router, Route, Switch, Routes,Link } from 'react-router-dom';


function App() {
  return (
    <>
   
    
 <Portfolio/>
<Second/>
<Third/>
<Fourthpage/> 
<Router>

  <Routes>

        <Route path="/" element={Portfolio} />
        <Route path="/projects" element={Second} />
        <Route path="/skills" element={Third} />
        <Route path="/contact" element={Fourthpage} />
        {/* Add other routes here */}
      </Routes>
    </Router>


    </>
  );
}

export default App;
