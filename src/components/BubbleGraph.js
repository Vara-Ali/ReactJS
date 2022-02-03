import { Title } from "chart.js";
import React,{Component} from "react";
import { Bar, Bubble, Line, Pie } from 'react-chartjs-2';


class BubbleChart extends Component{

    constructor(props){
        super(props);
        this.state = {
            chartData:{
              labels: ['Boston','Worcestor',
            'Springfield','Lowell','Cambridge','New bedford'],
              datasets: [
                  {
                      label: 'Population',
                      data: [{
                        x: 20,
                        y: 30,
                        r: 15
                      }, {
                        x: 40,
                        y: 10,
                        r: 10
                      }],
                      backgroundColor: 'rgb(255, 99, 132)',
                    borderWidth: 1
                  },
                  
              ]
            }
         }
    }
    

    render(){
        return(
            
            <div className="chart">
                <Bubble
                    data={this.state.chartData} 
                    height={400}
                    width={400}
                    options={{
                        maintainAspectRatio: false,
                        
                    }}
                />
                
            </div>
        )
    }
}

export default BubbleChart;