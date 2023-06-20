import useCommandParser from "@/hooks/useCommandParser";
import React from "react";

const Page = ({
  params,
}: {
  params: { query: Array<string> };
}): JSX.Element => {
  try {
    const command = useCommandParser(params.query);
    return <>Page: {params.query}</>;
  } catch (error) {
    //gracefully handle error here
    console.error(error);
    return <>{error}</>;
  }
};

export default Page;
