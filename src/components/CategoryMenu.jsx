import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import Divider from 'material-ui/Divider';
import { renderCategoryTree } from '../utils/Render';
import { categoryTree } from "../utils/DataParser";

class CategoryMenu extends React.Component {

  render() {
    return (
      <div>
        <Paper style={{
          display: 'inline-block',
          margin: '16px 32px 16px 0'
        }}>
          <Menu
            desktop={true}
            width={320}
          >
            {renderCategoryTree(categoryTree, "")}
            <Divider/>
          </Menu>
        </Paper>
      </div>
  )};
}

export default CategoryMenu;