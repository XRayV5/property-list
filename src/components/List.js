import React, { Component } from 'react';

const ListItems = (props) => (
                <li className='list-group-item'>
                    <strong>{props.ppt.price}</strong>
                    {/*<span className='pull-xs-right'>{ props.ppt.price }</span>*/}
                    <div className='text-xs-right'>
                         <button className='btn btn-primary' onClick={ props.btnAction }>{ props.btnLable }</button>
                    </div>
                </li>
            );



class List extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div>
                <h3>{this.props.saved ? "Saved Properties" : "Properties"}</h3>
                <ul className='list-group'>
                    { 
                        this.props.properties.map((ppt) => <ListItems 
                                                            ppt={ ppt } 
                                                            key={ ppt.id } 
                                                            btnLable={ this.props.saved ? "Unsave Property" : "Add Property" }
                                                            btnAction={ this.props.listAction.bind(this, ppt.id) }
                                                            />) 
                    }
                </ul>
            </div>
        )    
    } 
}

export default List;


