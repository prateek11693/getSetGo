import React from "react";
import { Link } from "react-router-dom";

const Memories = (props) => {
  const listMemories = ({ memoriesData }) => {
    if (memoriesData)
      return memoriesData.map((item) => {
        const style = {
          background: `url('/images/covers/${item.cover}.JPG')`,
        };
        return (
          <div>
            <Link
              to={`/memories/${item.id}`}
              key={item.id}
              className="memories_item"
              style={style}
            >
              <div>{item.year}</div>
            </Link>
          </div>
        );
      });
  };

  return (
    <div className="memories_list">
      <h4>Memories</h4>
      {listMemories(props)}
    </div>
  );
};
export default Memories;
