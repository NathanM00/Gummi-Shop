import React from 'react';
import { makeStyles } from '@material-ui/core';

var price = 0;

function Cost(props) {

    const classes = useStyles();

    const [price, setPrice] = React.useState(0);

    if (price !== props.price) {
        setPrice(props.price);
        console.log(price);
    }

    return (
        <div className={classes.container}>
            <div className={classes.info}>
                <p className={classes.data}>Cost</p>
                <p className={classes.data}><span>{price}</span>/100</p>
            </div>
            <div className={classes.bar}>
                <div className={classes.innerBar} style={{ width: price + "%", flexBasis: price + "%" }}>
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
    data: {
        fontSize: '1.3em',
        fontFamily: "'Orbitron', sans-serif;",

        '& span': {
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
        height: '100%',
        backgroundColor: '#00FFFF',
        borderRadius: '10px',
        transition: 'all 1.5s',
    },

}));

export default Cost;
