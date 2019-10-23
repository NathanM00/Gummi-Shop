import React from 'react';
import { makeStyles } from '@material-ui/core';

var price;

function Cost(props) {

    price = props.price;
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.info}>
                <p className={classes.data}>Cost</p>
                <p className={classes.data}><span>{price}</span>/1000</p>
            </div>
            <div className={classes.bar}>
                <div className={classes.innerBar}>
                </div>
            </div>

        </div>
    );

}

const useStyles = makeStyles(theme => ({

    container: {
        width: '90%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    info: {
        width: '90%',
        height: '50%',
        flexBasis: '50%',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    data:{
        fontSize: '1.3em',
        fontFamily: "'Orbitron', sans-serif;",

        '& span':{
            fontSize: '1.4em',
        },
    },
    bar: {
        width: '90%',
        display: 'flex',
        alignItems: 'center',
        height: '10%',
        flexBasis: '10%',
        backgroundColor: '#003058',
        border: '1px solid #003058',
        borderRadius: '10px',
    },
    innerBar: {
        width: price / 10 + '%',
        height: '100%',
        flexBasis: price / 10 + '%',
        backgroundColor: '#00FFFF',
        borderRadius: '10px',
    },

}));

export default Cost;
