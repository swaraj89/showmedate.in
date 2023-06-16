const Page = ({ params }: { params: { slug: string } }): JSX.Element => {
  console.log(params.slug);
  return <>Page: {params.slug}</>;
};

export default Page;
