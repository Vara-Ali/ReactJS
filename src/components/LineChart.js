import { Title } from "chart.js";
import React,{Component} from "react";
import { Bar, Line, Pie } from 'react-chartjs-2';


class LineChart extends Component{

    constructor(props){
        super(props);
        this.state = {
            chartData:{
              labels: ['Boston','Worcestor',
            'Springfield','Lowell','Cambridge','New bedford'],
              datasets: [
                  {
                      label: 'Population',
                      data: [
                          641777,2411789,2471546,1457897,127955,98745
                      ],
                      backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 131, 0.2)'
                      ],
                      borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                  },
                  {
                      label: 'Area',
                      data: [
                        100,104,67,508,900,50
                    ],
                    backgroundColor: 'orange',
                    borderColor: 'red',
                  }
              ]
            }
         }
    }
    

    render(){
        return(
            
            <div className="chart">
                <Line
                    data={this.state.chartData} 
                    height={200}
                    width={400}
                    options={{
                        maintainAspectRatio: false,
                        
                    }}
                />
                
            </div>
        )
    }
}

export default LineChart;