import React from 'react';
import ReactDOM from 'react-dom';
import { DropDownList } from '@progress/kendo-react-dropdowns';

class AppComponent extends React.Component {
    personDetails = [
        { name: 'akhil', age: 21, loc: 'hyd'},
        {id:2, name: 'dinesh', age: 23, loc: 'chennai'},
        {id:3, name: 'sanjay', age: 25, loc: 'lbnagar'},
        {id:4, name: 'palani', age: 27, loc: 'madras'},
        {id:5, name: 'vijay', age: 22, loc: 'tnagar'}

    ];
    state = {
        // Since the reference of the initial value is not from the 'sports' collection,
        // 'dataItemKey' have to be set.
        value: { name: "person name" }
    };

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <div>
                <DropDownList
                    data={this.personDetails}
                    textField="name"
                    dataItemKey="id"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <br /> <br />
                <div className="example-config">
                    Selected Value: {JSON.stringify(this.state.value)}
        
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <AppComponent />,
    document.querySelector('my-app')
);

