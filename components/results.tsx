import React, { useState } from "react";
import styles from "@/styles/sidebar.module.css";
import abbreviateNumber from "./convertnumber";
type Props = {};

export default function Results({}: Props) {
  const [allocation, setAllocation] = useState({
    for: 333,
    against: 123,
    abstain: 87,
    target: 123213,
  });

  return (
    <div className={styles.content}>
      <h2>Results</h2>
      <div className={styles.rect}>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.item}>
                <p className={styles.psize}>Yes</p>
                <progress
                  className={styles.progress}
                  id="file"
                  max="1"
                  value={
                    allocation.for /
                    (allocation.against + allocation.abstain + allocation.for)
                  }
                ></progress>
              </td>
            </tr>
            <tr>
              <td className={styles.item}>
                <p className={styles.psize}>No</p>
                <progress
                  className={styles.progress}
                  id="file"
                  max="1"
                  value={
                    allocation.against /
                    (allocation.against + allocation.abstain + allocation.for)
                  }
                ></progress>
              </td>
            </tr>
            <tr>
              <td className={styles.item}>
                <p className={styles.psize}>Obtain</p>
                <progress
                  className={styles.progress}
                  id="file"
                  max="1"
                  value={
                    allocation.abstain /
                    (allocation.against + allocation.abstain + allocation.for)
                  }
                ></progress>
              </td>
            </tr>
            <tr>
              <td>Quorum</td>
              <td>
                {allocation.against + allocation.abstain + allocation.for}/
                {abbreviateNumber(allocation.target)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
