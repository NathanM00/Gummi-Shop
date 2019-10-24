import React from 'react';
import { makeStyles } from '@material-ui/core';

function CheckOutContainer(props) {

    const classes = useStyles();

    return (
        <div className={classes.container} >

            <h1 className={classes.shipName}>{props.name}</h1>
            <h2 className={classes.subtitle}>Ship Information</h2>
            <section className={classes.section}>
                <p className={classes.p}><strong>Power:</strong> {props.shipCaract.po}</p>
                <p className={classes.p}><strong>Speed:</strong> {props.shipCaract.spd}</p>
                <p className={classes.p}><strong>Hp:</strong> {props.shipCaract.hp}</p>
                <p className={classes.p}><strong>Mobility:</strong> {props.shipCaract.mob}</p>
                <p className={classes.p}><strong>Rolling:</strong> {props.shipCaract.rol}</p>
                <p className={classes.p}><strong>Price:</strong> {props.shipCaract.price}</p>

            </section>

            <h2 className={classes.subtitle}>Payment Methods</h2>
            <section className={classes.section}>

                <button className={classes.button}>GummiCredits</button>
                <button className={classes.button}>PayPal</button>

            </section>

        </div>

    );

}

const useStyles = makeStyles(theme => ({

    container: {
        display: 'flex',
        width: '35%',
        height: '90%',
        flexBasis: '35%',
        flexDirection: ' column',
        justifyContent: 'space-between',
        background: 'rgba(0,0,0,0.7)',
        border: '2px solid #FFB400',
        borderRadius: '10px',
        alignItems: 'space-evenly',
    },
    section: {
        width: '100%',
        height: '35%',
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '35%',
        alignItems: 'center',
        textAlign: 'left',
        justifyContent: 'space-evenly',

    },
    button: {
        width: '80%',
        height: '35%',
        flexBasis: '35%',
        borderRadius: '10px',
        border: '#FFB400 1px solid',
        color: 'white',
        fontSize: '2em',
        background: 'black',

        '&:hover': {
            cursor: 'pointer',
            color: 'black',
            background: '#FFB400',
        }
    },
    p: {
        color: '#ffffff',
        fontSize: '1.5em',
        margin: 0,
    },
    subtitle: {
        fontSize: '1.5em',
        fontFamily: "'Orbitron', sans-serif;",
        color: '#FFB400',
        marginLeft: '1em',
        textAlign: 'left',

    },
    shipName: {
        fontSize: '3em',
        fontFamily: 'menuFont',
        margin: '0',
        textAlign: 'center',
        border: 'none',
        color: 'white',
    },


}));

export default CheckOutContainer;
