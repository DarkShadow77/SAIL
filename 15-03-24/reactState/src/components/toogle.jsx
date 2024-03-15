import { Component } from "react";
import Lizzy from "./lizzy";

class Toggle extends Component {

    state = {
        person: [
            { name: "Lizzy1", age: 30 },
            { name: "Lizzy2" },
            { name: "Lizzy3" },
        ],
        tswitch : false,
        textLength: 0,
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
    nameChangeHandler(newName){
        let length = newName.length;
        this.setState({
            person: [
                { name: newName, age: 30 },
                { name: "newName" },
                { name: newName },
            ],
            textLength: length,
        })
   } 
    render() {

        return (
            <>
                <h1>{this.state.textLength}</h1>
                <Lizzy name={this.state.person[0].name} change={()=>this.nameChangeHandler(event.target.value)}/>
                <Lizzy name={this.state.person[1].name} change={()=>this.nameChangeHandler(event.target.value)}/>
                <Lizzy name={this.state.person[2].name} change={()=>this.nameChangeHandler(event.target.value)}/>
                <h4>{this.state.textLength > 20 ? "Too Long" : "Too Short"}</h4>
                <button onClick={() => {
                    this.setState({tswitch : !this.state.tswitch})
                    this.changeName(this.state.tswitch)
                }}> {this.state.tswitch ?"Switch Name" : "Toggle+" }</button>
            </>
        );
    }
}

export default Toggle