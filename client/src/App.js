import React, { Component } from 'react';

import {
  Container,
  Navbar,
  NavbarBrand,
  Row,
  Jumbotron,
  InputGroup,
  InputGroupAddon,
  Button,
  FormGroup,
  Input,
  Col
} from 'reactstrap';

import Weather from './Weather';
import {Form} from './Form';

const initialState = {
  newCityName: '',
  newCityNameError:""
  }

class App extends Component {
  constructor(props) {
    super(props);
  
      this.state = {
       weather: null,
       cityList: [],
       newCityName: '',
       newCityNameError:""
    };
  }

  validate = () => {
    let newCityNameError = "" ;
    var regEx = new RegExp("^[a-zA-Z ]*$"); 
    if (this.state.newCityName.includes('@')) {
    newCityNameError = 'Invalid city name, try again';
    }

    if (!this.state.newCityName.match(regEx)) {
      newCityNameError = 'Invalid city name, try again';
      }

  if (newCityNameError) {
  setTimeout(function() { alert("Invalid city name"); }, 10)
    this.setState({initialState});
     
   this.setState({ newCityName: '' });
   return false;
 
  }
    return true;
  };

  getCityList = () => {
    fetch('/api/cities')
    .then(res => res.json())
    .then(res => {
      var cityList = res.map(r => r.city_name);
      this.setState({ cityList });
    });
  };

  handleInputChange = (e) => {
    this.setState({ newCityName: e.target.value });
  
  };

  handleAddCity = () => {
    const isValid = this.validate();
    if(isValid) 
    fetch('/api/cities', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ city: this.state.newCityName })
    })
    .then(res => res.json())
    .then(res => {
      this.getCityList();
      this.setState({ newCityName: '' });
    });  
  };

  getWeather = (city) => {
    fetch(`/api/weather/${city}`)
    .then(res => res.json())
    .then(weather => {
      console.log(weather);
      this.setState({ weather });
    });
  }

  handleChangeCity = (e) => {
    this.getWeather(e.target.value);
  }

  componentDidMount () {
    this.getCityList();
  }

  render() {
    return (
      <Container fluid className="centered">
        <Navbar dark color="dark">
          <NavbarBrand href="/">UBS Weather</NavbarBrand>
        </Navbar>
        <Row>
          <Col>
            <Jumbotron>
              <h1 className="display-3">iWeather</h1>
              <p className="lead">The current weather for your favorite cities!</p>
              <InputGroup>
                <Input 
                  placeholder="New city name..."
                  value={this.state.newCityName}
                  onChange={this.handleInputChange}
                />
               <InputGroupAddon addonType="append">
                  <Button color="primary" onClick={ this.state.newCityName.length > 0  && this.handleAddCity}>Add City</Button>
                </InputGroupAddon>
                 </InputGroup>
                 <div style = {{fontSize: 12, color:"red"}}> {this.state.newCityNameError}
                  </div> 
             </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-5">Current Weather</h1>
            <FormGroup>
              <Input type="select" onChange={this.handleChangeCity}>
                { this.state.cityList.length === 0 && <option>No cities added yet.</option> }
                { this.state.cityList.length > 0 && <option disabled selected readonly >Select a city.</option> }
                { this.state.cityList.map((city, i) => <option key={i}>{city}</option>) }
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Weather data={this.state.weather}/>
      </Container>
    );
  }
}

export default App;




