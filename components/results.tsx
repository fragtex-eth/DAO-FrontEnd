import React, { useEffect, useState } from "react";
import styles from "@/styles/sidebar.module.css";
import abbreviateNumber from "./convertnumber";
import GovernorContract from "../utils/GovernaceContract.json";
import { readContracts } from "@wagmi/core";
import { GET_PROPOSALS_CREATED } from "./graphFetch";
import { useQuery } from "@apollo/client";
type Props = {};

export default function Results({}: Props) {
  const [allocation, setAllocation] = useState({
    for: 10,
    against: 10,
    abstain: 10,
    target: 123213,
  });
  const { loading, error, data } = useQuery(GET_PROPOSALS_CREATED);
  const GovernaceContractAddress = "0x8c3a35963C75D17fC02b98e9Fb6dCbB4324a48c6";

  async function getData() {
    const data2 = await readContracts({
      contracts: [
        {
          //@ts-ignore
          address: GovernaceContractAddress,
          abi: GovernorContract.abi,
          functionName: "proposalVotes",
          args: [`${data.proposalCreateds[0].proposalId}`],
        },
      ],
    });

    setAllocation({
      //@ts-ignore
      for: parseInt(data2[0][1]._hex, 16),
      //@ts-ignore
      against: parseInt(data2[0][0]._hex, 16),
      //@ts-ignore
      abstain: parseInt(data2[0][2]._hex, 16),
      target: 12323,
    });
  }

  useEffect(() => {
    if (loading === false && !error) getData();
  }, [loading]);

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
