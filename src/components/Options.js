import React from "react";

function Options() {
  return (
    <div className="options">
      <div className="wrapper">
        <div className="optionsContainer">
          <div className="paragraphs">
            <p>Paragraphs:</p>
            <input type="text" />
          </div>
          <div className="tag">
            <p>Tags:</p>
            <select>
              <option value="p">&lt;p&gt;</option>
              <option value="h1">&lt;h1&gt;</option>
              <option value="h2">&lt;h2&gt;</option>
              <option value="h3">&lt;h3&gt;</option>
              <option value="h4">&lt;h4&gt;</option>
              <option value="h5">&lt;h5&gt;</option>
              <option value="h6">&lt;h6&gt;</option>
              <option value="span">&lt;span&gt;</option>
            </select>
          </div>
          <div className="include">
            <p>Includes HTML:</p>
            <select>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        <div className="copy">
          <p>Copy to clipboard</p>
        </div>
      </div>
    </div>
  );
}

export default Options;
