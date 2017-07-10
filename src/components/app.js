import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchProperties, addProperty, unsaveProperty } from '../actions/index'
import List from './List'; 

class App extends Component {
  componentWillMount() {
    this.props.fetchProperties()
  }   
  render() {
    return (
      <div className='main' >
        <div className="left-aside"></div>
        <List className='result' properties={ this.props.results } />
        <List className='saved' properties={ this.props.saved } saved/>
        <div className="right-aside"></div>
      </div>
    );
  }
}

function mapStateToProps({properties: { results, saved } }) {
  return { results, saved }
}

export default connect(mapStateToProps, { fetchProperties })(App);