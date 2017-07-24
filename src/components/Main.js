import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchProperties, addProperty, unsaveProperty } from '../actions/index'
import { Frame } from './Frame'
import List from './List'; 

class Main extends Component {
  componentWillMount() {
    this.props.fetchProperties()
  }   
  render() {
    return (
     <Frame>
        <List className='result' properties={ this.props.results } />
        <List className='saved' properties={ this.props.saved } saved/>
     </Frame>
    );
  }
}

function mapStateToProps({properties: { results, saved } }) {
  return { results, saved }
}

export default connect(mapStateToProps, { fetchProperties })(Main);

