import React from 'react';
import { VictoryChart, VictoryArea, VictoryPolarAxis, VictoryTheme } from 'victory';

function Radar(props) {

    const [po, setPo] = React.useState(0);

    if(po !== props.po){
        setPo(props.po);
    }

    return (
        <div>
            <VictoryChart polar theme={VictoryTheme.material}  maxDomain={{ y: 100 }}  >
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
                    labels: {  fontSize: 15, fill: "#0384C5" },
                    data: { stroke: "#17D5FF", fill: "#0384C5" ,strokeWidth: 2}
                  }} />
                <VictoryPolarAxis />
            </VictoryChart>
        </div>
    );

}

export default Radar;





