import React from 'react';
import { Route } from 'react-router-dom';
import '../../uikit.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Home from '../home'
import About from '../about'
import Board from '../board'
import Seminars from '../seminars'
import Contact from "../contact";
import Events from "../events";
import Subscribe from "../subscribe";

const App = () => (
    <div>
        <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/seminars" component={Seminars}/>
            <Route exact path="/board"  component={Board}/>
            <Route exact path="/events" component={Events}/>
            <Route exact path="/subscribe" component={Subscribe}/>
        </main>
    </div>
);
export default App;