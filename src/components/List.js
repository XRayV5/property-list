import React, { Component } from 'react';

const ListItems = (props) => (
                <div className="demo-card-square mdl-card mdl-shadow--2dp" style={{ background: `url(${props.ppt.mainImage}) bottom right 15% no-repeat #46B6AC` }}>
                    <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored action-btn-colored custom-btn" onClick={ props.btnAction }>
                        <i className="material-icons">{props.btnLable}</i>
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
    render() {
        return (
            <div className={this.props.className}>
                <h3>{this.props.saved ? "Saved Properties" : "Properties"}</h3>
                    { 
                        this.props.properties.map((ppt) => <ListItems 
                                                            ppt={ ppt } 
                                                            key={ ppt.id } 
                                                            btnLable={ this.props.saved ? "remove" : "add" }
                                                            btnAction={ this.props.listAction.bind(this, ppt.id) }
                                                            />) 
                    }
            </div>
        )    
    } 
}

export default List;