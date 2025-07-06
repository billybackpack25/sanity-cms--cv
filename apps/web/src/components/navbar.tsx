import { sanityFetch } from "@/lib/sanity/live";
import { queryGlobalSeoSettings, queryNavbarData } from "@/lib/sanity/query";
import type {
  QueryGlobalSeoSettingsResult,
  QueryNavbarDataResult,
} from "@/lib/sanity/sanity.types";

import { NavbarClient, NavbarSkeletonResponsive } from "./navbar-client";
import Link from "next/link";

export async function NavbarServer() {
  const [navbarData, settingsData] = await Promise.all([
    sanityFetch({ query: queryNavbarData }),
    sanityFetch({ query: queryGlobalSeoSettings }),
  ]);
  return (
    <Navbar navbarData={navbarData.data} settingsData={settingsData.data} />
  );
}

export function Navbar({
  navbarData,
  settingsData,
}: {
  navbarData: QueryNavbarDataResult;
  settingsData: QueryGlobalSeoSettingsResult;
}) {
  const { siteTitle: settingsSiteTitle, logo } = settingsData ?? {};
  return (
    <header className="py-3 md:border-b">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-[auto_1fr] items-center gap-4">
          {/* {logo && <Logo alt={settingsSiteTitle} priority image={logo} />} */}
          <Link href="/" className="inline-block select-none">
            <span className="text-2xl font-bold tracking-tight text-primary">
              Bilal Hasson
            </span>
          </Link>
          <NavbarClient navbarData={navbarData} settingsData={settingsData} />
        </div>
      </div>
    </header>
  );
}

export function NavbarSkeleton() {
  return (
    <header className="h-[75px] py-4 md:border-b">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-[auto_1fr] items-center gap-4">
          <div className="h-[40px] w-[170px] rounded animate-pulse bg-muted" />
          <NavbarSkeletonResponsive />
        </div>
      </div>
    </header>
  );
}
