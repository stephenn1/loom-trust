import Finance from "@/components/web-app/finance";
import React, { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <main className="grid overflow-hidden">
        <Finance />
      </main>
    </Suspense>
  );
}
