import React from "react";
import "./Tip.css";

const tip = ({ imgUrl, title, content }) => {
  return (
    <article className="tip">
      <aside className="tip__aside">
        <figure className="tip__figure">
          <img src={imgUrl} alt={title} />
        </figure>
      </aside>
      <header className="tip__header">
        <h3 className="tip__title">{title}</h3>
      </header>
      <div className="tip__body">
        <p className="tip__copy">{content}</p>
      </div>
    </article>
  );
};

export default tip;
