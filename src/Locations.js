import React, { Component } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './home.css';
 
class Weekly extends Component {


  constructor(){
    super();
    this.state ={
      loc: []
    };

    

  }

  componentDidMount(){
    axios.get('https://localhost:44328/gateway/covidlocations')
      .then(res => {
        this.setState({
        loc: res.data
        });
      });
  }

  _getCases(){
   const data = this.state.loc;
   const locItems = data.map((loc) => (
     <div >
       <br></br>
       <Card>
         <Card.Title>

         </Card.Title>
         <Card.Body>
            <h3>Location: <b><u>{loc.location}</u></b></h3>
            <h4><u>Date: {loc.date}</u></h4>
            
         </Card.Body>
       </Card>
      
          
       
     </div>
   ));
   return locItems; 

   
  }

  render() {
    return (
      <div className = "covidInfo">
            <br></br>
           <h2><u>Be careful where you have been!</u></h2>
           <br></br>
        {this._getCases()}
       </div>
    );
  }

}
 
export default Weekly;