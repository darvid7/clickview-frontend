import React from "react";
import VideoCard from './VideoCard';
import {observer} from 'mobx-react';

@observer
class CardCollection extends React.Component {
  render() {
    console.log("rendering");
    return (
      <div style={{
        display:"flex",
        justifyContent:"center",
        width:"100%",
        flexWrap:"wrap",
      }}>
        {this.props.state.videoMetaData.map((videoData, index) => {
          return(
            <VideoCard
              key={index}
              title={videoData['name']}
              created={videoData['dateCreated']}
              description={videoData['description']}
              thumbnailUrl={videoData['thumbnail']}
              duration={videoData['duration']}
              tags={videoData['tags']}
              categories={videoData['category']}
              id={videoData['id']}
            />
          );
        })
        }
      </div>
    )
  }
}

export default CardCollection;
