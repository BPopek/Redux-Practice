import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ComponentA from './ComponentA';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentA);
