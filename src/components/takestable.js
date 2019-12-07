import React from 'react';
import TakesList from './takeslist';

class TakesTable extends React.Component{
    render(){
        return(
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Stt</th>
                        <th>nameCv</th>
                        <th>Active</th>
                        <th>Hanh Dong</th>
                    </tr>
                </thead>
                <TakesList />
            </table>
        )
    }
}
export default TakesTable;
