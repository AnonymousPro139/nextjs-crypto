import React from "react";

interface Data {
    endpoint: string;
    text: string
}

interface Props {
  color?: string;
  url: string;
  info: string;
  data: Data[];
  onClick: Function;
}

const Dropdown = (props: Props) => {
  const { url, info, data, onClick } = props;
  return (
    <div className="dropdown is-hoverable">
      <div className="dropdown-trigger">
        <button
          className="button is-danger"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
        >
          <span style={{ color: "white" }}>{info}</span>
          <span className="icon is-small">
            <i className="fas fa-home" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {data.map((el: Data, index: number) => (
            <div key={index} onClick={() => onClick(el.endpoint)}>
              <a className="dropdown-item">{el.text}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
