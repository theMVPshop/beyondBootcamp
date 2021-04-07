import React, { useState } from "react";
import "./dashboard.css";

const Keyword = (props) => {
  const [tags, setTags] = useState([]);
  const addTags = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      const addTag = [...tags, event.target.value];
      setTags(addTag);
      props.selectedTags(addTag);
      event.target.value = "";
    }
  };
  const removeTags = (index) => {
    const removeTag = [...tags.filter((tag) => tags.indexOf(tag) !== index)];
    setTags(removeTag);
    props.selectedTags(removeTag);
  };

  return (
    <div className="tags-input">
      <ul id="tags">
        {tags.map((tag, index) => (
          <li key={index} className="tag">
            <span className="tag-title">{tag}</span>
            <span className="tag-close-icon" onClick={() => removeTags(index)}>
              x
            </span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        onKeyUp={(event) => addTags(event)}
        placeholder="Press enter to add tags"
        required
      />
    </div>
  );
};

export default Keyword;
