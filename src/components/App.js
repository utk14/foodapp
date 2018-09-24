import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './components/header';
import SearchBar from './components/searchbar';
import CardCollect from './components/restaurants'


import 'normalize.css/normalize.css';
import './styles/styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
     value: ""
    }
    // this.fetchdata = this.fetchdata.bind(this);
  }
  componentDidMount() {
    this.fetchdata();
  }

  fetchdata =(evt) => {
    let r;
    if (this.state.value != null && this.state.value != undefined) {
      var query = this.state.value;
      fetch(`https://developers.zomato.com/api/v2.1/search?q=${query}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'user-key': 'cdf947e7e5393e2d048d924ff766f3de',
        }
      })
        .then(res => res.json())
        
        .then((parseJSON) => {
          r = parseJSON.restaurants.map(function (element) {
            var result = {
              res_id: element.restaurant.R.res_id,
              id: element.restaurant.id,
              name: element.restaurant.name,
              address: element.restaurant.location,
              url: element.restaurant.url,
              thumb: element.restaurant.thumb
            }
            return result;
          })

          this.setState({
            result:r
          })

            console.log("*********************************************")
            console.log(r);     
        })
        // .catch(error => console.log('parsing error', error));
    }

    // this.setState({
    //   result:r
    // })

    console.log(this.state.result)
  }
  updateInput(evt){
    this.state={value: evt.target.value};   
      }
      
  render() {
    return (
      <div className="container-fluid">
        <div className="col-sm-12">
          <Nav />
          <br />
          <br />
        </div>
        <div className="col-sm-12">
          <SearchBar fetch={this.fetchdata.bind(this)} getquery={this.updateInput}  />
        </div>
        <CardCollect results={this.state.result} />
      </div>
    );
  }
}
// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// )