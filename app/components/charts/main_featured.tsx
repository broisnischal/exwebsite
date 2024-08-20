"use client";

import * as React from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { date: "2024-04-01", expense: 222, mobile: 150 },
  { date: "2024-04-02", expense: 97, mobile: 180 },
  { date: "2024-04-03", expense: 167, mobile: 120 },
  { date: "2024-04-04", expense: 242, mobile: 260 },
  { date: "2024-04-05", expense: 373, mobile: 290 },
  { date: "2024-04-06", expense: 301, mobile: 340 },
  { date: "2024-04-07", expense: 245, mobile: 180 },
  { date: "2024-04-08", expense: 409, mobile: 320 },
  { date: "2024-04-09", expense: 59, mobile: 110 },
  { date: "2024-04-10", expense: 261, mobile: 190 },
  { date: "2024-04-11", expense: 327, mobile: 350 },
  { date: "2024-04-12", expense: 292, mobile: 210 },
  { date: "2024-04-13", expense: 342, mobile: 380 },
  { date: "2024-04-14", expense: 137, mobile: 220 },
  { date: "2024-04-15", expense: 120, mobile: 170 },
  { date: "2024-04-16", expense: 138, mobile: 190 },
  { date: "2024-04-17", expense: 446, mobile: 360 },
  { date: "2024-04-18", expense: 364, mobile: 410 },
  { date: "2024-04-19", expense: 243, mobile: 180 },
  { date: "2024-04-20", expense: 89, mobile: 150 },
  { date: "2024-04-21", expense: 137, mobile: 200 },
  { date: "2024-04-22", expense: 224, mobile: 170 },
  { date: "2024-04-23", expense: 138, mobile: 230 },
  { date: "2024-04-24", expense: 387, mobile: 290 },
  { date: "2024-04-25", expense: 215, mobile: 250 },
  { date: "2024-04-26", expense: 75, mobile: 130 },
  { date: "2024-04-27", expense: 383, mobile: 420 },
  { date: "2024-04-28", expense: 122, mobile: 180 },
  { date: "2024-04-29", expense: 315, mobile: 240 },
  { date: "2024-04-30", expense: 454, mobile: 380 },
  { date: "2024-05-01", expense: 165, mobile: 220 },
  { date: "2024-05-02", expense: 293, mobile: 310 },
  { date: "2024-05-03", expense: 247, mobile: 190 },
  { date: "2024-05-04", expense: 385, mobile: 420 },
  { date: "2024-05-05", expense: 481, mobile: 390 },
  { date: "2024-05-06", expense: 498, mobile: 520 },
  { date: "2024-05-07", expense: 388, mobile: 300 },
  { date: "2024-05-08", expense: 149, mobile: 210 },
  { date: "2024-05-09", expense: 227, mobile: 180 },
  { date: "2024-05-10", expense: 293, mobile: 330 },
  { date: "2024-05-11", expense: 335, mobile: 270 },
  { date: "2024-05-12", expense: 197, mobile: 240 },
  { date: "2024-05-13", expense: 197, mobile: 160 },
  { date: "2024-05-14", expense: 448, mobile: 490 },
  { date: "2024-05-15", expense: 473, mobile: 380 },
  { date: "2024-05-16", expense: 338, mobile: 400 },
  { date: "2024-05-17", expense: 499, mobile: 420 },
  { date: "2024-05-18", expense: 315, mobile: 350 },
  { date: "2024-05-19", expense: 235, mobile: 180 },
  { date: "2024-05-20", expense: 177, mobile: 230 },
  { date: "2024-05-21", expense: 82, mobile: 140 },
  { date: "2024-05-22", expense: 81, mobile: 120 },
  { date: "2024-05-23", expense: 252, mobile: 290 },
  { date: "2024-05-24", expense: 294, mobile: 220 },
  { date: "2024-05-25", expense: 201, mobile: 250 },
  { date: "2024-05-26", expense: 213, mobile: 170 },
  { date: "2024-05-27", expense: 420, mobile: 460 },
  { date: "2024-05-28", expense: 233, mobile: 190 },
  { date: "2024-05-29", expense: 78, mobile: 130 },
  { date: "2024-05-30", expense: 340, mobile: 280 },
  { date: "2024-05-31", expense: 178, mobile: 230 },
  { date: "2024-06-01", expense: 178, mobile: 200 },
  { date: "2024-06-02", expense: 470, mobile: 410 },
  { date: "2024-06-03", expense: 103, mobile: 160 },
  { date: "2024-06-04", expense: 439, mobile: 380 },
  { date: "2024-06-05", expense: 88, mobile: 140 },
  { date: "2024-06-06", expense: 294, mobile: 250 },
  { date: "2024-06-07", expense: 323, mobile: 370 },
  { date: "2024-06-08", expense: 385, mobile: 320 },
  { date: "2024-06-09", expense: 438, mobile: 480 },
  { date: "2024-06-10", expense: 155, mobile: 200 },
  { date: "2024-06-11", expense: 92, mobile: 150 },
  { date: "2024-06-12", expense: 492, mobile: 420 },
  { date: "2024-06-13", expense: 81, mobile: 130 },
  { date: "2024-06-14", expense: 426, mobile: 380 },
  { date: "2024-06-15", expense: 307, mobile: 350 },
  { date: "2024-06-16", expense: 371, mobile: 310 },
  { date: "2024-06-17", expense: 475, mobile: 520 },
  { date: "2024-06-18", expense: 107, mobile: 170 },
  { date: "2024-06-19", expense: 341, mobile: 290 },
  { date: "2024-06-20", expense: 408, mobile: 450 },
  { date: "2024-06-21", expense: 169, mobile: 210 },
  { date: "2024-06-22", expense: 317, mobile: 270 },
  { date: "2024-06-23", expense: 480, mobile: 530 },
  { date: "2024-06-24", expense: 132, mobile: 180 },
  { date: "2024-06-25", expense: 141, mobile: 190 },
  { date: "2024-06-26", expense: 434, mobile: 380 },
  { date: "2024-06-27", expense: 448, mobile: 490 },
  { date: "2024-06-28", expense: 149, mobile: 200 },
  { date: "2024-06-29", expense: 103, mobile: 160 },
  { date: "2024-06-30", expense: 446, mobile: 400 },
];

const chartConfig = {
  views: {
    label: "Page Views",
  },
  expense: {
    label: "Expenses",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Income",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function MainHeader() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("expense");

  const total = React.useMemo(
    () => ({
      expense: chartData.reduce((acc, curr) => acc + curr.expense, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    }),
    []
  );

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Balance Cheatsheet</CardTitle>
          <CardDescription>
            Showing total amount spent for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {["expense", "mobile"].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
