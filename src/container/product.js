import { connect } from 'react-redux';

import Products from '../components/product';
import { addProduct, deleteProduct, editProduct, adding, close } from '../redux/product_action';

const mapStateToProps = (state) => {
    return {
        product: state.product
    }
}
const mapActionToProps = {
    addProduct,
    deleteProduct,
    editProduct,
    adding,
    close
}
export default connect(mapStateToProps,mapActionToProps)(Products);