import React, { Component } from "react";
import Chart from 'react-google-charts';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './home.css';
 
class Home extends Component {

  constructor(){
    super();
    this.state ={
      dates: []
    };

  }


  componentDidMount(){
    axios.get('https://localhost:44348/gateway/coviddates')
      .then(response => {
        this.setState({
          dates: response.data[0].covidCasesList,
        });
      });
  }

  _getCases(){
   const data = this.state.dates;
   const dateItems = data.map((covid, index) => 
       <div >
      <Card>
         <Card.Title>
           <br></br>
           <h4><u>Date: {covid.date}</u></h4>
         </Card.Title>
         <Card.Body>
         <Chart
            width={'1400px'}
            height={'700px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['Cases', 'Number'],
              ['Imported Cases', covid.covid_imported],
              ['Community Cases', covid.covid_community],
              ['Dormitory Cases', covid.covid_dorm],
              ['Deaths', covid.covid_deaths],
              ['Discharged', covid.covid_discharged],
            ]}
              rootProps={{ 'data-testid': '1' }}
            />
         </Card.Body>
       </Card>

     </div>
     
   );
   return dateItems; 

   
  }

  render() {
    return (
      
      <div className = "covidInfo">
        <h2><u>Today's Covid-19 Cases</u></h2>
          <br></br>
            {this._getCases()}
          
      </div>

      
    );
  }

}
 
export default Home;