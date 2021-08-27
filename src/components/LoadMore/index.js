import React from 'react';
import { Button } from '../../globalStyles';


const LoadMore = ({
  onLoadMoreEvt = () => { },
}) => {
  return (
    <Button onClick={() => onLoadMoreEvt()}>
      Load More
    </Button>
  );
};

export default LoadMore;
