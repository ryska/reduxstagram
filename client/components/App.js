import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';


function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

// takes our Main component and its going to add all of the
//props & data & actionCreators from state to props
//  mapStateToProps takes the state, which is our posts and comments
// mapStateToProps our actionscontrollers. it going to surface those data in the functions via props


export default App;
