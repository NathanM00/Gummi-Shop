import React from 'react';
import { makeStyles } from '@material-ui/core';
import bg from '../../resources/unknown.svg';

function Option(props) {

    const classes = useStyles();

    return (
        <div className={classes.container}>


        </div>


    );

}
const useStyles = makeStyles(theme => ({

    container: {
        backgroundImage: 'url(' +bg+')',
        backgroundRepeat: 'none',
        backgroundSize: 'cover',
        height: '25%',
        width: '25%',
        flexBasis: '25%',
        margin: '0 0.5em',
    },

}));

export default Option;
