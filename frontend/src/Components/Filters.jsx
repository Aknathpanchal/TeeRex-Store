import React from "react";
import { useEffect, useState } from "react";
import { product_filter } from "../Redux/actions";
import { useDispatch } from "react-redux";

function Filters() {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const dispatch = useDispatch();

  const selectCategoryHandler = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setSelectedCategory([...selectedCategory, value]);
    } else {
      setSelectedCategory([...selectedCategory.filter((e) => e != value)]);
    }
  };

  useEffect(() => {
    dispatch(product_filter(selectedCategory));
  }, [selectedCategory]);

  return (
    <div>
      <div className="filterDiv">
        <div>
          <h3>Colour</h3>
          <div>
            <input
              type="checkbox"
              id="cb1"
              name="checkbox-group-name"
              value="Red"
              onChange={selectCategoryHandler}
            />
            <label htmlFor="cb1">Red</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="cb2"
              name="checkbox-group-name"
              value="Blue"
              onChange={selectCategoryHandler}
            />
            <label htmlFor="cb2"> Blue</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="cb3"
              name="checkbox-group-name"
              value="Green"
              onChange={selectCategoryHandler}
            />
            <label htmlFor="cb3">Green</label>
          </div>
        </div>
        <div>
          <h3>Gender</h3>

          <div>
            <input
              type="checkbox"
              id="cb5"
              name="gender"
              value="Men"
              onChange={selectCategoryHandler}
            />
            <label htmlFor="cb5">Men</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="cb6"
              name="gender"
              value="Women"
              onChange={selectCategoryHandler}
            />
            <label htmlFor="cb6">Women</label>
          </div>
        </div>
        <div>
          <h3>Price</h3>
          <div>
            <input type="checkbox" placeholder="Red" />
            <label htmlFor="">0-Rs250</label>
          </div>
          <div>
            <input type="checkbox" placeholder="Blue" />
            <label htmlFor="">Rs250-450</label>
          </div>
          <div>
            <input type="checkbox" placeholder="Green" />
            <label htmlFor="">Rs450</label>
          </div>
        </div>
        <div>
          <h3>Type</h3>
          <div>
            <input
              type="checkbox"
              id="cb8"
              name="type"
              value="Polo"
              onChange={selectCategoryHandler}
            />
            <label htmlFor="cb8">Polo</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="cb9"
              name="type"
              value="Hoodie"
              onChange={selectCategoryHandler}
            />
            <label htmlFor="cb9">Hoodie</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="cb10"
              name="type"
              value="Basic"
              onChange={selectCategoryHandler}
            />
            <label htmlFor="cb10">Basic</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
