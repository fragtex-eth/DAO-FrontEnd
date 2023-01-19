import React from "react";
import styles from "@/styles/sidebar.module.css";
import convertsTime from "./formattime";

type Props = {};

export default function Information({}: Props) {
  const information = [
    {
      system: "Choice",
      startdate: 1693139757,
      enddate: 1694139757,
    },
  ];

  return (
    <div className={styles.content}>
      <h2>Information</h2>
      <p className={styles.rect}>
        <table className={styles.table}>
          <tr>
            <td>Voting System</td>
            <td>{information[0].system}</td>
          </tr>
          <tr>
            <td>Start Date</td>
            <td>{convertsTime(information[0].startdate)}</td>
          </tr>
          <tr>
            <td>End Date</td>
            <td>{convertsTime(information[0].enddate)}</td>
          </tr>
        </table>
      </p>
    </div>
  );
}
