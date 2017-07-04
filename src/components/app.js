import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchProperties, addProperty, unsaveProperty } from '../actions/index'
import List from './List'; 

class App extends Component {
  componentWillMount() {
    console.log('fetch data here')
    this.props.fetchProperties()
  }   
  render() {
    return (
      <div>
        <List properties={ this.props.results } listAction={this.props.addProperty}/>
        <List properties={ this.props.saved } listAction={this.props.unsaveProperty} saved/>
      </div>
    );
  }
}

function mapStateToProps({properties: { results, saved } }) {
  return { results, saved }
}

export default connect(mapStateToProps,{ fetchProperties, addProperty, unsaveProperty })(App);