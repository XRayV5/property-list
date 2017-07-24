import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchProperties, addProperty, unsaveProperty } from '../actions/index'

export const ListItems = (props) => (
                <div className="demo-card-square mdl-card mdl-shadow--2dp" style={{ background: `url(${props.ppt.mainImage})`, backgroundSize: 'cover' }}>
                    <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect action-btn-colored custom-btn" onClick={ props.btnAction }>
                        { props.btnLoading || <i className="material-icons">{props.btnLable}</i> }
                    </button>
                    <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect action-btn-colored detail-btn" onClick={ props.detailAction }>
                        { <i className="material-icons">{props.detailLable}</i> }
                    </button>
                    <div className="mdl-card__title mdl-card--expand">
                        <h3 className="mdl-card__title-text">{ props.ppt.price }</h3>
                    </div>
                    <div className="mdl-card__actions mdl-card--border" style={{ background: props.ppt.agency.brandingColors.primary }}>
                        <img src={props.ppt.agency.logo} alt=""/>
                    </div>
                </div>
            );


class List extends Component {
    constructor(props, context) {
        super(props, context);
    }

    isLoading(id) {
        return this.props.loadings.includes(id)
    }

    directToDetail(id) {
        console.log('id', id)
        this.context.router.push(`/detail/${id}`)
    }

    render() {
        const btnOnLoad = <img src="/source.gif" alt=""/>
        return (
            <div className={this.props.className}>
                <h3>
                    <i className="material-icons list-label">{this.props.saved ? "bookmark" : "list"}</i>
                    <span className='listHeader'>{this.props.saved ? "Saved Properties" : "Result"}</span>
                </h3>
                    { 
                        this.props.properties.map((ppt) => <ListItems 
                                                            ppt={ ppt } 
                                                            key={ ppt.id }
                                                            btnLoading={ this.isLoading(ppt.id) ? btnOnLoad : null } 
                                                            btnLable={ this.props.saved ? "remove" : "add" }
                                                            detailLable="subject"
                                                            detailAction={ this.directToDetail.bind(this, ppt.id) }
                                                            btnAction={ this.props.saved ? this.props.unsaveProperty.bind(this, ppt.id) 
                                                            : this.props.addProperty.bind(this, ppt.id) }
                                                            />)
                    }
            </div>
        )    
    } 
}

List.contextTypes = {
    router: React.PropTypes.object
}

function mapStateToProps({ loadings }) {
  return { loadings }
}

export default connect(mapStateToProps ,{ fetchProperties, addProperty, unsaveProperty })(List);