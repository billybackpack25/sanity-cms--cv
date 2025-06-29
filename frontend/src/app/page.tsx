import { fetchCv } from "@/utils/fetchCv";

export default async function Home() {
  const cv = await fetchCv();

  return <div>{JSON.stringify(cv)}</div>;
}
