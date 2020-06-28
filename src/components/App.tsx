import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

import {Header} from './Commons/Header'
import { Home } from './Home';
import { Footer } from "./Commons/Footer";

const styles = makeStyles((theme: Theme) => ({
  root: {
    display: 'grid',
    width: 'auto',
    minHeight: '100vh',
    margin: '0 40px',
    gridTemplateAreas: `
    "hd hd hd hd hd hd hd hd hd hd hd hd"
    "main main main main main main main main main main main main"
    "ft ft ft ft ft ft ft ft ft ft ft ft"`,
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: '1fr 10fr 1fr',
    gap: '20px',
    [theme.breakpoints.down('xs')]: {
      margin: '0 20px',
    },
  }
}));

function App() {
  const classes = styles();
  return (
    <div className={classes.root}>
      <Header/>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
