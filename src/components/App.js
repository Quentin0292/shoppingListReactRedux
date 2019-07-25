import React, { Component } from 'react'

import Form from './Form';
import ItemList from './ItemList';
import { connect } from 'react-redux';

class App extends Component {
  // ajout d'un objet state dont l'unique propriété sera article
  state = {
    articles: []
  };

  // addArticle = article => {
  //   // cette méthode addArticle va ajouter un article à notre tableau articles présent dans le state
  //   // utilisation du spredOperator
  //   // récupération de l'état courant
  //   let oldArticle = this.state.articles;
  //   // créer un id unique pour chaque article
  //   article.id = Date.now();
  //   // ajout du nouvel article, et des tous les anciens dans le nouvel état
  //   let newArticle = [...oldArticle, article];
  //   // met à jour le state
  //   this.setState({ articles: newArticle })
  // };

  render () {
    return (
      <div>
        <h3>Liste de courses</h3>
        <Form addArticle={this.props.addArticle} />
        <ItemList articles={this.props.articles} editArticle={this.props.editArticle} />
      </div>
    );
  }
}; // end class

// création d'un action creator
const addArticleActionCreator = (article) => {
  return {
    type: 'ADD_ARTICLE',
    payload: article
  }
};

const editArticleActionCreator = (article) => {
  return {
    type: 'EDIT_ARTICLE',
    payload: article
  }
};

// grâce à mapStateToProps, l'état de Redux est dispo via les props
const mapStateToProps = (state) => {
  return {
    articles: state.articles
  }
};

// grâce à mapDispatchToProps, ce sont les actiosn qui sont dispo via les props
const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: (article) => {
      dispatch(addArticleActionCreator(article));
    },
    editArticle: (article) => {
      dispatch(editArticleActionCreator(article));
    }
  }
};


// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
