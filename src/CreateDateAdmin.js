import React, {Component} from 'react';
import DateService from './services/DateService';

class CreateDateAdmin extends Component{

    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            date: '',

        }
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.saveOrUpdateDate = this.saveOrUpdateDate.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            DateService.getDateById(this.state.id).then( (res) =>{
                let coviddates = res.data;
                this.setState({
                    date: coviddates.date,
                    id: coviddates.id
                });
            });
        }        
    }

    saveOrUpdateDate = (e) => {
        e.preventDefault();
        let coviddates = {date: this.state.date};
        let updatedates = {date: this.state.date, id: this.state.id}
        console.log('dates => ' + JSON.stringify(coviddates));

        // step 5
        if(this.state.id === '_add'){

            console.log(coviddates);
            DateService.createDate(coviddates).then(res =>{
                
                this.props.history.push('/admin');
            });

        }else{

            console.log(updatedates);
            console.log(this.state.id);
            DateService.updateDate(this.state.id, updatedates).then( res => {
                this.props.history.push('/admin');
            });
        }
    }
    
    changeDateHandler= (event) => {
        this.setState({date: event.target.value});
    }


    cancel(){
        this.props.history.push('/admin');
    }

    getDate(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Date</h3>
        }else{
            return <h3 className="text-center">Update Date</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <br></br>
                                {
                                    this.getDate()
                                }
                                <h5 className = "text-center"><b><u>Date in this page must match in the cases page.</u></b></h5>
                                <div className = "card-body">
                                    
                                    <form>
                                        <div className = "form-group">
                                            <label> Date: </label>
                                            <input placeholder="Date" name="date" className="form-control" 
                                                value={this.state.date} onChange={this.changeDateHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateDate}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }


}

export default CreateDateAdmin;