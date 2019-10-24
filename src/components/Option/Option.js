import React from 'react';
import { makeStyles } from '@material-ui/core';
import bg from '../../resources/unknown.svg';

function Option(props) {

    const classes = useStyles();

    var properties = {
        roll: props.rolling,
        speed: props.speed,
        hp: props.hp,
        price: props.price,
        offe: props.offense,
        power: props.power,
        mobi: props.mobility,
        id: props.id,
        type: props.type,
        color: props.color,
    }

    function handleClick() {
        if (typeof props.onClick === 'function') {
            props.onClick(properties);
        }
    }

    if (properties.id === 'A') {
        return (
            <div className={classes.containerA} onClick={handleClick}>


            </div>
        );
    } if (properties.id === 'B') {
        return (
            <div className={classes.containerB} onClick={handleClick}>


            </div>
        );
    } if (properties.id === 'C') {
        return (
            <div className={classes.containerC} onClick={handleClick}>


            </div>
        );
    } else {
        return (
            <div className={classes.emptyContainer}>


            </div>
        );
    }
}
const useStyles = makeStyles(theme => ({

    emptyContainer: {
        backgroundImage: 'url(' + bg + ')',
        backgroundRepeat: 'none',
        backgroundSize: 'cover',
        height: '25%',
        width: '25%',
        flexBasis: '25%',
        margin: '0 0.5em',
        cursor: 'pointer',

        '&:hover': {


        },
    },
    containerA: {
        backgroundRepeat: 'none',
        backgroundSize: 'cover',
        height: '25%',
        width: '25%',
        flexBasis: '25%',
        margin: '0 0.5em',
        cursor: 'pointer',
        backgroundColor: 'red',
    },
    containerB: {
        backgroundRepeat: 'none',
        backgroundSize: 'cover',
        height: '25%',
        width: '25%',
        flexBasis: '25%',
        margin: '0 0.5em',
        cursor: 'pointer',
        backgroundColor: 'blue',
    },
    containerC: {
        backgroundRepeat: 'none',
        backgroundSize: 'cover',
        height: '25%',
        width: '25%',
        flexBasis: '25%',
        margin: '0 0.5em',
        cursor: 'pointer',
        backgroundColor: 'green',
    },

}));

export default Option;
