import logo from "../images/Logo.svg";
import search from "../images/search.svg";
import language from "../images/language.svg";
import profile from "../images/profile.svg";
import cart from "../images/cart.svg";
import nextOrSource from "../tools/nextOrSource";
import ToggleWrapper from "../wrappers/ToggleWrapper";
import useBreakpoints from "../tools/useBreakPoints";
import Divider from "../wrappers/Divider";
import { IconMenu2 } from "@tabler/icons-react";

import styles from "./navbar.module.css";
import { useState } from "react";

const TOP_NAV_OPTIONS = ["SHOP", "SKILLS", "STORIES", "ABOUT", "CONTACT US"];

export default function Navbar() {
  const [toggleOption, setToggleOption] = useState(false);
  const { isMobile } = useBreakpoints();
  const topNavActionButtons = [
    {
      image: nextOrSource(search),
      alt: "search",
    },
    {
      image: nextOrSource(cart),
      alt: "cart",
    },
    {
      image: nextOrSource(profile),
      alt: "profile",
    },
    {
      image: nextOrSource(language),
      alt: "language",
    },
  ];

  return (
    <div className={styles.topNavWrapper}>
      <div className={styles.navbarContainer}>
        <div className={styles.menuButton}>
          {isMobile && (
            <button onClick={() => setToggleOption((prev) => !prev)}>
              <IconMenu2 stroke={2} />
            </button>
          )}
          <img
            className={styles.images}
            src={nextOrSource(logo)}
            alt="companny-logo"
          />
        </div>
        <div className={styles.navHeader}>Logo</div>
        <div className={styles.navActionContainer}>
          {topNavActionButtons.map((item, index) => (
            <button key={index}>
              <img className={styles.images} src={item.image} alt={item.alt} />
            </button>
          ))}
        </div>
      </div>
      <ToggleWrapper
        className={styles.navOptionsContainer}
        showItems={isMobile ? toggleOption : true}
      >
        {TOP_NAV_OPTIONS.map((item, index) => (
          <button key={index} className={styles.navOptions}>
            {item}
          </button>
        ))}
      </ToggleWrapper>
      <Divider />
    </div>
  );
}
