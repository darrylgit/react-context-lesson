import React, { useContext } from "react";

import CollectionsContext from "../../contexts/collections/collections.context";

import CollectionPreview from "../collection-preview/collection-preview.component";

import "./collections-overview.styles.scss";

const CollectionsOverview = () => {
  const collections = useContext(CollectionsContext);

  const collectionsArray = Object.keys(collections).map(
    key => collections[key]
  );

  return (
    <div className="collections-overview">
      {collectionsArray.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
