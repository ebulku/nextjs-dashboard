import CardWrapper from "@/components/dashboard/dashboard-cards";
import RevenueChart from "@/components/dashboard/revenue-chart";
import LatestInvoices from "@/components/dashboard/latest-invoices";
import { Suspense } from "react";
import {
  CardsSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from "@/components/skeletons";
import { Metadata } from "next";
import { TypographyH2 } from "@/components/ui/typography";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const title = "Dashboard";

export const metadata: Metadata = {
  title: title,
};

export default async function Page() {
  return (
    <main className="space-y-4">
      <TypographyH2 text={title} />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Revenue</CardTitle>
          </CardHeader>
          <CardContent className="pl-2 pt-4">
            <Suspense fallback={<RevenueChartSkeleton />}>
              <RevenueChart />
            </Suspense>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Latest Invoices</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <Suspense fallback={<LatestInvoicesSkeleton />}>
              <LatestInvoices />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
