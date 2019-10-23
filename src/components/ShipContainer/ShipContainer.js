import React from 'react';
import { makeStyles } from '@material-ui/core';
import Shipnet from '../../resources/shipnet.svg';

var width,height,basis;

function ShipContainer(props) {

    width = props.width;
    height = props.height;
    basis = props.basis;

    const classes = useStyles();
        return(

            <div className={classes.container} >

            </div>

        );

}



const useStyles = makeStyles(theme => ({

    container:{
        display: 'flex',
        width: width,
        height: height,
        flexBasis: basis,
        background: 'url('+Shipnet+')',
        flexDirection:'column',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }

}));
export default ShipContainer;

