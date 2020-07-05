import React from "react";
import {
  Switch,
  Route
} from 'react-router-dom';
import { Home } from "../components/Home";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Skills from "../components/Skills/Skills";

export const  AppRouter = () => {
  return (
        <Switch>
            <Route path="/about" component={ About }/>
            <Route path="/Experience" component={ Experience }/>
            <Route path="/skills" component={ Skills }/>
            <Route path="/" component={ Home }/>
        </Switch>
  );
}