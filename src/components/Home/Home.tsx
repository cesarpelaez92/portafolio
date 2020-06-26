import React from 'react'
import Hero from '../../images/hero.png';
import { makeStyles, Theme } from '@material-ui/core/styles';

const styles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    gridArea: 'main',
    padding: '0 20px',
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      padding: '0',
    },
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    '& h5': {
      fontWeight: 400,
      color: '#808080',
      marginBottom: '10px',
      letterSpacing: '0.5px',
      [theme.breakpoints.down('xs')]: {
        fontSize: '17px',
      },
    },
    '& p': {
      fontSize: '34px',
      marginBottom: '13px',
      [theme.breakpoints.down('xs')]: {
        fontSize: '24px',
      },
    },
    '& button': {
      fontSize: '17px',
      fontFamily : 'inherit',
      width: '140px',
      padding: '10px 12px',
      fontWeight: '500',
      border: '1px solid #ffffff',
      borderRadius: '2px',
      background: '#090909',
      color: '#FFFFFF',
      cursor: 'pointer',
      outline: 'none',
      '&:active': {
        transform: 'scale(0.95)',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '16px',
      },
    },
  },
  hero: {
    width: '40vmin',
    height: 'auto',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  }
}));

export default function Home() {
    const classes = styles();

    return (
      <div className={classes.container}>
        <div className={classes.description}>
            <h5>{'<HELLO WORLD>'}</h5>
            <p>
              My name is Cesar Pelaez. <br />
              I´m frontend developer. <br />
              Developer from Colombia.
            </p>
            <button>CONTACT ME</button>
        </div>
        <img className={classes.hero} src={Hero} alt="hero-logo" />
      </div>
    );
}
