import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDataAPI } from '../Redux/actions';

const Product = () => {
  const dispatch = useDispatch();
  const { data, getData } = useSelector((state) => state. data);
console.log("data",data);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getDataAPI());
    }
  }, [dispatch,data]);

  return (
    <div>
      {getData.loading && <div>Loading...</div>}
      {getData.error && <div>Error...</div>}
      {!getData.loading &&
        data.map((el) => (
          <div key={el.id}>{el.id}</div>
        ))}
    </div>
  );
}

export default Product