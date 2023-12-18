import Link from "next/link";
import { DaskTopMenusMenus } from "./Menus";

const DefaultHeader = () => {
  return (
    <div id="sticky-header" className="consen_nav_manu header____">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="logo">
              <Link legacyBehavior href="/">
                <a className="logo_img" title="optime systems">
                  {/* <img src="assets/images/logo.png" alt="logo" /> */}
                  <h2 className="color-blue">Optime Systems</h2>
                </a>
              </Link>
              <Link legacyBehavior href="/">
                <a className="main_sticky" title="optime systems">
                  {/* <img src="assets/images/logo.png" alt="logo" /> */}
                  <h2 className="color-white">Optime Systems</h2>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-9 pl-0 pr-0">
            <nav className="consen_menu">
              <DaskTopMenusMenus />
              <div className="header-button">
                <Link legacyBehavior href="/contact">
                  <a>Schedule Consultation</a>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DefaultHeader;
