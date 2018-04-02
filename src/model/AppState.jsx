import {observable} from 'mobx';

class AppState {
  videoMetaDataTotal = [];

  @observable videoMetaData = [];
  @observable categories = [];
  @observable tags = [];
}
export default AppState;