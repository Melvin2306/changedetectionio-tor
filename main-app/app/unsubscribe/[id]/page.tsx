import UnsubscribePageClient from "./client";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <UnsubscribePageClient id={id} />;
}
