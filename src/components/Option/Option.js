import React from 'react';
import { makeStyles } from '@material-ui/core';
import bg from '../../resources/unknown.svg';
import ca1Icon from '../../resources/ca1Icon.svg';
import ca2Icon from '../../resources/ca2Icon.svg';
import ca3Icon from '../../resources/ca3Icon.svg';
import win1Icon from '../../resources/win1Icon.svg';
import win2Icon from '../../resources/win2Icon.svg';
import win3Icon from '../../resources/win3Icon.svg';
import wea1Icon from '../../resources/wea1Icon.svg';
import wea2Icon from '../../resources/wea2Icon.svg';
import wea3Icon from '../../resources/wea3Icon.svg';


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

    var backgroundI;

    if(properties.type ==='cab'){

        if(properties.id ==='A'){
            backgroundI = ca1Icon;
        } else if(properties.id ==='B'){
            backgroundI = ca2Icon;
        } else if(properties.id ==='C'){
            backgroundI = ca3Icon;
        }

    }  if(properties.type ==='win'){

        if(properties.id ==='A'){
            backgroundI = win1Icon;
        } else if(properties.id ==='B'){
            backgroundI = win2Icon;
        } else if(properties.id ==='C'){
            backgroundI = win3Icon;
        }

    }  if(properties.type ==='wea'){

        if(properties.id ==='A'){
            backgroundI = wea1Icon;
        } else if(properties.id ==='B'){
            backgroundI = wea2Icon;
        } else if(properties.id ==='C'){
            backgroundI = wea3Icon;
        }

    } 

    

    function handleClick() {
        if (typeof props.onClick === 'function') {
            props.onClick(properties);
        }
    }

    if (!properties.id) {
        return (
            <div className={classes.emptyContainer}>


            </div>
        );
    } else {
        return (
            <div className={classes.container}  style={{  backgroundImage: 'url(' + backgroundI + ')',}} onClick={handleClick}>


            </div>
        );
    }
}
const useStyles = makeStyles(theme => ({

    emptyContainer: {
        backgroundImage: 'url(' + bg + ')',
        backgroundRepeat: 'none',
        backgroundSize: 'cover',
        height: '24%',
        backgroundPosition:'center',
        width: '25%',
        flexBasis: '24%',
        margin: '0 0.5em',
        cursor: 'pointer',

        '&:hover': {


        },
    },
    container: {
        backgroundRepeat: 'none',
        backgroundSize: 'cover',
        height: '24%',
        width: '25%',
        backgroundPosition:'center',
        flexBasis: '24%',
        margin: '0 0.5em',
        cursor: 'pointer',
    },

}));

export default Option;
