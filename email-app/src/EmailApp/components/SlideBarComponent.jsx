import React, { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  firstCharacterUpperCase,
  getFolders,
  getPathName,
} from "../../helpers";
import "./HeaderEmailApp.css";

export default function SlideBarComponent() {
  const folders = useMemo(() => getFolders().sort(), []);
  const { pathname } = useLocation();
  const [pathName, setPathName] = useState("");
  useEffect(() => {
    const result = getPathName(pathname);
    setPathName((pre) => (pre = result));
  }, [pathname]);

  return (
    <div>
      <div className="d-flex  flex-column slide-bar_folder">
        {folders.map((el, index) => (
          <button
            key={index}
            className={` ${pathName === el ? "messages-link_active" : ""} `}
          >
            <NavLink to={`/messages/${el}`} className={`messages-link  `}>
              {firstCharacterUpperCase(el)}
            </NavLink>
          </button>
        ))}
      </div>
    </div>
  );
}
