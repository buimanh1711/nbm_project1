import { connect } from 'react-redux';

import Login from '../components/login';
import { openForm, closeForm, signIn } from '../redux/login_action';

const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}
const mapActionToProps = {
    openForm,
    closeForm,
    signIn
}
export default connect(mapStateToProps, mapActionToProps)(Login);