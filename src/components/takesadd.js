import React from 'react';



class TakesAdd extends React.Component{

     addTakes(){
        this.props.addTakes();
    }


    render(){
        return(
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">
                    <span>Them Cong Viec</span>
                    <button type="button" className="btn btn-danger mr-4">
                    <i className="fas fa-times"></i>
                    </button>
                    </h3>
                </div>
                <div className="panel-body">
                    <input type="tel" 
                    name="name" id="input" className="form-control" placeholder="name" />
                    <br></br>
                    <select name="" id="input" className="form-control">
                        <option value={true}>kich hoat</option>
                        <option value={false}>an</option>
                    </select>
                    <br></br>
                    <button type="button" 
                    className="btn btn-primary"
                    onClick={()=> {this.addTakes()}}
                    >
                    <i className="fas fa-check"></i>&nbsp;Luu Lai
                    </button>&nbsp;
                    <button type="button" className="btn btn-danger">Huy Bo</button>
                </div>
            </div>
        )
    }
}
export default TakesAdd;
