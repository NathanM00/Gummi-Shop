import React from 'react';
import { makeStyles } from '@material-ui/core';
import Selector from '../../components/Selector/Selector';
import mIcon from '../../resources/mIcon.svg';
import wIcon from '../../resources/wIcon.svg';
import cIcon from '../../resources/cabinIcon.svg';
import Radar from '../../components/Radar/Radar';
import Cost from '../../components/ Cost/Cost';


function ShopContainer(props) {

    const [displayCab, setDisplayCab] = React.useState('flex');
    const [cabOptions, setCabOptions] = React.useState(false);
    const [movOptions, setMovOptions] = React.useState(false);
    const [waeOptions, setWeaOptions] = React.useState(false);
    const [displayMov, setDisplayMov] = React.useState('flex');
    const [displayWea, setDisplayWea] = React.useState('flex');

    const classes = useStyles();

    function handleSelector(type) {
        if (type === 'cab') {
            setDisplayMov('none');
            setDisplayWea('none');
            setCabOptions(true);
        } else if (type === 'wea') {
            setDisplayMov('none');
            setDisplayCab('none');
            setWeaOptions(true);
        } else if (type === 'win') {
            setDisplayWea('none');
            setDisplayCab('none');
            setMovOptions(true);
        }
    }

    function handleBack(value) {
        if (value) {
            setDisplayWea('flex');
            setDisplayMov('flex');
            setDisplayCab('flex');
            setMovOptions(false);
            setWeaOptions(false);
            setCabOptions(false);
        }

    }

    function handleCabin(piece) {
        handleShip(piece)
    }

    function handleWing(piece) {
        handleShip(piece)
    }

    function handleWeapon(piece) {
        handleShip(piece)
    }

    function handleShip(piece) {

        if (typeof props.onSelection === 'function') {
            props.onSelection(piece);
        }

    }

    if (props.number === 1) {
        return (

            <div className={classes.container} >

                <div className={classes.container2}>

                    <Selector title='Cabin Gummies' onChange={handleCabin} onClick={handleSelector} onBack={handleBack} displayBar={displayCab} displayOptions={cabOptions} img={cIcon} type={'cab'}></Selector>

                    <Selector title='Movement Gummies' onChange={handleWing} onClick={handleSelector} onBack={handleBack} displayBar={displayMov} displayOptions={movOptions} img={mIcon} type={'win'}></Selector>

                    <Selector title='Weapon Gummies' onChange={handleWeapon} onClick={handleSelector} onBack={handleBack} displayBar={displayWea} displayOptions={waeOptions} img={wIcon} type={'wea'}></Selector>

                </div>
            </div>

        );
    } else if (props.number === 2) {
        return (

            <div className={classes.container} >


                <div className={classes.container3} >

                    <Cost price={300}></Cost>

                </div>

                <div className={classes.container4} >

                    <Radar spd={20} po={25} hp={10} of={40} mob={10} rol={20}></Radar>

                </div>


            </div>
        );
    }
}



const useStyles = makeStyles(theme => ({

    container: {
        display: 'flex',
        width: '25%',
        height: '90%',
        flexBasis: '25%',
        flexDirection: ' column',
        justifyContent: 'space-between',
    },
    container2: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        flexBasis: '100%',
    },
    container3: {
        background: 'rgba(0,0,0,0.5)',
        border: '2px solid #00F3FF',
        borderRadius: '10px',
        width: '100%',
        height: '20%',
        flexBasis: '20%',
        display: 'flex',
        justifyContent: 'center'
    },
    container4: {
        background: 'rgba(0,0,0,0.5)',
        border: '2px solid #00F3FF',
        borderRadius: '10px',
        width: '100%',
        height: '75%',
        flexBasis: '75%',
        display: 'flex',
        justifyContent: 'center'
    }

}));
export default ShopContainer;

