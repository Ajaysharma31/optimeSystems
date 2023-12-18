import Link from "next/link";

export const DaskTopMenusMenus = () => {
  return (
    <ul className="nav_scroll">
      {" "}
      <li>
        <Link href="/">
          Home{" "}
        </Link>
      </li>{" "}
      <li>
        <a href="#">
          Company{" "}
          <span>
            <i className="fas fa-angle-down" />
          </span>
        </a>
        <ul className="sub-menu">
          {" "}
          <li>
            <Link legacyBehavior href="about">
              About Us
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="service">
              Our Service
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </li>{" "}
      <li>
        <Link legacyBehavior href="contact">
          Contact
        </Link>
      </li>
    </ul>
  );
};
