import React from 'react';
import { makeStyles } from '@material-ui/core';


var width, height, basis;

function ShopContainer(props) {

    width = props.width;
    height = props.height;
    basis = props.basis;

    const classes = useStyles();

    if (props.number === 1) {
        return (

            <div className={classes.container} >

                <div className={classes.container2}>

                </div>
            </div>

        );
    } else if (props.number === 2) {
        return (

            <div className={classes.container} >


                <div className={classes.container3} >

                </div>

                <div className={classes.container4} >

                </div>


            </div>


        );
    }


}



const useStyles = makeStyles(theme => ({

    container: {
        display: 'flex',
        width: width,
        height: height,
        flexBasis: basis,
        flexDirection:' column',
        justifyContent: 'space-between',
    },
    container2: {
        backgroundColor: 'rgba(28, 28, 28,0.5)',
        border: '2px solid #00F3FF',
        borderRadius: '10px',
        width: '100%',
        height: '100%',
        flexBasis: '100%',
    },
    container3: {
        backgroundColor: 'rgba(28, 28, 28,0.5)',
        border: '2px solid #00F3FF',
        borderRadius: '10px',
        width: '100%',
        height: '30%',
        flexBasis: '30%',
    },
       container4: {
        backgroundColor: 'rgba(28, 28, 28,0.5)',
        border: '2px solid #00F3FF',
        borderRadius: '10px',
        width: '100%',
        height: '65%',
        flexBasis: '65%',
    }

}));
export default ShopContainer;

