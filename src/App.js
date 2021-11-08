// create your App component here
// http://api.open-notify.org/astros.json
import React from 'react'

export default class App extends React.PureComponent {

    state={
        people: []
    }
    // componentDidMount() {
    //     fetch("http://api.open-notify.org/astros.json")
    //       .then((response) => response.json())
    //       .then((data) => {
    //         this.setState({
    //           peopleInSpace: data.people,
    //         });
    //       });
    //   }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(r => r.json())
        .then(({people}) => this.setState({people: people}))
    }

    render(){
        return(
            <div>
                {this.state.people.map((person, craft)=><h1>{person.name} {person.craft}</h1>)}
            </div>
        )
    }
}

