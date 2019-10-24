import React from 'react';
import { VictoryChart, VictoryArea, VictoryPolarAxis, VictoryTheme } from 'victory';
import { makeStyles } from '@material-ui/core';

function Radar(props) {

    const [po, setPo] = React.useState(0);
    const classes = useStyles();

    if (po !== props.po) {
        setPo(props.po);
    }

    return (
        <div className={classes.container}>
            <VictoryChart  polar theme={VictoryTheme.material} maxDomain={{ y: 100 }}  >
                <VictoryArea data={[
                    { x: "HP", y: props.hp },
                    { x: "Offense", y: props.off },
                    { x: "Power", y: po },
                    { x: "Mobility", y: props.mob },
                    { x: "Rolling", y: props.rol },
                    { x: "Speed", y: props.spd }
                ]} animate={{
                    duration: 500,
                }} style={{
                    data: { stroke: "#17D5FF", fill: "#0384C5", strokeWidth: 2 }
                }} />
                <VictoryPolarAxis lineComponent labelPlacement="vertical" style={{
                        axis: { stroke: "none" }, labels: { fontSize: 15, fill: "white", fontWeight: 'regular'}
                }} />
            </VictoryChart>
        </div>
    );

}
const useStyles = makeStyles(theme => ({

    container: {
        paddingLeft: '2em',
            fill: 'white',
    },


}));

export default Radar;





