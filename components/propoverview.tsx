import React from "react";
import styles from "@/styles/Propoverview.module.css";

type Props = {};

export default function PropOverview({}: Props) {
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

  const singleprops = proposals.map((proposals) => (
    <div
      className={styles.singleprop}
      style={
        proposals.status == "Active"
          ? { border: "0.5px solid #1cf6f7" }
          : { border: "0.5px solid #E94D94" }
      }
    >
      <div className={styles.head}>
        <h4>{proposals.id}</h4>
        <h4
          style={
            proposals.status == "Active"
              ? { color: "#1CF6F7" }
              : { color: "#E94D94" }
          }
        >
          {proposals.status}
        </h4>
      </div>
      <p className={styles.desc}>{proposals.description}</p>
    </div>
  ));
  return (
    <div className={styles.content}>
      <h2>Proposals</h2>
      <div className="proplist">{singleprops}</div>
    </div>
  );
}
