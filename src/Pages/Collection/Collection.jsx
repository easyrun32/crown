import React, { useState } from "react";

import SHOP_DATA from "../Shop/Shop_data";

import CollectionItem from "../../Components/CollectionItem/CollectionItem";
import { useParams } from "react-router";

import "./Collection.scss";

const Collection = () => {
  let { id } = useParams();
  const [collection] = useState(SHOP_DATA[id]);
  const { title, items } = collection;

  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
