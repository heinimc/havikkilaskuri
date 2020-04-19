import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import testdatakasvis from './testdatakasvis';

import Header from './components/Header/Header';
import Raakaaineet from './components/Raakaaineet/Raakaaineet';
import Kasviksethistoria from './components/Kasvikset/Kasviksethistoria';
import Lihajakalahistoria from './components/Lihajakala/Lihajakalahistoria';
import Maitotuotteethistoria from './components/Maitotuotteet/Maitotuotteethistoria';
import Viljathistoria from './components/Viljat/Viljathistoria';
import Lisää from './components/Lisää/Lisää';
import History from './components/History/History';
import Chart from './components/Chart/Chart';
import Menu from './components/Menu/Menu';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:testdatakasvis
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  handleFormSubmit(newdata) {
    let storeddata = this.state.data.slice();
    storeddata.push(newdata);
    storeddata.sort((a,b) => {
      const aDate = new Date(a.päivä);
      const bDate = new Date(b.päivä);
      return bDate.getTime() - aDate.getTime();
    });
    this.setState({
      data:storeddata

    });
  }

  handleDeleteItem (id) {
    let storeddata = this.state.data.slice();
    storeddata = storeddata.filter(item => item.id !== id);
    this.setState({
      data:storeddata

    });
  }

  render() {
  return (
    <Router>
      <div className="App">
         <Header />
           <Route path="/kasvikset" render={() => <Kasviksethistoria data={this.state.data} 
                                                                     onDeleteItem={this.handleDeleteItem}/>}/>
           <Route path="/lihajakala" component={Lihajakalahistoria}/>
           <Route path="/maitotuotteet" component={Maitotuotteethistoria}/>
           <Route path="/viljat" component={Viljathistoria}/>
              <Route path="/" exact component={Raakaaineet}/>
              <Route path="/history" component={History}/>
              <Route path="/chart" component={Chart}/>
                <Route path="/lisää" render= {() => <Lisää onFormSubmit={this.handleFormSubmit}/>} />
      <Menu />
      </div>
    </Router>
  );
}
}



export default App;
