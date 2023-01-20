import React, { useState, useEffect } from "react";
import styles from "@/styles/Proposal.module.css";
import { GET_PROPOSALS_CREATED } from "./graphFetch";
import { useQuery } from "@apollo/client";
import { serializeError } from "eth-rpc-errors";
import GovernorContract from "../utils/GovernaceContract.json";
import { useAccount, useSwitchNetwork } from "wagmi";
import {
  prepareWriteContract,
  writeContract,
  waitForTransaction,
  getNetwork,
} from "@wagmi/core";
import { ToastContainer, toast } from "react-toastify";

type Props = {};
const GovernaceContractAddress = "0x8c3a35963C75D17fC02b98e9Fb6dCbB4324a48c6";

export default function Proposal({}: Props) {
  const [vote, setVote] = useState(2);
  const [transaction, setTransaction] = useState(0);
  const { loading, error, data } = useQuery(GET_PROPOSALS_CREATED);
  const { chain } = getNetwork();
  const chainId = 5; //Binance Smart Chain
  const { switchNetwork } = useSwitchNetwork();
  async function executeVote() {
    if (vote === 2) {
      console.log("error");
      return toast.error("Error: Please enter your voting choice!");
    }
    if (chain !== undefined && chain.id !== chainId) {
      switchNetwork?.(56);
      return;
    }
    try {
      let voteWay = vote;
      const config = await prepareWriteContract({
        //@ts-ignore
        address: GovernaceContractAddress,
        abi: GovernorContract.abi,
        functionName: "castVote",
        args: [`${data.proposalCreateds[0].proposalId}`, vote],
      });
      const transaction = await writeContract(config);
      setTransaction(1);
      await waitForTransaction({
        hash: transaction.hash,
      });
      setTransaction(0);
      toast.success(`Vote executed!`);
      console.log("success");
    } catch (e: any) {
      if (e.message.includes("execution reverted: ")) {
        const serializedError = serializeError(e);
        console.log(e.message);
        toast.error(
          //@ts-ignore
          serializedError.data.originalError.reason.replace(
            /^execution reverted: /,
            ""
          )
        );
      } else {
        toast.error(e.message);
      }
    }
  }

  return (
    <div className={styles.wholesec}>
      <h1>
        Proposal #
        {loading
          ? "loading..."
          : data.proposalCreateds[0].proposalId.substring(0, 5)}
      </h1>
      <p className={styles.rect}>
        {loading ? "loading..." : data.proposalCreateds[0].description}
      </p>
      {/* <div className={styles.section}>
        <div className={styles.point}>
          <h3 className="mainpoint">1</h3>
          <p className="pointdescription">{}</p>
        </div>
        <div className={styles.pointmid}>
          <h3 className="mainpoint"> 2</h3>
          <p className="pointdescription">{}</p>
        </div>
        <div className={styles.point}>
          <h3 className="mainpoint"> 3</h3>
          <p className="pointdescription">{}</p>
        </div>
      </div> */}
      <div className={styles.btnsection}>
        <button
          className={vote == 1 ? styles.select : styles.vote}
          onClick={() => setVote(1)}
        >
          For
        </button>
        <button
          className={styles.submit}
          onClick={() => executeVote()}
          disabled={transaction == 1 ? true : false}
        >
          <div
            className={styles.loader}
            hidden={transaction == 1 ? false : true}
          ></div>
          <p className={styles.makevote}>Vote</p>
        </button>
        <button
          className={vote == 0 ? styles.select : styles.vote}
          onClick={() => setVote(0)}
        >
          Against
        </button>
      </div>
    </div>
  );
}
