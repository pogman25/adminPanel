import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import * as pageActions from '../../actions/actions';
import Update from '../../components/Update/Update';


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


export default withRouter(connect(mapStateProps, mapDispatchProps)(Update));