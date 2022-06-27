import {BrowserRouter as Router, Switch , Route } from 'react-router-dom'
import Frame from './components/Frame';
import './style.css'
function App() {
  return (
   <Router>
    <div id="background"></div>
    <div id="body">
        <form>
            <div className = 'bloc'>
                <input type="text" id = "lon"/>
                <label>Longitude</label>
            </div>
            <div className = 'bloc'>
                <input type="text" id = "lat"/>
                <label>latitude</label>
            </div>
        </form>
        <div className="mapouter">
            <div className="gmap_canvas" id = "gmapCanvas">
                <Switch>
                    <Route path="/:pos?" component={Frame}/>
                    
                </Switch>
            </div>
        </div>
    </div>
    </Router>
  );
}

export default App;
