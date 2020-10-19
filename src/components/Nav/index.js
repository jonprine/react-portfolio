import React from "react";

function Nav(props) {
    const tabs = ['about', 'portfolio', 'contact'];
  return (
    <ul className="nav">
        {tabs.map(tab => (
            <li className="nav-item" key={tab}>
                <a href={'#' + tab.toLowerCase()}
                onClick={() => props.handlePageChange(tab)}
                className={
                    props.currentPage === tab ? 'nav-link active' : 'nav-link'
                }
                >
                    {tab}
                </a>
            </li>

        ))}
            </ul>


  );
}

export default Nav;
