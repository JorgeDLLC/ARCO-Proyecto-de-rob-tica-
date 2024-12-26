import React from "react";
import "./RightSidebar.css";
interface RightSidebarProps {
  titles: { id: string; text: string }[];
}

const RightSidebar: React.FC<RightSidebarProps> = ({ titles }) => {
  return (
    <div className="right-sidebar">
      <h4>En esta pagina</h4>
      <ul>
        {titles.map((title, index) => (
          <div className="boxr">
            <li className="titulos" key={index}>
              <a href={`#${title.id}`}>{title.text}</a>
            </li>{" "}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RightSidebar;
