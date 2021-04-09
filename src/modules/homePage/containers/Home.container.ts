import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  fetchPhonesRequest,
  fetchProjectsRequest,
} from '../home.action';

import Home from '../pages/home.component';

const mapStateToProps = (state: any) => ({
  ...state,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
        fetchPhonesRequest,
        fetchProjectsRequest
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(Home);
