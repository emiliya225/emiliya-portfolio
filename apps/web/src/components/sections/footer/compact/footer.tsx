import React from "react";
import { metadata as meta } from "@/app/config";
import { copyright } from "@/components/sections/footer/config";
import { getYearDisplay } from "@/lib/utils";

function Footer() {
  const { startYear } = copyright;
  const yearDisplay = getYearDisplay(startYear);

  return (
    <footer className="border-border flex w-full shrink-0 items-center border-t px-4 py-6 md:px-6">
      <p className="text-xs text-muted-foreground">
        © {yearDisplay} {meta.author.name}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;