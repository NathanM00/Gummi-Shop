import React from 'react';
import { makeStyles } from '@material-ui/core';
import Shipnet from '../../resources/shipnet.svg';
import p5 from 'p5';

function ShipContainer(props) {
    const classes = useStyles();

    const sketch = React.useRef();
    const canvasParent = React.useRef();

    React.useEffect(() => {
        sketch.current = new p5(p5canvas(canvasParent.current));
    }, []);


    if (props.cabin) {
        sketch.current.createCabin({
            col: props.cabin.color,
            type: props.cabin.id,
        });
    }
    if (props.weapons) {
        sketch.current.createWeapons({
            col: props.weapons.color,
            type: props.weapons.id,
        });
    }
    if (props.wings) {
        //console.log(props.wings);
        sketch.current.createWings({
            col: props.wings.color,
            type: props.wings.id,
        });
    }

    return (
        <div className={classes.container}>
            <section className="App-right" >
                <div ref={canvasParent}></div>
            </section>
        </div>
    );
}

const p5canvas = (domElem) => (application) => {

    var cabin = {
        type: 'x',
    };

    var wings = {
        type: 'x',
    };

    var weapons = {
        type: 'x',
    };


    application.setup = () => {
        var canvas = application.createCanvas(500, 470, application.WEBGL);
        canvas.parent(domElem);
    }

    application.draw = () => {
        application.background(255, 255, 255, 0);
        application.noStroke();
        application.rotateX(-0.5);
        application.ambientLight(200);

        application.pointLight(255, 255, 255, 300, 600, 50);

        if (cabin.type === 'A') {
            application.fill('#CAF4FF');
            application.ellipsoid(cabin.size - 40, cabin.size - 15, cabin.size - 50);
            application.fill(cabin.col);
            application.box(cabin.size, cabin.size, cabin.size);
        } else if (cabin.type === 'B') {
            application.fill('#CAF4FF');
            application.translate(0, -30, 40);
            application.rotateX(0.9);
            application.cone(40, 55, 0, 50);
            application.rotateX(-0.9);
            application.translate(0, 30, -40);
            application.fill(cabin.col);
            application.rotateY(0.77);
            application.box(cabin.size, cabin.size, cabin.size);
            application.rotateY(-0.77);
            application.translate(0, 0, 70);
            application.rotateX(0.9);
            application.fill('#ffffff');
            application.cone(cabin.size - 35, 55, 0, 20);
            application.rotateX(-0.9);
            application.translate(0, 0, -70);

        } else if (cabin.type === 'C') {
            application.fill('#CAF4FF');
            application.ellipsoid(cabin.size - 40);
            application.fill(cabin.col);
            application.translate(-50, 0, 0);
            application.ellipsoid(cabin.size - 60);
            application.translate(100, 0, 0);
            application.ellipsoid(cabin.size - 60);
            application.translate(-50, 0, 0);


        }

        if (wings.type === 'A') {
            application.fill('#444444');
            application.box(270, 10, 50);
        } else if (wings.type === 'B') {
            application.fill('#444444');
            application.rotateZ(1.57);
            application.cylinder(5, 250, 20);
            application.rotateZ(-1.57);
            application.rotateX(application.frameCount * 0.1);
            application.translate(-140, 0, 0);
            application.box(30, 10, 90);
            application.translate(280, 0, 0);
            application.box(30, 10, 90);
            application.translate(-140, 0, 0);
            application.rotateX(application.frameCount * -0.1);
        } else if (wings.type === 'C') {
            application.fill('#444444');
            application.rotateZ(application.frameCount * 0.01);
            application.torus(90, 10);

        }

        if (weapons.type === 'A') {
            application.fill(weapons.col);
            application.translate(-100, 20, 0);
            application.box(20, 20, 60);
            application.fill('#292A2A');
            application.box(10, 10, 90);
            application.fill(weapons.col);
            application.translate(200, 0, 0);
            application.box(20, 20, 60);
            application.fill('#292A2A');
            application.box(10, 10, 90);
        } else if (weapons.type === 'B') {
            application.fill(weapons.col);
            application.translate(-105, 30, 0);
            application.box(40, 40, 60);
            application.fill('#292A2A');
            application.translate(-10, 5, 0);
            application.box(8, 8, 90);
            application.fill('#292A2A');
            application.translate(20, 0, 0);
            application.box(8, 8, 90);
            application.fill('#292A2A');
            application.translate(-10, -15, 0);
            application.box(8, 8, 90);
            application.fill(weapons.col);
            application.translate(210, 15, 0);
            application.box(40, 40, 60);
            application.fill('#292A2A');
            application.translate(9, 5, 0);
            application.box(8, 8, 90);
            application.translate(-19, 0, 0);
            application.box(8, 8, 90);
            application.translate(9, -15, 0);
            application.box(8, 8, 90);
        } else if (weapons.type === 'C') {
            application.fill(weapons.col);
            application.rotateX(-1.5);
            application.translate(-90, 5, 20);
            application.cylinder(15, 70, 40);
            application.rotateX(-3.05);
            application.translate(2, 78, 0);
            application.fill('#8D8D8D');
            application.cone(15, 70);
            application.fill(weapons.col);
            application.translate(180, -78, 0);
            application.rotateX(-0.1);
            application.cylinder(15, 70, 40);
            application.translate(0, 70, 0);
            application.fill('#8D8D8D');
            application.cone(15, 70);


        }

    }

    application.createCabin = (temp) => {
        cabin.y = 150;
        cabin.x = application.width / 2;
        cabin.size = 80;
        cabin.col = temp.col;
        cabin.type = temp.type;
    }

    application.createWings = (temp) => {
        wings.y = 150;
        wings.x = application.width / 2;
        wings.col = temp.col;
        wings.type = temp.type;
    }

    application.createWeapons = (temp) => {
        weapons.y = 150;
        weapons.x = application.width / 2;
        weapons.col = temp.col;
        weapons.type = temp.type;
    }

}


const useStyles = makeStyles(theme => ({

    container: {
        display: 'flex',
        width: '42%',
        height: '90%',
        flexBasis: '42%',
        background: 'url(' + Shipnet + ')',
        flexDirection: 'column',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }

}));
export default ShipContainer;

