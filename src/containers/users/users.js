import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Users from '../../components/Users/Users';


function mapStateProps(state) {
    return {
        users: state.users
    }
}


export default withRouter(connect(mapStateProps)(Users));