import Link from "next/link";
import { Fragment, useState } from "react";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [subMenus, setSubMenus] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeBtn = (value) => (value === activeMenu ? "-" : "+"),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" },
    setSub = (value, motherMenu) =>
      motherMenu === activeMenu && value == subMenus
        ? setSubMenus("")
        : setSubMenus(value),
    activeSub = (value) =>
      value === subMenus ? { display: "block" } : { display: "none" };
  return (
    <div className="mobile-menu-area d-sm-block d-md-block d-lg-none header____">
      <div className="mobile-menu mean-container">
        <div className="mean-bar">
          <a
            href="#nav"
            className={`meanmenu-reveal ${toggle ? "meanclose" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              "X"
            ) : (
              <Fragment>
                <span /> <span /> <span />
              </Fragment>
            )}
          </a>
          <nav className="mean-nav">
            <ul
              className="nav_scroll"
              style={{ display: toggle ? "block" : "none" }}
            >
              <li>
                <Link href="/">
                  Home
                </Link>
                {/* <a
                  className="mean-expand"
                  href="#"
                  onClick={() => activeMenuSet("Home")}
                  style={{ fontSize: 18 }}
                >
                  {activeBtn("Home")}
                </a> */}
              </li>
              <li>
                <a href="#">Company </a>
                <ul className="sub-menu" style={activeLi("Company")}>
                  <li>
                    <Link legacyBehavior href="about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="service">
                      Our Service
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
                <a
                  className="mean-expand"
                  href="#"
                  onClick={() => activeMenuSet("Company")}
                  style={{ fontSize: 18 }}
                >
                  {activeBtn("Company")}
                </a>
              </li>
              <li className="mean-last">
                <Link legacyBehavior href="contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mean-push" />
      </div>
    </div>
  );
};
export default MobileMenu;
