import React from 'react'
import '../style.css'

class Form extends React.Component {
  state = {
    name: '',
    quantity: 0
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    // function addArticle provient du parent App.js via les props
    this.props.addArticle(this.state);
    // vider le formulaire
    this.setState({name: '', quantity: 0});
  };

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input className="quantity" type="number" placeholder="quantité"
            value={this.state.quantity} onChange={ event => this.setState({ quantity: event.target.value }) } />

          <input type="text" placeholder="article"
            value={this.state.name} onChange={ event => this.setState({ name: event.target.value }) } />

          <button type="submit" className="btn btn-success">ajouter</button>
        </form>
      </div>
    );
  }
}

export default Form
