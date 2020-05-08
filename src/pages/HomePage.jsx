import React, { useEffect, useRef } from 'react';
import LatestPostContainer from '../components/post/LatestPostContainer';
import { connect } from 'react-redux';
import { fetchLatestPostStart, fetchNextPost } from '../action/latestPostAction';
import { useInfiniteScroll } from '../customHooks/useInfinateScroll';
import './HomepageStyle.css'

function HomePage({ setLatestPost, getNextPost, isLoadingNext }) {

	let bottomBoundaryRef = useRef(null);
	const dispatch = bottomBoundaryRef.current !== null ? getNextPost : () =>{};

	useEffect(() => {
    setLatestPost()
	}, [setLatestPost]);
	
	useInfiniteScroll(bottomBoundaryRef, dispatch);

	return (
		<>
		<div>
			<LatestPostContainer />
		</div>
		<div id='page-bottom-boundary'className='bottom-boundary' ref={bottomBoundaryRef}>
			{isLoadingNext ? 'Loading....' : ''}
		</div>
		</>
	)
}

const mapStateToProps = (state) => ({
	isLoading: state.post.isFetching,
	isLoadingNext: state.nextPost.isFetchingNext
})
const mapDispatchToProps = (dispatch) => ({
	setLatestPost: () => dispatch(fetchLatestPostStart()),
	getNextPost: () => dispatch(fetchNextPost()) 
}) 
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);