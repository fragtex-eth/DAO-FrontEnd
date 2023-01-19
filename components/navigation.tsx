import Link from "next/link";
import React from "react";
import styles from "@/styles/Navigation.module.css";
import { BsArrowDownCircle } from "react-icons/bs";
import { IconContext } from "react-icons";
type Props = {};

export default function Navigation({}: Props) {
  return (
    <>
      <nav className={styles.navbar}>
        <button className={styles.navbtn}>
          Choose protocol
          <IconContext.Provider value={{ className: "arrowdownicon" }}>
            <BsArrowDownCircle />
          </IconContext.Provider>
        </button>
        <button className={styles.connectbtn}>Connect</button>
      </nav>
      <div className={styles.separate}></div>
    </>
  );
}
