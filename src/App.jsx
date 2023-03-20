import React, {Component} from "react";
import Fetch from "./component/Fetch";
import Search from "./component/Search";
export default class App extends Component {
  constructor(props) {
    super(props);

}render(){
  return (<div className="
  flex flex-col justify-evenly items-center
  p-4
  bg-black
  ">
    <Search></Search>
    <span className="
    text-white block
    ">Popular users</span>

    <div className="
    flex flex-wrap justify-evenly
    ">
    <Fetch></Fetch>
    </div>
  </div>
    )
}
}
