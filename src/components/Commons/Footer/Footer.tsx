import React from "react";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      gridArea: 'ft',
      top: 'auto',
      bottom: 0,
      display: "flex",
      alignItems: 'flex-end',
      justifyContent: 'center',
      background: '#090909',
      '& span': {
          color: '#808080',
      },
      [theme.breakpoints.down('xs')]: {
        alignItems: 'center',
      },
    }
  }),
);

export default function Footer () {
    const classes = useStyles();

    return (
        <AppBar position="fixed" color="default" className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="open drawer" href="https://github.com/cesarpelaez92" target="_blank" rel="noopener">
                    <GitHubIcon />
                </IconButton>
                <IconButton color="inherit" href="https://twitter.com/cesar_pelaez92" target="_blank" rel="noopener">
                    <TwitterIcon />
                </IconButton>
                <IconButton edge="end" color="inherit" href="https://instagram.com/cesarpelaez35" target="_blank" rel="noopener">
                    <InstagramIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}