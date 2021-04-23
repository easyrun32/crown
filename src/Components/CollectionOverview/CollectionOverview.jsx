import React, { useState } from "react";

import "./CollectionOverview.scss";
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import SHOP_DATA from "../../Pages/Shop/Shop_data";
const CollectionOverview = () => {
  const [collections] = useState(SHOP_DATA);
  return (
    <div>
      {Object.values(collections).map(({ id, title, items }) => (
        <CollectionPreview key={id} title={title} items={items} />
      ))}
    </div>
  );
};

export default CollectionOverview;
