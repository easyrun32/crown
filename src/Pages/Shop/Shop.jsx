import React from "react";

import { Route } from "react-router-dom";

import CollectionOverview from "../../Components/CollectionOverview/CollectionOverview";
import Collection from "../Collection/Collection";

const Shop = () => {
  return (
    <div>
      <Route exact path='/shop' component={CollectionOverview} />
      <Route path='/shop/:id' component={Collection} />
    </div>
  );
};

export default Shop;
