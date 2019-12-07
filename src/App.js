import React from 'react';
import TakesAdd from './components/takesadd';
import TakesButton from './components/takesbutton';
import TakesTable from './components/takestable';
import './App.css';

class App extends React.Component{
        constructor(props){
            super(props);

            this.state={
                name:[]
            }
        }

        addTakes(){
            var takes = [
                {
                    id:1,
                    name:"di boi",
                    status:true
                },
                {
                    id:2,
                    name:"di choi",
                    status:false
                },
                {
                    id:3,
                    name:"di an",
                    status:true
                }  
            ]
            
            console.log(takes)
        }

        randomId(){
            return Math.floor(1+Math.random() * 2000000).toString(16).substring();
        }

        idGearn(){
            return this.randomId() + this.randomId();
        }


    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <h1>Quan Ly Cong Viec</h1>
                    </div>
                    <div className="row">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <TakesAdd
                            addTakes={this.addTakes} 
                            />    
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <div className="row">
                                <TakesButton
                                
                                 />
                                
                            </div>
                                <TakesTable />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;
