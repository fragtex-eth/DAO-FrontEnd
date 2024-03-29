import Link from "next/link";
import React from "react";
import styles from "@/styles/Navigation.module.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { ConnectButtonCoinsensus } from "./connectbtn";
type Props = {};

export default function Navigation({}: Props) {
  return (
    <>
      <nav className={styles.navbar}>
        <button className={styles.navbtn}>
          COINSEN protocol
          <IconContext.Provider value={{ className: "arrowdownicon" }}>
            <BsPatchCheckFill />
          </IconContext.Provider>
        </button>
        <ConnectButtonCoinsensus />
      </nav>
      <div className={styles.separate}></div>
    </>
  );
}
