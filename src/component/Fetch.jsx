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
            w-2/5 p-4 m-1
            bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500
            rounded-md
            flex flex-col justify-center items-center
            ">
                {/* upper div */}
                <div className="
                flex flex-row justify-between
                w-full
                ">
                    {/* left div */}
                    <div className="
                    
                    ">
                        <h3 className="
                        text-xl text-white
                        font-semibold font-mono
                        ">
                            {item.company.name}
                        </h3>
                        <h3 className="
                        text-sm
                        font-light
                        ">
                            {item.company.bs}
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
                        text-lg text-white
                        font-bold font-sans italic
                        ">
                        {item.company.catchPhrase}
                    </h2>
                    <h2 className="
                        text-2xl
                        font-serif
                        ">
                        {item.name}
                    </h2>
                    <h2 className="
                        text-base
                        ">
                        {item.email}
                    </h2>
                </div>
            </article>
            )})
        )
    }
}
