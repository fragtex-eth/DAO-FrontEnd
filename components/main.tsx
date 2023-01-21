import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import Proposal from "./proposal";
import Discussion from "./discussion";
import PropOverview from "./propoverview";
import Logo from "../images/protocollogo.png";
import Image from "next/image";
import Sidebar from "./sidebar";

type Props = {};

export default function Main({}: Props) {
  return (
    <div className={styles.content}>
      <div className={styles.display}>
        <div className={styles.allocationleft}>
          <div className={styles.main}>
            <Image width={400} height={400} src={Logo} alt="Protocol Logo" />
            <Proposal />
          </div>
          <div className={styles.main2}>
            <Discussion />
            <PropOverview />
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
