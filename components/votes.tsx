import React from "react";
import styles from "@/styles/sidebar.module.css";
import abbreviateNumber from "./convertnumber";

type Props = {};

export default function Votes({}: Props) {
  const votes = [
    {
      address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
      vote: "Yes",
      power: 1200,
    },
    {
      address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
      vote: "No",
      power: 32,
    },
    {
      address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
      vote: "Yes",
      power: 124,
    },
    {
      address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
      vote: "Yes",
      power: 55,
    },
    {
      address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
      vote: "Yes",
      power: 1,
    },
    {
      address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
      vote: "No",
      power: 3444,
    },
    {
      address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
      vote: "Yes",
      power: 1200,
    },
  ];
  const allVotes = votes.map((votes) => (
    <tr>
      <td className={styles.address}>
        {votes.address.slice(0, 4)}...{votes.address.slice(-4)}
      </td>
      <td className={styles.vote}>{votes.vote}</td>
      <td>{abbreviateNumber(votes.power)}</td>
    </tr>
  ));

  return (
    <div className={styles.content2}>
      <h2>Votes</h2>
      <p>
        <table className={styles.tablei}>{allVotes}</table>
      </p>
    </div>
  );
}
