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
      color: '#808080',
      [theme.breakpoints.down('xs')]: {
        fontSize: '24px',
      },
    },
    '& ul': {
        fontSize: '24px',
        marginBottom: '13px',
        color: '#808080',
        textDecoration: 'none',
        listStyle: 'none',
        columns: 2,
        [theme.breakpoints.down('xs')]: {
            fontSize: '17px',
            columns: 1,
          },
    }
  },
  hero: {
    width: '40vmin',
    height: 'auto',
    [theme.breakpoints.down('xs')]: {
      display: 'flex-order',
      width: '400px',
      height: '250px',
      objectFit: 'cover',
      objectPosition: 'unset'
      
    },
  }
}));

export default function Skills () {
  const classes = styles();

  return (
    <div className={classes.container}>
      <div className={classes.description}>
          <h1>MY SKILLS</h1>
            <ul>
                <li>- Responsive layouts</li>
                <li>- HTML 5 and CSS 3</li>
                <li>- JavaScript, ES6</li>
                <li>- React</li>
                <li>- Web Development</li>
                <li>- SQL y NOSQL</li>
                <li>- TypeScript</li>
            </ul>
      </div>
    </div>
  );
}