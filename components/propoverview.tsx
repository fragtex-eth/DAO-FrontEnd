import React from "react";
import styles from "@/styles/Propoverview.module.css";
import { GET_PROPOSAL_STATES } from "./graphFetch";
import { useQuery } from "@apollo/client";

type Props = {};

export default function PropOverview({}: Props) {
  const { loading, error, data } = useQuery(GET_PROPOSAL_STATES);
  console.log();
  const proposals = [
    {
      id: "SIF22",
      status: "Active",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum ante eget amet posuere pharetra a. Nunc purus lacus fermentum porta. Lacinia.",
    },
    {
      id: "SIF23",
      status: "Closed",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum ante eget amet posuere pharetra a. Nunc purus lacus fermentum porta. Lacinia.",
    },
    {
      id: "SIF24",
      status: "Closed",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum ante eget amet posuere pharetra a. Nunc purus lacus fermentum porta. Lacinia.",
    },
    {
      id: "SIF25",
      status: "Closed",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum ante eget amet posuere pharetra a. Nunc purus lacus fermentum porta. Lacinia.",
    },
    {
      id: "SIF26",
      status: "Closed",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum ante eget amet posuere pharetra a. Nunc purus lacus fermentum porta. Lacinia.",
    },
    {
      id: "SIF27",
      status: "Closed",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum ante eget amet posuere pharetra a. Nunc purus lacus fermentum porta. Lacinia.",
    },
  ];

  const singleprops = loading
    ? "loading..."
    : data.proposalStates.map((proposal: any) => (
        <div
          className={styles.singleprop}
          key={loading ? "loading..." : proposal.id}
          style={
            proposal.isActive == true
              ? { border: "0.5px solid #1cf6f7" }
              : { border: "0.5px solid #E94D94" }
          }
        >
          <div className={styles.head}>
            <h4>{loading ? "loading..." : proposal.id.substring(0, 5)}</h4>
            <h4
              style={
                proposal.isActive == true
                  ? { color: "#1CF6F7" }
                  : { color: "#E94D94" }
              }
            >
              {proposal.isActive == true ? "Active" : "Expired"}
            </h4>
          </div>
          <p className={styles.desc}>
            {loading
              ? "loading..."
              : proposal.description.substring(0, 158) + "..."}
          </p>
        </div>
      ));
  return (
    <div className={styles.content}>
      <h2>Proposals</h2>
      <div className="proplist">{singleprops}</div>
    </div>
  );
}
