import React from 'react';
import { makeStyles } from '@material-ui/core';
import Nav from '../../components/Nav/Nav';
import Backg from '../../resources/background.jpg';
import ShopContainer from '../../components/ShopContainer/ShopContainer';
import ShipContainer from '../../components/ShipContainer/ShipContainer';

function Shop(props) {

    const classes = useStyles();

    return (
        <div className={classes.main}>

            <Nav></Nav>

            <section className={classes.content}>

                <input type='text' placeholder='SHIP NAME' className={classes.shipName} />

                <section className={classes.notTitle}>

                    <ShopContainer width='25%' height='90%' basis='25%' number={1}>

                    </ShopContainer>


                    <ShipContainer width='42%' height='100%' basis='42%' >

                    </ShipContainer>

                    <ShopContainer width='25%' height='90%' basis='25%'  number={2}>

                    </ShopContainer>

                </section>


            </section>
        </div>

    );



}

const useStyles = makeStyles(theme => ({
    main: {
        display: 'flex',
        width: "100%",
        height: "800px",
        flexDirection: "column",
        backgroundImage: "url(" + Backg + ")",
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
    },
    shipName: {
        fontSize: '2em',
        fontFamily: 'menuFont',
        margin: '0',
        backgroundColor: 'rgba(28, 28, 28,0)',
        textAlign: 'center',
        border: 'none',
        color: 'white',
    },
    content: {
        display: 'flex',
        width: "100%",
        height: "85%",
        flexBasis: '85%',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        color: 'white',
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        height: "90%",
        width: '25%',
        backgroundColor: 'blue',
    },
    notTitle: {
        display: 'flex',
        width: "100%",
        height: "80%",
        flexBasis: '80%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        color: 'white',
    },


}));

export default Shop;
