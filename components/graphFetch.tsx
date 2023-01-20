import { useQuery, gql } from "@apollo/client";

export const GET_PROPOSAL_STATES = gql`
  {
    proposalStates(first: 15, orderBy: startBlock, orderDirection: desc) {
      id
      proposalId
      description
      startBlock
      isActive
    }
  }
`;
export const GET_PROPOSALS_CREATED = gql`
  {
    proposalCreateds(first: 1, orderBy: startBlock, orderDirection: desc) {
      proposalId
      proposer
      endBlock
      startBlock
      values
      description
      targets
    }
  }
`;

export const GET_VOTE_CAST = gql`
  {
    voteCast {
      proposalId
      reason
      voter
      weight
    }
  }
`;

export default function GraphExample() {
  const { loading, error, data } = useQuery(GET_PROPOSAL_STATES);
  console.log(data);
}
