import React from 'react';
import { withRouter } from 'react-router';
import Button from '../buttons';
import { v4 as uuidv4 } from 'uuid'; 
import './Lomake.css';

class Lomake extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        data: {
          raakaaine: "kasvikset",
          päivä: "",
          grammat: "",
          eurot: ""
        }
      };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleCancel=this.handleCancel.bind(this);
      
    }

    // Kontrolloidun lomakkeen muutosfunktio, jota kutsutaan kun kenttään tapahtuu muutos. funktio selvittää mihin kenttään
    // muutos tapahtui, selvittää sen arvon ja nimen ja päivittää State-muuttujan sillä nimellä, joka sille on määritelty//

    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        data: {
          ...this.state.data,
        [name]: value
        }
      });
    }


   //Peruutusfunktio eli kun painaa peruuta-nappia, palauttaa käyttäjän takaisin edelliselle sivulle

    handleCancel(event) {
      event.preventDefault();
      this.props.history.goBack();
    }

    //Lomakkeenkäsittelyfunktio.

    handleSubmit(event) {
      event.preventDefault();//Estetään oletustapahtuma, ei lataa sivua uudelleen
      let data = Object.assign({}, this.state.data); //data muutetaan "hyväksyttävään" muotoon
      data.grammat = parseFloat(data.grammat);//käsitellään datamuuttujassa halutut arvot desimaalimuotoon
      data.eurot = parseFloat(data.eurot);
      data.id = uuidv4(); //luo uudelle tietueelle id-numeron
      this.props.onFormSubmit(data);
      this.props.history.push("/"); //palauttaa käyttäjän "lisää-napin" painalluksen jälkeen sovelluken etusivulle
    }


  render() {
    return(
        <form onSubmit={this.handleSubmit}>
        <div className="itemform">
          <div className="itemform__row">
            <div>
            <label htmlFor="name">Raaka-aine</label>
            <select name="raakaaine" value={this.state.data.raakaaine} onChange={this.handleInputChange}>
              <option value="kasvikset">Kasvikset</option>
              <option value="maitotuotteet">Maitotuotteet</option>
              <option value="proteiinit">Proteiinit</option>
              <option value="viljat">Viljat</option>
            </select>
          </div>
          </div>

          <div className="itemform__row">
            <div>
              <label htmlFor="name">Päivä</label>
              <input type="date" name="päivä" value={this.state.data.päivä} onChange={this.handleInputChange}/>
            </div>
          </div>

          <div className="itemform__row">
            <div>
              <label htmlFor="name">Grammat</label>
              <input type="number" name="grammat" step="5.0" value={this.state.data.grammat} onChange={this.handleInputChange}/>
            </div>
            <div>
              <label htmlFor="name">Eurot</label>
              <input type="number" name="eurot" step="0.1" value={this.state.data.eurot} onChange={this.handleInputChange}/>
            </div>
          </div>

          <div className="itemform__row">
            <div>
              <Button onClick={this.handleCancel}>PERUUTA</Button>
            </div>
            <div>
              <Button type="submit" primary>LISÄÄ</Button>
            </div>
            </div>

        </div>
        </form>
  
    );  
    };
  }

export default withRouter(Lomake);