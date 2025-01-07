import styles from "./divider.module.css";
import React from "react";
import {clsx} from "clsx"


export default function Divider({ className }) {
  return React.createElement(
    "div",
    {
      className: clsx(styles.root, styles.isHorizontal, className),
      role: "separator",
    },
    null
  );
}
