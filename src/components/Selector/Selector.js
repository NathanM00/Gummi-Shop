import React from 'react';
import { makeStyles } from '@material-ui/core';
import Option from '../../components/Option/Option';
import bIcon from '../../resources/bIcon.svg';

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

    function goBack() {
        if (typeof props.onClick === 'function') {
            props.onBack(true);
        }
    }

    function getPiece(newPiece) {
        if (typeof props.onClick === 'function') {
            props.onChange(newPiece);
        }
    }

    if (displayOptions) {
        return (
            <div className={classes.bigContainer} >

                <div className={classes.bigTitles}>
                    <button className={classes.back} onClick={goBack}></button>
                    <p className={classes.bigTitle}>{props.title}</p>
                </div>

                <div className={classes.bigOptions}>
                    <Option color={'#DC2828'} rolling={5} speed={6} hp={8} price={10} offense={10} power={10} mobility={10} id={'A'} onClick={getPiece} type={props.type}></Option>
                    <Option color={'#2869DC'} rolling={15} speed={11} hp={14} price={20} offense={16} power={19} mobility={10} id={'B'} onClick={getPiece}  type={props.type}></Option>
                    <Option color={'#37d67a'} rolling={20} speed={18} hp={20} price={30} offense={25} power={28} mobility={30} id={'C'} onClick={getPiece}  type={props.type}></Option>
                    <Option rolling={'none'} speed={'none'} hp={'none'} price={'none'} offense={'none'} power={'none'} mobility={'none'}></Option>
                    <Option rolling={'none'} speed={'none'} hp={'none'} price={'none'} offense={'none'} power={'none'} mobility={'none'}></Option>
                    <Option rolling={'none'} speed={'none'} hp={'none'} price={'none'} offense={'none'} power={'none'} mobility={'none'}></Option>
                    <Option rolling={'none'} speed={'none'} hp={'none'} price={'none'} offense={'none'} power={'none'} mobility={'none'}></Option>
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
        width: '10%',
        height: '40%',
        flexBasis: '10%',
        margin: '0',
        justifySelf: 'flex-start',
        marginLeft: '2.7em',
        background: 'url(' + bIcon + ')',
        backgroundSize: 'cover',
        border: 'none',
        cursor: 'pointer',

    },
    bigTitle: {
        fontSize: '1.5em',
        textAlign: 'center',
        color: 'white',
        margin: '0',
        marginRight: '4.5em',
        width: '40%',
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
        justifyContent: 'space-between',
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
        fontSize: '1.3em',
        backgroundSize: '50%',
        border:'rgba(0,0,0,0) 2px solid',
        paddingLeft: '0.5em',

        '&:hover': {
            borderTop: '#FFB400 2px solid',
            borderBottom: '#FFB400 2px solid',
            background: 'linear-gradient(to right, rgba(144,100,23,0.25) 0%, rgba(239,158,1,0.57) 22%, rgba(239,180,0,1) 51%, rgba(239,158,1,0.49) 84%, rgba(144,100,23,0.25) 100%);',
            fontSize: '1.3em',
            paddingLeft: '1em',
            cursor: 'pointer',
            backgroundSize: '100%',
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