import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ComponentC from './view';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentC);
