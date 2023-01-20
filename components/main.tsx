import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import Proposal from "./proposal";
import Discussion from "./discussion";
import PropOverview from "./propoverview";
import Logo from "../images/protocollogo.png";
import Image from "next/image";
import Sidebar from "./sidebar";
import { useQuery } from "@apollo/client";
import { GET_PROPOSAL_STATES } from "./graphFetch";

type Props = {};

export default function Main({}: Props) {
  const [proposals, setProposals] = useState({});
  const [proposalCreated, setProposalCreated] = useState({});
  const [votes, setVotes] = useState({});
  const { loading, error, data } = useQuery(GET_PROPOSAL_STATES);

  useEffect(() => {
    setProposals(data);
  }, []);

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
