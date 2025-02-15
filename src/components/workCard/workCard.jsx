import React from "react";
import "./workCard.css";

export default function workCard(props) {
  return (
    <div>
      <div className="work_card">
        <div className="work_card_upper">
          <div className="work_card_title">
            <div className="work_card_title_item">
              <i className="icon far fa-folder-open"></i>
            </div>
            <div className="work_card_title_item">
              <p>{props.name}</p>
            </div>
          </div>
        </div>
        <div className="work_card_lower">
          <div className="description">{props.desc}</div>
          <div className="tag_row">
            {props.tags.map((el) => {
              return <div className="tag">{el}</div>;
            })}
          </div>
          <div className="action_row">
            <div className="action_row_item _1">
              <p onClick={_=> window.open(props.source)}>
                <i className="fas fa-expand-alt"></i>
              </p>
            </div>
            <div className="action_row_item _2">
              <p onClick={_=> window.open(props.demo)}>
                <i className="fas fa-expand"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
