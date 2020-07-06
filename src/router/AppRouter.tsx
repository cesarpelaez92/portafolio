import React from "react";
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { Home } from "../components/Home";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Skills from "../components/Skills/Skills";

export const  AppRouter = () => {
  return (
        <Switch>
            <Route path="/portafolio/about" component={ About }/>
            <Route path="/portafolio/Experience" component={ Experience }/>
            <Route path="/portafolio/skills" component={ Skills }/>
            <Route path="/portafolio/Home" component={ Home } />
            <Route path="">
                  <Redirect to="/home" />
            </Route> 
        </Switch>
  );
}