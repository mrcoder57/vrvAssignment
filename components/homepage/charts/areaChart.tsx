"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

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
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { nunitoSans } from "@/app/fonts/font";

const chartData = [
  { date: "2020", desktop: 222, },
  { date: "2021", desktop: 300,  },
  { date: "2022", desktop: 240,  },
  { date: "2023", desktop: 310,  },
  { date: "2024", desktop: 150,  },
  { date: "2025", desktop: 356, },
  { date: "2026", desktop: 445 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Desktop",
    color: "#4379EE",
  },
  mobile: {
    label: "Mobile",
    color: "#4379EE",
  },
} satisfies ChartConfig;

export function Areachart() {
  const [timeRange, setTimeRange] = React.useState("90d");

  // Filtering data based on the selected time range
  const filteredData = chartData.filter((item) => {
    const year = parseInt(item.date, 10); // Convert year from string to number
    const now = new Date().getFullYear();
    
    if (timeRange === "90d") return year >= now - 3; // Last 3 years
    if (timeRange === "30d") return year >= now - 1; // Last 1 year
    if (timeRange === "7d") return year === now; // Current year only
    return true; // Default case
  });

  return (
    <Card className="w-full h-[366px] border-none shadow-none">
      <CardHeader className="flex gap-2 space-y-0 border-b lg:py-5 py-2 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle className={`${nunitoSans.className} text-[#7a7a7a] text-[12px]  font-bold text-left`}>
            AVG. PROPERTY RATE
          </CardTitle>
          <CardDescription>
            {/* Showing total visitors for the last selected period */}
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 years
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 1 year
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Current year
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[300px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-mobile)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-mobile)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => value} // Display year as is
            />
            <YAxis
              domain={[0, "dataMax + 50"]} // Adjust domain as needed
              tickCount={11}
              tickFormatter={(value) => `₹${value.toFixed(1)}k`}
            />
            <Tooltip
              content={({ payload }) => {
                if (!payload || payload.length === 0) return null;
                return (
                  <div>
                    <p>{`Year: ${payload[0].payload.date}`}</p>
                    <p>{`Desktop: ₹${payload[0].value}`}</p>
                    {/* <p>{`Mobile: ₹${payload[1].value}`}</p> */}
                  </div>
                );
              }}
            />
            {/* <Area
              dataKey="mobile"
              type="monotone"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              stackId="a"
            /> */}
            <Area
              dataKey="desktop"
              type="monotone"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}