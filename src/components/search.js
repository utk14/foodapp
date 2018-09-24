import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          result: []
        }
        this.fetchdata = this.fetchdata.bind(this);
      this.updateInput = this.updateInput.bind(this);
      }
      componentDidMount(){
        this.fetchdata();
      }
      
      fetchdata(evt){
          if(this.state.value!= null && this.state.value!= undefined)
          {
              var query = this.state.value.trim();
        fetch(`https://developers.zomato.com/api/v2.1/search?q=${query}`,{
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'user-key': 'cdf947e7e5393e2d048d924ff766f3de',
          }
        })
        .then(res => res.json())
        .then(parseJSON => {
          this.setState({
            result: console.log( parseJSON),
          })
        })
        .catch(error => console.log('parsing error',error));
    }
      }
      updateInput(evt){
        this.state={value: evt.target.value};   
          }
    render(){
        return(
            <div className="Search">
                <input onChange={this.updateInput} placeholder={'search..'}></input>
                <button onClick = {this.fetchdata} >Search</button>
            </div>  
              );
    }
}
export default SearchBar;