import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const SubHeading = (props) => (
    <p>Powered by React</p>
);

class App extends Component {
    state = {
        title: 'Hello, World!'
    }

    count = 1;

    componentDidMount() {
        setInterval(() => {

            let {title} = this.state;
            
            if(this.count%5===0) {
                if(title==='Hello, World!') {
                    title = 'React is Awesome!';
                }
                else {
                    title='Hello, World!'
                }
            }

            this.setState({ title }, 
                ()=>console.log('Updated the heading', this.count++, 'times'));
        }, 1000);
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <SubHeading />
            </div>
        );
    }
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
