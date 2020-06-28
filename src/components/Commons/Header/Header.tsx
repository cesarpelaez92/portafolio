import React, { useState } from 'react';
import { createStyles, Theme, makeStyles, withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import LanguageIcon from '@material-ui/icons/Language';

const useStyles = makeStyles((theme: Theme) => createStyles({
    appBar: {
        gridArea: 'hd',
        top: 'auto',
        display: "flex",
        alignItems: 'space-between',
        justifyContent: 'center',
        background: '#090909',
        boxShadow: 'none',
        width: '100%',
        '& span': {
            color:'#808080',   
        },   
    },
    separator: {
        flexGrow: 1,
    },
    menu: {
        width: '100%',
        height: '100%',
        background: "#090909",
        color: "#ffffff",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'none',
    },
}))

const StyledMenuItem = withStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: `'IBM Plex Mono', monospace`,
        color: '#FFFFFF',
        fontSize: '34px',
        letterSpacing: '0.3rem',
        textTransform: 'uppercase',
    },
  }))(MenuItem);

  type myProps = {
      decision: boolean;
  }


export default function Header(){
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);

    function Afuera (props: any) {
        return <MenuIcon></MenuIcon>
    }

    function Adentro (props: any) {
        return <CloseIcon></CloseIcon>
    }

    function Total (props: any) {
        const decision = props.decision;

        if(!decision){
            return <Afuera /> 
        }
        return <Adentro />
    }

    return (
      <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Total decision={ isOpen } />
          </IconButton>
          <div className={classes.separator} />
          <IconButton>
            <LanguageIcon />
          </IconButton>
        </Toolbar>
        <Menu 
            PopoverClasses={{paper: classes.menu}}
            id="simple-menu"
            keepMounted open={isOpen}
            onClose={() => setIsOpen(!isOpen)}
        >
            <StyledMenuItem>Home</StyledMenuItem>
            <StyledMenuItem>About Me</StyledMenuItem>
            <StyledMenuItem>Skills</StyledMenuItem>
            <StyledMenuItem>Proyects</StyledMenuItem>
            <StyledMenuItem>Contact</StyledMenuItem>
        </Menu>
      </AppBar>
    );
}
