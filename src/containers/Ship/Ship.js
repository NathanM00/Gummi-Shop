import React from 'react';
import { makeStyles } from '@material-ui/core';
import Nav from '../../components/Nav/Nav';
import CheckOutContainer from '../../components/CheckOutContainer/CheckOutContainer';
import Backg from '../../resources/niIDea.jpg';
import Pad from '../../resources/padIcon.svg';

function Ship(props) {
  
    const classes = useStyles();

    var myStorage = window.localStorage;
    var shipCaract = JSON.parse(myStorage.getItem('shipCaract'));
    var image = myStorage.getItem('image');
    var name = JSON.stringify(myStorage.getItem('name'));

    return (
        <div className={classes.main}>
            <Nav></Nav>
            <section className={classes.content}>
                <img className={classes.savedShip} src={image} alt='Please create your Ship firts'></img>
                <CheckOutContainer  name={name} shipCaract={shipCaract} >

                </CheckOutContainer>
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
    savedShip:{
        width: "50%",
        height: "85%",
        flexBasis: '50%',
        backgroundImage: 'url('+Pad+')',
        backgroundSize: '50%',
        backgroundPosition: '50% 100%',
        backgroundRepeat: 'no-repeat',
    },
    data:{
        width: "30%",
        height: "85%",
        flexBasis: '30%',
    },
    content: {
        display: 'flex',
        width: "100%",
        height: "85%",
        flexBasis: '85%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        color: 'white',
    },
}));
export default Ship;
