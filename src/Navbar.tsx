import React, { useState, useRef, useEffect } from "react";
import { links, social } from "./data";

const Navbar: React.FC = () => {
  const [showLinks, setShowLinks] = useState<boolean>(false);
  const linksContainerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current?.getBoundingClientRect().height || 0;
    if (showLinks && linksContainerRef.current) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else if (linksContainerRef.current) {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src="" className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            ...
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link: any) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon: any) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
