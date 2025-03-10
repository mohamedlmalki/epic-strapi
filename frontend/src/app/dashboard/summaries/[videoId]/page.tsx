import { getSummaryById } from "@/data/loaders";
import { SummaryCardForm } from "@/components/forms/summary-card-form";

// Define the shape of the params
interface Params {
  videoId: string;
}

// Explicitly type the page component props
export default async function SummaryCardRoute({
  params,
}: {
  params: Promise<Params>;
}) {
  const { videoId } = await params; // Await the Promise to get the actual params
  const data = await getSummaryById(videoId);
  return <SummaryCardForm item={data.data} />;
}
