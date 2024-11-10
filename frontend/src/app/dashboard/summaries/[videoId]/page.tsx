interface ParamsProps {
  params: {
    videoId: string;
  };
}

export default async function SummaryCardRoute({
  params,
}: Readonly<ParamsProps>) {
  const { videoId } = params;
  return <p>ID: {videoId}</p>;
}