import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from "react-router-dom";
import logo from '../../resources/logo.svg';
import bag from '../../resources/bag.svg';
import mickey from '../../resources/mickey.svg';

function Nav(props) {

    const classes = useStyles();

    return (

        <nav className={classes.nav} >
            <Link to='/' className={classes.link}>
                <img className={classes.logo} src={logo} alt={''} />
                <p className={classes.title}>GUMMISHOP</p>
            </Link>
            <div className={classes.buttons}>
                <img className={classes.img} src={bag} alt={''}></img>
                <img className={classes.img} src={mickey} alt={''}></img>
            </div>
        </nav>
    );

}

const useStyles = makeStyles(theme => ({
    nav: {
        display: 'flex',
        width: "100%",
        height: "15%",
        flexBasis: '15%',
        backgroundColor: "rgba(0,0,0,0.8)",
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    link: {
        display: 'flex',
        width: "30%",
        height: "100%",
        flexBasis: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttons:{
        height: "100%",
        width: "15%",
        flexBasis: '15%',
        display: 'flex',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    logo: {
        width: "15%",
        height: "100%",
        flexBasis: '15%',
        margin: '1em',
    },
    img: {
        width: "30%",
        height: "30%",
        flexBasis: '30%',

        '&:hover':{
            cursor: 'pointer',
        },
    },
    title: {
        color: 'white',
        fontFamily: 'menuFont',
        fontSize: '2em',
    },
}));

export default Nav;

