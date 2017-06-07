import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import * as pageActions from '../../actions/actions';
import Add from '../../components/Add/Add';


function mapStateProps(state) {
    return {
        users: state.users
    }
}

function mapDispatchProps (dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}


export default withRouter(connect(mapStateProps, mapDispatchProps)(Add));