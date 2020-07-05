import React from 'react';
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
}));

export default function Experience () {
  const classes = styles();

  return (
    <div className={classes.container}>
      <div className={classes.description}>
          <h1>Experiencia</h1>
          <p>
            Practicas Profesionales: Pragma S.A (Desarrollador Frontend) 2020/07.
          </p>
      </div>
    </div>
  );
}