import React, { useEffect, useState } from "react";
import styles from "@/styles/sidebar.module.css";
import convertsTime from "./formattime";
import { GET_PROPOSALS_CREATED } from "./graphFetch";
import { useQuery } from "@apollo/client";
import { useBlockNumber } from "wagmi";
import axios from "axios";

export default function Information({}: any) {
  const { loading, error, data } = useQuery(GET_PROPOSALS_CREATED);
  const [count, setCount] = useState(0);
  const [startDate, setStartDate] = useState(0);
  const [endDate, setEndDate] = useState(0);

  loading ? "loading..." : console.log(data.proposalCreateds[0].startBlock);
  let response: any = null;
  let response2: any = null;
  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_ETHERSCANAPI);
    new Promise(async (resolve, reject) => {
      try {
        response = await axios.get(
          `https://api-goerli.etherscan.io/api?module=block&action=getblockreward&blockno=${
            loading ? "loading..." : data.proposalCreateds[0].startBlock
          }&apikey=${process.env.NEXT_PUBLIC_ETHERSCANAPI}`
        );
      } catch (ex) {
        response = null;
        console.log(ex);
        reject(ex);
      }
      if (response) {
        // success
        // setJson(response.data);
        // resolve(json);
        setStartDate(response.data.result.timeStamp);
      }
      try {
        response2 = await axios.get(
          `https://api-goerli.etherscan.io/api?module=block&action=getblockreward&blockno=${
            loading ? "loading..." : data.proposalCreateds[0].endBlock
          }&apikey=${process.env.NEXT_PUBLIC_ETHERSCANAPI}`
        );
      } catch (ex) {
        response = null;
        console.log(ex);
        reject(ex);
      }
      if (response2) {
        // success
        // setJson(response.data);
        // resolve(json);
        setEndDate(response2.data.result.timeStamp);
      }
    });
  }, [loading == true]);

  return (
    <div className={styles.content}>
      <h2>Information</h2>
      <div className={styles.rect}>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td>Voting System</td>
              <td>Choice</td>
            </tr>
            <tr>
              <td>Start Date</td>
              <td>{convertsTime(startDate)}</td>
            </tr>
            <tr>
              <td>End Date</td>
              <td>{convertsTime(endDate)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
