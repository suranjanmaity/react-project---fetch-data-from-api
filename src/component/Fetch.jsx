import React, {Component} from "react";
export default class Fetch extends Component{
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
        };
    }
    componentDidMount() {
        fetch(
            "https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
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
            p-1 m-1
            bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500
            rounded-md
            flex flex-col justify-center items-center
            ">
                {/* upper div */}
                <div className="
                flex flex-row justify-between
                ">
                    {/* left div */}
                    <div className="
                    ">
                        <h3 className="
                        text-lg text-base text-white
                        ">
                            {item.company.name}
                        </h3>
                        <h3 className="
                        text-sm
                        ">
                            {item.company.catchPhrase}
                        </h3>
                    </div>

                    {/* right div */}
                    <div className="
                    flex flex-col items-end
                    ">
                        <h4 className="
                        text-xs
                        ">
                            {item.phone}
                        </h4>
                        <h4 className="
                        text-xs
                        ">
                            {item.address.city}
                        </h4>
                    </div>
                </div>

                {/* lower div */}
                <div className="
                    flex flex-col items-center
                    ">
                    <h2 className="
                        text-lg
                        ">
                        {item.company.bs}
                    </h2>
                    <h2 className="
                        text-2xl
                        ">
                        {item.name}
                    </h2>
                    <h2 className="
                        text-xl
                        ">
                        {item.email}
                    </h2>
                </div>
            </article>
            )})
        )
    }
}
