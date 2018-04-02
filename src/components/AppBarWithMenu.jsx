import React from "react";
import AppBar from 'material-ui/AppBar';
import CatrgoryMenu from './CategoryMenu';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

@observer
class AppBarWithMenu extends React.Component {
  @observable menuOpen = false;

  render() {
    return (
      <div>
        <AppBar
          style={{
            width: "100%",
            backgroundColor: '#FF9800',
          }}
          titleStyle={{
            textAlign: 'center'
          }}
          title={'Video Searcher'}
          zDepth={2}
          showMenuIconButton={false}
          onLeftIconButtonClick={() => {
            // this.menuOpen = !this.menuOpen;
            console.log('menu open: ' + this.menuOpen);
          }}
        />
        {this.menuOpen ? <CatrgoryMenu/> : <div></div>}
      </div>
    )
  }
}

export default AppBarWithMenu;



