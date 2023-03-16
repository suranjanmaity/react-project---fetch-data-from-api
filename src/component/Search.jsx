import React, {Component} from "react";
export default class Search extends Component{
    constructor(props){
        super(props);
        this.state ={
            data:[]
        }
    }
    render(){
        return <div className="
        w-1/2
        mb-4
        ">
            <input list="searchList" type="text" name="search" id="search" placeholder="Search name" className="
            rounded-md
            p-1
            w-full
            "/>
            <datalist id="searchList">
                {this.state.data.map((user) =>
                <option key={user.id} value={user.name}></option>
                )}
            </datalist>
        </div>
    }
    componentDidMount(){
        fetch(
            "https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    data: json
                });
            })
    }
}