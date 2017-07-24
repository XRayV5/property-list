import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Frame } from './Frame'
import { getPropertyDetail } from '../actions/'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Property extends Component {

    componentDidMount() {
        console.log(this.props.params.id)
        this.props.getPropertyDetail(this.props.params.id)
                // <div>Property Detail</div>
                // <div>{this.props.detail.price}</div>
    }

    render() {
        return (
            <Frame>
                <Card className='flex-overridding'>
                    <CardHeader
                    title="URL Avatar"
                    subtitle="Subtitle"
                    avatar="images/jsa-128.jpg"
                    />
                    <CardMedia
                    overlay={<CardTitle title={this.props.price} subtitle="Overlay subtitle" />}
                    >
                        <img src={ this.props.mainImage } alt="" />
                    </CardMedia>
                    <CardTitle title="Card title" subtitle="Card subtitle" />
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                    <CardActions>
                    <FlatButton label="Action1" />
                    <FlatButton label="Action2" />
                    </CardActions>
                </Card>
            </Frame>
        )
    }
}

function mapStateToProps ({ properties: { detail: { price, agenct, id, mainImage } } }) {
    return { price, agenct, id, mainImage }
}

export default connect ( mapStateToProps, { getPropertyDetail } )(Property)