import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

const colour = '#FF6F00';

@observer
class AutoCompleteSearch extends Component {

  getDataSource = () => {
    let filterTags = this.props.state.tags.map((t) => {
      return ('tag: ' + t);
    });
    let filterCategories = this.props.state.categories.map((c) => {
      return ('category: ' + c);
    });
    filterCategories.forEach((e) => filterTags.push(e));
    console.log('data source');
    console.log(filterTags);
    return filterTags;
  };

  handleUpdateInput = (value) => {
    console.log(value);
    if (value === "") {
      // Reset all videos.
      this.props.state.videoMetaData = this.props.state.videoMetaDataTotal;
    }
  };

  filterTag = (chosenRequest) => {
    this.props.state.videoMetaData = this.props.state.videoMetaData.filter((videoMetaData) => {
      console.log(videoMetaData);
      let videoTags = videoMetaData['tags'];
      console.log(videoTags);
      let match = false;
      videoTags.forEach((tag) => {
        if (tag.toLowerCase() === chosenRequest) {
          match = true;
          return;
        }
      });
      return match;
    })
  };

  filterCategory = (chosenRequest) => {
    this.props.state.videoMetaData = this.props.state.videoMetaData.filter((videoMetaData) => {
      console.log(videoMetaData);
      let videoCategories = videoMetaData['category'];
      videoCategories = videoCategories.split('->');
      let match = false;
      videoCategories.forEach((category) => {
        if (category.toLowerCase() === chosenRequest) {
          match = true;
          return;
        }
      });
      return match;
    })
  };


  handleSelectInput = (chosenRequest, index) => {
    // Reset all videos.
    // Filter to query.
    this.props.state.videoMetaData = this.props.state.videoMetaDataTotal;
    let tokens = chosenRequest.split(': ');
    console.log(tokens);
    let searchMethod = tokens[0];
    if (searchMethod == 'tag') {
      this.filterTag(tokens[1]);
    } else {
      this.filterCategory(tokens[1]);
    }
};

  render() {
    return (
      <div>
        <AutoComplete
          floatingLabelStyle={{
            color: colour
          }}
          underlineStyle={{
            borderColor: colour
          }}
          underlineFocusStyle={{
            borderColor: colour
          }}
          onNewRequest={this.handleSelectInput}
          menuStyle={{ position: 'relative', top: '8px', left: 0, }}
          maxSearchResults={13}
          filter={AutoComplete.caseInsensitiveFilter}
          hintText="Search for a tag or category"
          dataSource={this.getDataSource()}
          onUpdateInput={this.handleUpdateInput}
          floatingLabelText="Filter by tag or category"
          fullWidth={true}
        />
      </div>
    );
  }
}

export default AutoCompleteSearch;