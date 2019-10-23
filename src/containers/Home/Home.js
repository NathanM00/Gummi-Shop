import React from 'react';
import { makeStyles } from '@material-ui/core';
import ReactPlayer from 'react-player'
import Nav from '../../components/Nav/Nav';

function Home(props) {

    const classes = useStyles();

    function handleClick(info) {
        props.history.push('/shop');
    }
    function goHome(info) {
        props.history.push('/');
    }
    return (
        <div className={classes.main}>

            <Nav props={props} onClick={goHome}></Nav>

            <section className={classes.content}>

                <div className={classes.content2}>
                    <ReactPlayer url='https://www.youtube.com/watch?v=zrunNL3xsUY' muted loop  playing width={'90%'} height={'70%'} />  
                </div>

                <div className={classes.content3}>
                    <p className={classes.subtitle}>Explore!!</p>
                    <p className={classes.text}>Embark in the adventure of exploring the worlds of your favorite Disney's characters, from Elsa to Woody.</p>
                    <p className={classes.text}>Create your ship right now!!</p>
                    <button className={classes.button} onClick={handleClick} >Go to Shop</button>
                </div>

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
        backgroundImage: "url('https://i.imgur.com/pvdiOTc.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
    },
    content: {
        display: 'flex',
        width: "100%",
        height: "85%",
        flexBasis: '85%',
        justifyContent: 'center',
        alignItems: 'space-evenly',
        color: 'white',
    },
    content2: {
        height: "100%",
        width: '50%',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexBasis: '100%',
        margin: '0 auto',
    },
    content3:{
        height: "100%",
        width: '50%',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexBasis: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    text: {
        color: 'white',
        fontFamily: "'Roboto', sans-serif",
        width: "70%",
        fontSize: '2em',
        textAlign: 'left',
    },

    subtitle:{
        fontSize: '2em',
        fontFamily: 'menuFont',
        color: '#FF8334',
    },
    button: {
        width: "35%",
        height: "10%",
        borderRadius: '10px',
        border: '1px #FF8334 solid',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: '1em',
        color: 'white',
        margin: '1em',
        fontFamily: 'menuFont',

        '&:hover':{
            backgroundColor: '#FF8334',
        },
    },


}));

export default Home;
