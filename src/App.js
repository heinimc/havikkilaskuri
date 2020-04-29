import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import firebase from './firebase';

import Header from './components/Header/Header';
import Raakaaineet from './components/Raakaaineet/Raakaaineet';
import Kasviksethistoria from './components/Kasvikset/Kasviksethistoria';
import Proteiinithistoria from './components/Proteiinit/Proteiinithistoria';
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
      data:[],
    }
    this.dbRef = firebase.firestore(); //viittaus tietokantaan
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  //Luodaan yhteys tietokantaan, tietojen tallennus ja lataaminen Snapshotin avulla
  //firebase tietokannasta
  //orderBylla tehty järjestys päivän mukaan viimeisin lisäys ylimpänä

  componentDidMount() {
    this.refData = this.dbRef.collection('data'); //tietojen tallennus
    this.refData.orderBy("päivä", "desc").onSnapshot((docs) => { 
      let data = [];
      docs.forEach((doc) => {
        let docdata = doc.data();
        data.push(docdata);
      });
      this.setState({
        data:data
      });
    });
  }

 //lisää datan tietokantaan (firebaseen)
  handleFormSubmit(newdata) {
    this.refData.doc(newdata.id).set(newdata);
  }
  
  handleDeleteItem (id) {
    this.refData.doc(id).delete().then().catch(error => {console.error("Virhe tietoa positettaessa: ",error)});
  }

  render() {
  return (
    <Router>
      <div className="App">
         <Header /> 
         <Route path="/" exact render={() => <Raakaaineet data = {this.state.data} />}/>

         <Route path="/kasvikset" render={() => <Kasviksethistoria data={this.state.data} 
                                                                     onDeleteItem={this.handleDeleteItem}/>}/>
                                                                    
           <Route path="/proteiinit" render ={() => <Proteiinithistoria data={this.state.data}
                                                                        onDeleteItem={this.handleDeleteItem}/>}/>
           <Route path="/maitotuotteet" render={ () => <Maitotuotteethistoria data={this.state.data}
                                                                              onDeleteItem={this.handleDeleteItem}/>}/>

           <Route path="/viljat" render ={() => <Viljathistoria data={this.state.data}
                                                                onDeleteItem={this.handleDeleteItem}/>}/>

          
              <Route path="/history" render ={() => <History data={this.state.data}/>}/>
              <Route path="/chart" render={() => <Chart data = {this.state.data}/>}/>
                <Route path="/lisää" render= {() => <Lisää onFormSubmit={this.handleFormSubmit}/>} />
              
      <Menu />
      </div>
    </Router>





  );
}
}



export default App;
