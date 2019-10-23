import React from 'react';
import { makeStyles } from '@material-ui/core';
import Option from '../../components/Option/Option';

var displayBar;
var displayOptions;

function Selector(props) {

    const classes = useStyles();
    displayBar = props.displayBar;
    displayOptions = props.displayOptions;

    function handleClick() {
        if (typeof props.onClick === 'function') {
            props.onClick(props.type);
        }
    }

    if (displayOptions) {
        return (
            <div className={classes.bigContainer} >

                <div className={classes.bigTitles}>
                    <button className={classes.back}></button>
                    <p className={classes.bigTitle}>{props.title}</p>
                </div>

                <div className={classes.bigOptions}>
                    <Option></Option>
                    <Option></Option>
                    <Option></Option>
                    <Option></Option>
                    <Option></Option>
                    <Option></Option>
                    <Option></Option>
                </div>


            </div>
        );
    } else {
        return (
            <div className={classes.container} style={{ display: displayBar }} onClick={handleClick}>

                <img src={props.img} alt='' className={classes.img}></img>
                <p className={classes.title}>{props.title}</p>

            </div>
        );
    }



}

const useStyles = makeStyles(theme => ({

    bigContainer: {
        width: '100%',
        height: '100%',
        flexBasis: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'rgba(0,0,0,0.5)',
        border: '2px solid #00F3FF',
        transition: 'all 0.5s',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: '10px',
    },
    back: {
        width: '20%',
        height: '20%',
        flexBasis: '20%',
        justifySelf: 'flex-start',
    },
    bigTitle: {
        fontSize: '1.5em',
        textAlign: 'center',
        color: 'white',
        margin: '0',
        width: '30%',
        flexBasis: '30%',
        fontFamily: "'Orbitron', sans-serif;",
    },
    bigImg: {
        height: '40%',
        margin: '0',
    },
    bigTitles: {
        width: '100%',
        height: '15%',
        flexBasis: '15%',
        marginTop: '0.5em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    bigOptions: {
        width: '100%',
        height: '75%',
        flexBasis: '75%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    container: {
        width: '100%',
        height: '15%',
        flexBasis: '15%',
        display: 'flex',
        flexDirection: 'row',
        transition: 'all 0.5s',
        marginTop: '1em',
        alignItems: 'center',
        borderTop: 'rgba(0,0,0,0) 2px solid',
        borderBottom: 'rgba(0,0,0,0) 2px solid',
        paddingLeft: '0.5em',

        '&:hover': {
            borderTop: '#FFB400 2px solid',
            borderBottom: '#FFB400 2px solid',
            background: ' linear-gradient(to right, rgba(144,100,23,0.95) 0%, rgba(239,158,1,0.95) 20%, rgba(255,180,0,0.95) 49%, rgba(239,158,1,0.95) 82%, rgba(144,100,23,0.95) 100%);',
            fontSize: '1.3em',
            paddingLeft: '1em',
        },

    },

    title: {
        fontSize: '1.2em',
        textAlign: 'center',
        color: 'white',
        margin: '0',
        fontFamily: "'Orbitron', sans-serif;",
    },
    img: {
        height: '40%',
        margin: '0 1em',
    }
}));
export default Selector;