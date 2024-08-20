import { Barchart } from "@/components/charts/bar-chart";
import { Chart } from "@/components/charts/test";
import { Button } from "@/components/ui/button";
import type { MetaFunction } from "@remix-run/cloudflare";
import { useEffect } from "react";
import { createSwapy } from "swapy";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix on Cloudflare!",
    },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl font-bold my-10 text-center">Expenseto</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="section-1" data-swapy-slot="foo">
          <div className="content-a" data-swapy-item="a">
            <Chart />
          </div>
        </div>

        <div className="section-2" data-swapy-slot="bar">
          <div className="content-b" data-swapy-item="b">
            <Barchart />

            <div className="handle" data-swapy-handle></div>
          </div>
        </div>
      </div>
    </div>
  );
}
