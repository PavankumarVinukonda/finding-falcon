import {BrowserRouter,Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import Intro from './components/intro';
import './App.css';

const App = () =>( 

    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Intro} />
    <Route exact path="/game" component={Home} />       
              
    </Switch>
    </BrowserRouter>
    )


export default App;
