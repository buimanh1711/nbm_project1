import { connect } from 'react-redux';

import User from '../components/user';
import { openForm, closeForm } from '../redux/login_action';

const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}
const mapActionToProps = {
    openForm,
    closeForm,
}
export default connect(mapStateToProps, mapActionToProps)(User);