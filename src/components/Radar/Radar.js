import React from 'react';
import { makeStyles } from '@material-ui/core';
import { VictoryChart, VictoryArea, VictoryPolarAxis, VictoryTheme } from 'victory';

function Radar(props) {

    return (
        <div>
            <VictoryChart polar theme={VictoryTheme.material}    >
                <VictoryArea data={[
                    { x: "HP", y: props.hp },
                    { x: "Offense", y: props.of },
                    { x: "Power", y: props.po },
                    { x: "Mobility", y: props.mob },
                    { x: "Rolling", y: props.rol },
                    { x: "Speed", y: props.spd }
                ]} animate={{
                    duration: 500,
                }} />
                <VictoryPolarAxis />
            </VictoryChart>
        </div>
    );

}

export default Radar;





