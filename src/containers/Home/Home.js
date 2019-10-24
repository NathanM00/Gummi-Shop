import React from 'react';
import { makeStyles } from '@material-ui/core';
import ReactPlayer from 'react-player'
import Nav from '../../components/Nav/Nav';

function Home(props) {

    const classes = useStyles();

    function handleClick(info) {
        props.history.push('/shop');
    }

    return (
        <div className={classes.main}>

            <Nav></Nav>

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
        fontFamily: "'Orbitron', sans-serif;",
        width: "70%",
        fontSize: '2em',
        textAlign: 'left',
    },

    subtitle:{
        fontSize: '2em',
        fontFamily: 'menuFont',
        color: '#EFB400',
    },
    button: {
        width: "35%",
        height: "10%",
        border:'rgba(0.0.0.0) 2px solid',
        backgroundColor: 'rgba(0,0,0,0)',
        backgroundSize: '50%',
        fontSize: '1em',
        color: '#EFB400',
        margin: '1em',
        paddingRight: '4em',
        paddingLeft: '0em',
        fontFamily: 'menuFont',
        transition: 'all 1s',

        '&:hover': {
            borderTop: '#FFB400 2px solid',
            borderBottom: '#FFB400 2px solid',
            backgroundSize: '100%',
            background: 'linear-gradient(to right, rgba(144,100,23,0.25) 0%, rgba(239,158,1,0.57) 22%, rgba(239,180,0,1) 51%, rgba(239,158,1,0.49) 84%, rgba(144,100,23,0.25) 100%);',
            fontSize: '1em',
            color: 'white',
            paddingLeft: '0em',
            paddingRight: '0em',
            cursor: 'pointer',
        },
    },

}));

export default Home;
