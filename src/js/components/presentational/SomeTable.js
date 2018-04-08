import React, { Component }  from "react";
import {render} from "react-dom";
import ReactTable from 'react-table'
import "react-table/react-table.css";


const dataX = [
    {
    name: 'Tanner Linsley',
    age: 26,
    friend: {
        name: 'Jason Maurer',
        age: 23,
    }
},
    {
        name: 'Xi Jinping',
        age: 21,
        friend: {
            name: 'Jason Maurer 2',
            age: 22,
        }
    }
];

const columnsX = [
    {
    Header: 'Name',
    accessor: 'name' // String-based value accessors!
}, {
    Header: 'Age',
    accessor: 'age',
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
}, {
    id: 'friendName', // Required because our accessor is not a string
    Header: 'Friend Name',
    accessor: d => d.friend.name // Custom value accessors!
}, {
    Header: props => <span>Friend Age</span>, // Custom header components!
    accessor: 'friend.age'
}];



class SomeTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : dataX,
            columns: columnsX
        }
    }


    render() {
        return (
            <div>
                <ReactTable
                    data={this.state.data}
                    columns={this.state.columns} />
            </div>
        );
    }
}

//
// const wrapper = document.getElementById("sometable");
// render(<SomeTable/>, wrapper);


export default SomeTable;