import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'

class AboutPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      count: 0,
      show: true
    };
  }

  handleChange = (e) => {
    this.setState({name: e.target.value});
  }

  increaseItem = () => {
    this.setState({count: this.state.count + 1 });
  }
   decreaseItem = () => {
     this.setState({count: this.state.count - 1})
   }
  toggleClick = () => {
    this.setState({show: !this.state.show});
  }

  render() {
    return (
      <div className="aboutpage">
        <Button onClick={this.increaseItem}>Increase</Button>
        <Button onClick={this.decreaseItem}>Decrease</Button>
        <Button onClick={this.toggleClick}>
          {this.state.show ? 'Hide number': 'Show number'}
        </Button>
        {this.state.show ? <h2>{this.state.count}</h2> : <p>Number has hidden</p>}
        <Input style={{height: 40, boderColor: 'gray', borderWidth: 1}}
              onChange={this.handleChange}/>
        <p>{this.state.name}</p>
      </div>
    )
  }

}

export default AboutPage;
