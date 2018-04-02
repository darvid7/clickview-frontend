import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import { renderCategoryTree } from "../utils/Render";

class CustomMenuItem extends React.Component {
  isLeaf = this.props.isLeaf;
  text = this.props.text;
  value = this.props.value;
  toRender = this.props.toRender;
  thingsToRender = this.isLeaf === true;


  getMenuItems = () => {
    if (this.thingsToRender === true) {
      return renderCategoryTree(this.toRender, this.value);
    }
    return [];
  };

  render() {
    let menuItemsRendered = this.getMenuItems();
    console.log('hereere');
    console.log(menuItemsRendered);
    menuItemsRendered.map((e) => {
      return e;
    });

    return (
      <MenuItem
        primaryText={this.text}
        rightIcon={this.thingsToRender ? <ArrowDropRight/>: ''}
        onClick={(e) => {
          console.log('I was clicked');
          console.log(e);
          console.log(this.isLeaf);
          console.log(this.text);
        }}

        menuItems={
          this.thingsToRender ? menuItemsRendered: 'none'
        }
      />
    )
  }
}

export default CustomMenuItem;