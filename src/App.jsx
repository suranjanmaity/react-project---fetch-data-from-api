import React, {Component} from "react";
import Fetch from "./component/Fetch";
export default class App extends Component {
  constructor(props) {
    super(props);

}render(){
  return (<div className="
  flex flex-wrap justify-evenly
  p-4
  bg-black
  ">

    <Fetch></Fetch>
  </div>
    )
}
}
