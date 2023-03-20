import { useEffect, useState} from "react";
import Fetch from "./Fetch";
function Search() {
    
    const [users, setUsers] = useState([]);
    let [searchUser, setSearchUser] = useState("atmos");
    let [search, setSearch] = useState(0);
    
    let [user, setUser] = useState([]);

  const fetchUsers = () => {
    return fetch("https://api.github.com/users")
          .then((response) => response.json())
          .then((data) => setUsers(data));
  }
  let fetchUser = () => {
    return fetch(`https://api.github.com/users/${searchUser}`)
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchUsers();
  },[]);
  useEffect(() => {
    fetchUser();
    },[search]);

  
  
  const handleSearch = ()=>{
    console.log(searchUser);
    setSearch(search+1);
  };
  const handleSearchUser = (e)=>{
    console.log(e)
    setSearchUser(e.target.value)
  };
  if (search>=1) {
    return(
      <div className="
      w-full
      flex flex-col justify-center items-center">
        <div className="
        w-full
        mb-4
        flex
        gap-1
        ">
          <input list="searchList" type="text" name="search" id="search" placeholder="Search name" className="
          rounded-md
          p-1
          w-full
          " onChange={handleSearchUser}/>
          <datalist id="searchList">
              {
                users.map((value) => {
                  // console.log(value);
                  return <option key={value.id} value={value.login}></option>
                }
                )
              }
              
          </datalist>
          <button className="
          text-white
          border-2 rounded-md
          p-1.5
          " onClick={handleSearch}>Search</button>

        </div>
        <article key={user.id}
          className="
          w-3/5 p-4 m-1
          sm:w-4/5 sm:p-2 m-1 
          md:w-3/5
          lg:w-3/5
          2xl:w-1/4
          bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500
          rounded-md
          flex flex-row justify-evenly items-center
          ">
              <div>
                  <img src={user.avatar_url} alt="_USER_"
                  className="
                  w-1/2
                  " />
                  <h2 className="
                  text-xl text-white font-mono
                  ">{user.name}</h2>
              </div>
              <div className="
              w-4/5
              flex flex-col justify-evenly items-center
              ">
                <h2 className="
                text-xl font-mono
                ">{user.location}</h2>
                <h2 className="
                text-3xl text-white font-mono
                ">{user.login}</h2>
                
                <a href={user.html_url}>Github</a>
              <div className="
                flex flex-row justify-between gap-2
                ">
                  <p>Follower : {user.followers}</p>
                  <p>Following : {user.following}</p>
              </div>
          </div>
        </article>
      </div>
    );
    setSearch(false);
  } else {
    return (
      <div className="
      w-1/2
      mb-4
      flex
      gap-1
      ">
        <input list="searchList" type="text" name="search" id="search" placeholder="Search name" className="
        rounded-md
        p-1
        w-full
        " onChange={handleSearchUser}/>
        <datalist id="searchList">
            {
              users.map((value) => {
                // console.log(value);
                return <option key={value.id} value={value.login}></option>
              }
              )
            }
            
        </datalist>
        <button className="
        text-white
        border-2 rounded-md
        p-1.5
        " onClick={handleSearch}>Search</button>
  
      </div>
    )
  }
  
    
}
export default Search