import React from "react";

import CollectionItem from "../../Components/CollectionItem/CollectionItem";

import "./Collection.scss";
import { selectCollections } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
const Collection = ({ collections }) => {
  const { title, items } = collections;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collections: selectCollections(ownProps.match.params.id)(state),
});

export default connect(mapStateToProps)(Collection);
