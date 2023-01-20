import React, { useState } from "react";
import styles from "@/styles/Discussion.module.css";
import { GET_VOTE_CAST } from "./graphFetch";
import { useQuery } from "@apollo/client";

type Props = {};

export default function Discussion({}: Props) {
  const { loading, error, data } = useQuery(GET_VOTE_CAST);
  const [proposalId, setProposalId] = useState(
    "108126991459394426992428236085723529571472394200392151437941366981754403947842"
  );
  console.log(loading ? "loading" : data.voteCasts[0]);

  const allComments = loading
    ? "loading"
    : data.voteCasts.map((votes: any) =>
        votes.reason == "" || votes.proposalId !== proposalId ? (
          ""
        ) : (
          <div className={styles.comment} key={votes.reason}>
            <h4 className={styles.address}>
              {votes.voter.slice(0, 4)}...
              {votes.voter.slice(-4)}
            </h4>
            <p className={styles.cont}>{votes.reason}</p>
          </div>
        )
      );

  return (
    <div className={styles.content}>
      <h2>Discussion</h2>
      {allComments}
    </div>
  );
}
