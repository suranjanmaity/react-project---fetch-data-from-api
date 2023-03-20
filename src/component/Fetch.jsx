import React, {Component} from "react";
export default class Fetch extends Component{
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            item:{}
        };
    }
    componentDidMount(props) {
        fetch(
        "https://api.github.com/users")
        .then((res) => res.json())
        .then((users) => {
            this.setState({
                items: users,
            });
        })
        
    }
    render(){
            const {items}=this.state;
        return (
            items.map((item)=>{
            return(
            <article key={item.id}
            className="
            w-2/5 p-4 m-1
            sm:w-4/5 sm:p-2 m-1 
            md:w-2/5
            lg:w-2/5
            2xl:w-1/4
            bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500
            rounded-md
            flex flex-row justify-evenly items-center
            ">
                <div>
                    <img src={item.avatar_url} alt="_USER_"
                    className="
                    w-1/2
                    " />
                </div>
                <div className="
                flex flex-col justify-evenly items-center
                ">
                    <h1 className="
                    text-3xl text-white font-mono
                    ">{item.login}</h1>
                    <a href={item.html_url}>Github</a>
                </div>
            </article>
            )})
        )
    }
}
