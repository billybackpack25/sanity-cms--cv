// /app/[section]/page.tsx - e.g. /projects, /experience, etc.
import { fetchCv } from "@/utils/fetchCv";
import { ThemeFactory } from "@/components/themes/ThemeFactory";
import { notFound } from "next/navigation";

export default async function SectionPage({
  params,
}: {
  params: { section: string };
}) {
  const cv = await fetchCv();
  const section = params.section;

  if (!cv[section]) return notFound();

  // Dynamically import the correct section component based on theme and section
  // Or use a mapping object
  const SectionComponent = getSectionComponent(cv.theme, section);

  return (
    <ThemeFactory theme={cv.theme}>
      <SectionComponent data={cv[section]} />
    </ThemeFactory>
  );
}
