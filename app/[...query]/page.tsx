import useCommandParser from "@/hooks/useCommandParser";
import React from "react";

const Page = ({
  params,
}: {
  params: { query: Array<string> };
}): JSX.Element => {
  try {
    const command = useCommandParser(params.query);
    return <>Page: {command}</>;
  } catch (error) {
    //gracefully handle error here
    console.error(JSON.stringify(error));
    return <>Error: {JSON.stringify(error)}</>;
  }
};

export default Page;
