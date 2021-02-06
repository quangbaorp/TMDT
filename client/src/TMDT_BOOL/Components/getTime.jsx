import React , {useState , useEffect} from 'react'
import socketIOClient from "socket.io-client";

import { Chart } from "react-google-charts";



const ENDPOINT = "http://localhost:8000";
const GetTime = () => {
    const [time , setTime] = useState(0)
    const [data , setData] = useState([])
    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.on("Time", data => {
            setTime(data.time);
            setData(data.data)
            console.log(data.time);
        });
      }, []);
    return(
        <Chart
            width={'100%'}
            height={'100vh'}
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={data}
            options={{
                chartArea: {
                  width: '50%',
                  height: '50%',
                },
                colors: ['#8e0152', '#276419'],
                pointSize: 10,
                animation: {
                  duration: 1000,
                  easing: 'out',
                  startup: true,
                },
                vAxis: {
                  viewWindow: {
                    max: -10,
                    min: 100,
                  },
                },
                hAxis: {
                  viewWindow: {
                    max: 100,
                    min: -10,
                  },
                },
                legend: { position: 'none' },
                enableInteractivity: false,
              }}
              chartEvents={[
                {
                  eventName: 'animationfinish',
                  callback: () => {
                    console.log('Animation Finished')
                  },
                },
              ]}
            // For tests
            rootProps={{ 'data-testid': '2' }}
        />
    )
}
export default React.memo(GetTime)