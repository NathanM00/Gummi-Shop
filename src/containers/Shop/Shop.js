import React from 'react';
import { makeStyles } from '@material-ui/core';
import Nav from '../../components/Nav/Nav';
import Backg from '../../resources/background.jpg';
import ShopContainer from '../../components/ShopContainer/ShopContainer';
import ShipContainer from '../../components/ShipContainer/ShipContainer';

function Shop(props) {

    const classes = useStyles();
    const [cabin, setCabin] = React.useState();
    const [weapons, setWeapons] = React.useState();
    const [wings, setWings] = React.useState();

    function handleSelection(selection) {
        if (selection.type === 'cab') {
            setCabin(selection);
        } else if (selection.type === 'wea') {
            setWeapons(selection);
        } else if (selection.type === 'win') {
            setWings(selection);
        }
    }

    return (
        <div className={classes.main}>

            <Nav></Nav>

            <section className={classes.content}>

                <input type='text' placeholder='SHIP NAME' className={classes.shipName} />

                <section className={classes.notTitle}>

                    <ShopContainer  number={1} onSelection={handleSelection}>

                    </ShopContainer>


                    <ShipContainer  cabin={cabin} wings={wings} weapons={weapons}>

                    </ShipContainer>

                    <ShopContainer  number={2}>

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
        width: '40%',
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
