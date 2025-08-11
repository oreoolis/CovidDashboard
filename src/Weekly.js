import React, { Component } from "react";
import Chart from 'react-google-charts';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './home.css';
 
class Weekly extends Component {


  constructor(){
    super();
    this.state ={
      cases: []
    };

    

  }

  componentDidMount(){
    axios.get('https://localhost:44329/gateway/covidcases')
      .then(res => {
        this.setState({
          cases: res.data
        });
      });
  }

  _getCases(){
   const data = this.state.cases;
   const dateItems = data.map((cases) => (
     <div >
       <Card>
         <Card.Title>
         <br></br>
           <h4><u>Date: {cases.date}</u></h4>
         </Card.Title>
         <Card.Body>
         <Chart
            width={'1400px'}
            height={'700px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['Cases', 'Number'],
              ['Imported Cases', cases.covid_imported],
              ['Community Cases', cases.covid_community],
              ['Dormitory Cases', cases.covid_dorm],
              ['Deaths', cases.covid_deaths],
              ['Discharged', cases.covid_discharged],
            ]}
              rootProps={{ 'data-testid': '1' }}
            />
         </Card.Body>
       </Card>
       <br></br>
       
     </div>
   ));
   return dateItems; 

   
  }

  render() {
    return (
      <div className = "covidInfo">
        <h2><u>Weekly Covid-19 Cases</u></h2>
        <br></br>
        {this._getCases()}
       </div>
    );
  }

}
 
export default Weekly;