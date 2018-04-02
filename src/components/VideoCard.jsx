import {Card, CardTitle, CardText, CardMedia} from 'material-ui/Card';
import React from "react";

class VideoCard extends React.Component {

  render() {
    let duration = 'Duration: ' + Math.round(parseInt(this.props.duration) / 36000) + ' minutes';
    let created = this.props.created.split('T')[0];
    let categories = this.props.categories.split('->');
    categories = categories.join(', ');
    return (
      <Card
        style={{ flex: 1, minWidth: '350px', maxWidth: '350px', position: 'relative', margin: '8px', zDepth: 2}}
      >
        <CardTitle
          title={this.props.title}
          subtitle={duration + ', created: ' + created}
          style={{padding: '8px'}}
          subtitleStyle={{fontSize: '12px'}}
          titleStyle={{fontSize: '14px', lineHeight: '20px'}}
        />
        <CardText
          style={{fontSize: '10px', padding: '8px'}}
        >
          {this.props.description}
          <br/>
          <div>{'Tags: ' + this.props.tags}</div>
          <div>{'Categories: ' + categories}</div>
        </CardText>

        <CardMedia
          style={{padding: '8px', maxWidth: '400px', maxHeight: '400px'}}
        >
          <img src={this.props.thumbnailUrl} alt="error loading image"/>
        </CardMedia>
      </Card>
    )
  }
}

export default VideoCard;
