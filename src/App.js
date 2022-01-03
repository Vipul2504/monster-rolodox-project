import { Component } from "react";
import { Cardlist } from "./component/card-list/card-list";
import { SearchBox } from "./component/Search-box/Search-component";
class App extends Component{
  constructor(){
    super();

    this.state = {
      monster : [],
      searchfield : ""
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(users => this.setState({monster : users})) 
  }
  
  HandleChange = (e) => {
    this.setState({searchfield : e.target.value})
  }

  render(){
    const {monster , searchfield} = this.state;
    const filteredMonster = monster.filter(monster => monster.name.toLowerCase().includes(searchfield.toLowerCase()));
    return(
      <div className="App">
        <SearchBox
          placeholder='search monster'
          HandleChange={this.HandleChange}
        />
        <Cardlist monster={filteredMonster}></Cardlist>
      </div>
    )
  }
  
  
}

  


export default App;
