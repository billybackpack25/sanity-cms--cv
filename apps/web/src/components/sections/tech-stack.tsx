import { Badge } from "@workspace/ui/components/badge";

import type { PagebuilderType } from "@/types";
import { SanityImage } from "../sanity-image";

export type TechStackProps = PagebuilderType<"techStack">;

export function TechStack({ tech }: TechStackProps) {
  if (!tech || tech.length === 0) {
    return null; // Return null if no tech items are provided
  }
  return (
    <section id="features" className="my-6 md:my-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-muted py-16 rounded-3xl px-8">
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-semibold md:text-5xl text-balance">
              Technology Stack
            </h2>
            <div className="text-lg text-muted-foreground">
              <div className="flex flex-wrap gap-3 justify-center mx-auto items-center mt-2">
                {tech?.map(
                  ({ title, icon, _key }) =>
                    !icon && (
                      <Badge key={_key} variant="destructive">
                        <span className="text-sm tracking-wider font-semibold first-letter:uppercase">
                          {title}
                        </span>
                      </Badge>
                    ),
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center mx-auto items-center">
              {tech?.map(
                ({ _key, icon, title }) =>
                  icon &&
                  icon.image && (
                    <span title={icon.authorAttribution ?? title} key={_key}>
                      <SanityImage
                        className="w-20 dark:invert"
                        asset={icon.image}
                        alt={title ?? "logo"}
                        loading="eager"
                        decoding="sync"
                        quality={100}
                      />
                    </span>
                  ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
