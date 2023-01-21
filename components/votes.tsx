import React, { useEffect, useState } from "react";
import styles from "@/styles/sidebar.module.css";
import abbreviateNumber from "./convertnumber";
import { GET_VOTE_CAST, GET_PROPOSALS_CREATED } from "./graphFetch";
import { useQuery } from "@apollo/client";
type Props = {};

export default function Votes({}: Props) {
  const [proposalId, setProposalId] = useState(
    "108126991459394426992428236085723529571472394200392151437941366981754403947842"
  );
  const { loading, error, data } = useQuery(GET_VOTE_CAST);

  const voteMeaning = ["No", "Yes", "Abstain"];

  const allVotes = loading
    ? "loading"
    : data.voteCasts.map((votes: any) =>
        parseInt(votes.weight) === 0 || votes.proposalId !== proposalId ? (
          ""
        ) : (
          <tr key={votes.address + votes.proposalId}>
            <td className={styles.address}>
              {votes.voter.slice(0, 4)}...{votes.voter.slice(-4)}
            </td>
            <td className={styles.vote}>{voteMeaning[votes.support]}</td>
            <td>
              {abbreviateNumber(parseInt(votes.weight) / 1000000000000000000)}
            </td>
          </tr>
        )
      );

  return (
    <div className={styles.content2}>
      <h2>Votes</h2>
      <div className={styles.rect}>
        {loading ? (
          "loading"
        ) : (
          <table className={styles.tablei}>
            <tbody>{allVotes}</tbody>
          </table>
        )}
      </div>
    </div>
  );
}
