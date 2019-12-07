import React from 'react';


class TakesButton extends React.Component{

   

    render(){
        return(
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button type="button" 
                className="btn btn-large btn-primary"
                
                >
                <i className="fas fa-plus"></i>&nbsp;
                Them Cong Viec
                </button>
            </div>
        )
    }
}
export default TakesButton;
