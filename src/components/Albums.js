import React from "react";

const Albums = (props) => {
  const showAlbums = ({ memorylist }) => {
    if (memorylist) {
      return memorylist.map((item, index) => {
        return <img key={index} src={`/images/albums/${item.cover}.JPEG`} />;
      });
    }
  };
  return <div className="memory_list">{showAlbums(props)}</div>;
};

export default Albums;
