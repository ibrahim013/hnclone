// infinite scrolling with intersection observer
import { useEffect, useCallback } from 'react';

export const useInfiniteScroll = (scrollRef, dispatch) => {
  const scrollObserver = useCallback(
    node => {
      new IntersectionObserver(entries => {
        entries.forEach(entries => {
          if (entries.intersectionRatio > 0 ) {
            dispatch();
          }
        });
      }).observe(node);
    },
    [dispatch]
  );
  useEffect(() => {
    if (scrollRef.current) {
      scrollObserver(scrollRef.current);
    }
  }, [scrollObserver, scrollRef]);
}