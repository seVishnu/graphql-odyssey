import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout } from "../components";
import TrackCard from "../containers/track-card";
import QueryResult from "../components/query-result";

const TRACKS = gql`
  query GetTracks {
    tracksforHome {
      title
      id
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`;
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);
  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksforHome?.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
