import { Component } from "react";
import Lizzy from "./lizzy";

class Toggle extends Component {

    state = {
        person: [
            { name: "Lizzy1", age: 30 },
            { name: "Lizzy2" },
            { name: "Lizzy3" },
        ],
        tswitch : false
    }

    changeName(tswitch) {

        if (tswitch) {
            this.setState({
                person: [
                    { name: "Elizabeth", age: 30 },
                    { name: "Lizzy2" },
                    { name: "Lizzy3" },
                ]
            })
        } else {
            this.setState({
                person: [
                    { name: "Lizzy1", age: 30 },
                    { name: "Lizzy2" },
                    { name: "Lizzy3" },
                ]
            })
        }
    }
    
    render() {

        return (
            <>
                <Lizzy name={this.state.person[0].name} />
                <Lizzy name={this.state.person[1].name} />
                <Lizzy name={this.state.person[2].name} />

                <button onClick={() => {
                    this.setState({tswitch : !this.state.tswitch})
                    console.log(this.state.tswitch)
                    this.changeName(this.state.tswitch)
                }}> {this.state.tswitch ?"Switch Name" : "Toggle+" }</button>
            </>
        );
    }
}

export default Toggle