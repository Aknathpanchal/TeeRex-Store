import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filters from "../Components/Filters";
import SearchBar from "../Components/SearchBar";
import { getDataAPI } from "../Redux/actions";
import { ProductPage } from "./ProductPage";

const Home = () => {
  const dispatch = useDispatch();
  const { data, filterData, getData } = useSelector((state) => state.data);
  console.log("STORE DATA", data, filterData);
  const mappingData = filterData.length > 0 ? filterData : data;

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getDataAPI());
    }
  }, [dispatch, data]);

  const handleAddToCart = (elem) => {
    console.log("ADDDDDDDDD", elem.id);
    // setCart([...cart,elem])
  };

  return (
    <div>
      {/* <Navbar/> */}
      <SearchBar />
      <div className="Container">
        <div>
          <Filters />
        </div>

        <div className="products_data">
          {getData.loading && <div>Loading...</div>}
          {getData.error && <div>Error...</div>}
          {!getData.loading &&
            mappingData?.map((elem) => (
              <ProductPage
                elem={elem}
                qty={elem.quantity}
                handleAddToCart={handleAddToCart}
                key={elem.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
