import { getSummaryById } from "@/data/loaders";
import { SummaryCardForm } from "@/components/forms/summary-card-form";

// Define the params shape
interface Params {
  videoId: string;
}

// Next.js App Router page props type
interface PageProps {
  params: Promise<Params>; // params is a Promise in async pages
}

export default async function SummaryCardRoute({ params }: PageProps) {
  const resolvedParams = await params; // Await the params Promise
  const { videoId } = resolvedParams;
  const data = await getSummaryById(videoId);
  return <SummaryCardForm item={data.data} />;
}
