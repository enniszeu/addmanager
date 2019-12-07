import React from 'react';


class TakesList extends React.Component{
    render(){
        return(
            <tbody>
                <tr>
                    <td>1</td>
                    <td>di boi</td>
                    <td>kich hoat</td>
                    <td>
                        <button type="button" className="btn btn-primary">
                        <i className="fas fa-pencil-alt"></i>&nbsp;edit
                        </button>&nbsp;
                        <button type="button" className="btn btn-danger">
                        <i className="far fa-trash-alt"></i>&nbsp;delete
                        </button>
                    </td>
                </tr>
            </tbody>
        )
    }
}
export default TakesList;
