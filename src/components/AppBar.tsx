import React, { useState, useEffect, useCallback } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

import Logo from "../assets/images/logo_navigation.svg";
import IcMenu from "../assets/images/ic_menu.svg";
import IcClose from "../assets/images/ic_close.svg";
import Hexagon32 from "../assets/images/ic_hexagon_32px.svg";

import routes from "../routes";
import { observer } from "mobx-react";
import { RouteComponentProps } from "react-router";
import { isMobileWidth } from "../windowWidth";
import utils from "../utils";

export default observer(function AppBar() {
  const [scrollLeft, setScrollLeft] = useState(window.pageXOffset || document.documentElement.scrollLeft);
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onScroll = () => {
    const appBarElement = document.getElementById("appbar");
    if (appBarElement) {
      if ((window.pageYOffset || document.documentElement.scrollTop) === 0) {
        appBarElement.classList.add("top");
      } else {
        appBarElement.classList.remove("top");
      }
    }
    setScrollLeft(window.pageXOffset || document.documentElement.scrollLeft);
  };

  return (
    <nav id="appbar" className="top">
      <MobileMenu />
      <PcNavigator scrollLeft={scrollLeft} />
    </nav>
  );
});

const PcNavigator = function ({ scrollLeft }: { scrollLeft: number }) {
  const [showSubpageNavigator, setShowSubpageNavigator] = useState(false);
  const [lnbNavHoveringGnbPath, setInbNavHoveringGnbPath] = useState<string | null>(null);
  const xPositionStyle = { left: `-${scrollLeft}px` };

  useEffect(() => {
    const onMouseLeaveAppBar = () => {
      if (showSubpageNavigator) {
        setShowSubpageNavigator(false);
      }
    };

    const appBarElement = document.getElementById("appbar");
    if (appBarElement) {
      appBarElement.addEventListener("mouseleave", onMouseLeaveAppBar);
      if (showSubpageNavigator) {
        appBarElement.classList.add("white-bg");
      } else {
        appBarElement.classList.remove("white-bg");
      }
    }
    return () => {
      if (appBarElement) {
        appBarElement.removeEventListener("mouseleave", onMouseLeaveAppBar);
      }
    };
  }, [showSubpageNavigator]);

  useEffect(() => {
    const appBarElement = document.getElementById("appbar");
    return () => {
      if (appBarElement) {
        appBarElement.classList.remove("white-bg");
      }
    };
  }, []);

  const setShowSubpageNavigatorTrue = () => {
    setShowSubpageNavigator(true);
  };

  return (
    <>
      <div className="gnb only-pc container" style={xPositionStyle}>
        <Link to="/" className="logo" onMouseEnter={setShowSubpageNavigatorTrue}>
          <img src={Logo} alt="logo" />
        </Link>
        <ul>
          {routes
            .filter(({ showInNav }) => showInNav)
            .map(({ name, path }, key) => (
              <li key={key}>
                <NavLink className={`nav-item ${lnbNavHoveringGnbPath === path ? "active" : ""}`} to={path} onMouseEnter={setShowSubpageNavigatorTrue}>
                  {name}
                  <div className="underline" />
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
      {showSubpageNavigator && (
        <div className="lnb only-pc">
          <div className="container" style={xPositionStyle}>
            <SubRoutesLinks
              onHoveringGnbChanged={(gnbPath) => {
                setInbNavHoveringGnbPath(gnbPath);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

type SubRoutesLinksPropsType = RouteComponentProps & {
  onHoveringGnbChanged: (path: string | null) => any;
};
const SubRoutesLinks = withRouter(({ location, onHoveringGnbChanged }: SubRoutesLinksPropsType) => {
  return (
    <>
      {routes
        .filter(({ showInNav }) => showInNav)
        .map(({ subRoutes, path: gnbPath, korName }, key) => (
          <div
            className="lnb-item"
            key={key}
            onMouseEnter={() => {
              onHoveringGnbChanged(gnbPath);
            }}
            onMouseLeave={() => {
              onHoveringGnbChanged(null);
            }}
          >
            <p>{korName}</p>
            <ul>
              {subRoutes &&
                subRoutes.map(({ name, hash, path: lnbPath, clearParentPath }, key) => {
                  let path;
                  if (clearParentPath) {
                    return (
                      <li key={key}>
                        <a target="_blank" href={lnbPath}>
                          {name}
                        </a>
                      </li>
                    );
                  } else {
                    path = { pathname: `${gnbPath}${lnbPath || ""}`, hash };
                  }
                  return (
                    <li key={key}>
                      <NavLink
                        isActive={(match, location) => {
                          if (!match) {
                            return false;
                          }
                          return (!hash || hash === location.hash) && location.pathname === `${gnbPath}${lnbPath || ""}`;
                        }}
                        className="nav-item"
                        replace={location.pathname === gnbPath}
                        to={path}
                        dangerouslySetInnerHTML={{ __html: name.replace(/\n/g, "<br/>") }}
                      />
                    </li>
                  );
                })}
            </ul>
          </div>
        ))}
    </>
  );
});

let previousScrollTop: number = 0;
let previousScrollLeft: number = 0;
function MobileMenu() {
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    const appBarElement = document.getElementById("appbar");
    return () => {
      if (appBarElement) {
        appBarElement.classList.remove("white-bg");
      }
    };
  }, []);

  useEffect(() => {
    const appBarElement = document.getElementById("appbar");

    // 메뉴가 열릴때 현재 scrollTop 저장
    if (menuOpened) {
      previousScrollTop = utils.getScrollTop();
      previousScrollLeft = utils.getScrollLeft();
    }
    document.body.style.overflowY = menuOpened ? "hidden" : "auto";
    document.body.style.position = menuOpened ? "fixed" : "static";
    // 메뉴가 닫힐때 이전 scrollTop 복귀
    if (!menuOpened) {
      window.scrollTo(previousScrollLeft, previousScrollTop);
    }

    window.addEventListener("resize", onResize);

    if (appBarElement) {
      if (menuOpened) {
        appBarElement.classList.add("menu-opened");
      } else {
        appBarElement.classList.remove("menu-opened");
      }
    }
    return () => {
      document.documentElement.style.overflowY = "auto";
      window.removeEventListener("resize", onResize);
      if (appBarElement) {
        appBarElement.classList.remove("menu-opened");
      }
    };
  }, [menuOpened]);

  const onResize = useCallback(() => {
    if (!isMobileWidth() && menuOpened) {
      setMenuOpened(false);
    }
  }, [menuOpened]);

  return (
    <div>
      <div className="top only-mobile container">
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" />
        </Link>
        <img
          className="menu-button"
          src={menuOpened ? IcClose : IcMenu}
          alt={menuOpened ? "hamburger-close" : "hamburger-open"}
          onClick={() => {
            setMenuOpened(!menuOpened);
          }}
        />
      </div>
      {menuOpened && (
        <div className="only-mobile menu-items">
          <img src={Hexagon32} alt="hexagon" className="hexagon" />
          <ul>
            {routes
              .filter(({ showInNav }) => showInNav)
              .map(({ name, path }, key) => (
                <li key={key}>
                  <Link
                    className="nav-item"
                    to={path}
                    onClick={() => {
                      setMenuOpened(false);
                    }}
                  >
                    {name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
