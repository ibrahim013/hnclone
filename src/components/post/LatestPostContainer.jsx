import { connect } from 'react-redux';
import { compose } from 'redux';
import WithSpinner from '../spinner/WithSpinnerComponent';
import LatestPost from './LatestPost';

 
const mapStateToProps = (state) => ({
  isLoading: state.post.isFetching
})


const LatestPostContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(LatestPost)

export default LatestPostContainer;