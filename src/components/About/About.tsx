import React from 'react';
import Hero from '../../images/hero-about2.jpg';
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
      flexDirection: 'column-reverse',
      padding: '0',
    },
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingTop:'30px',
    '& h1': {
      fontWeight: 400,
      color: '#ffffff',
      marginBottom: '10px',
      letterSpacing: '0.5px',
      [theme.breakpoints.down('xs')]: {
        fontSize: '17px',
      },
    },
    '& p': {
      fontSize: '24px',
      marginBottom: '13px',
      marginRight: '20px',
      color: '#808080',
      [theme.breakpoints.down('xs')]: {
        fontSize: '24px',
      },
    },
  },
  hero: {
    
    width: '43vmin',
    height: '90%',
    [theme.breakpoints.down('xs')]: {
      display: 'flex-order',
      width: '90%',
      height: '250px',
      objectFit: 'cover',
      objectPosition: 'unset'
    },
  }
}));

export default function About () {
  const classes = styles();

  return (
    <div className={classes.container}>
      <div className={classes.description}>
          <h1>César Peláez</h1>
          <p>
            Tecnologo en analisis y Desarrollo de sistemas de información, <br />
            En El servicio Nacional de aprendizaje (SENA). <br />
            Cursos completos de JS y conocimientos En HTML y CSS en Platzi, <br />
            He trabajado principalmente con React.
          </p>
      </div>
       <img className={classes.hero} src={Hero} alt="hero-logo" />
    </div>
  );
}