import { Skeleton } from '@/components/ui/skeleton'
import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
} from '@/components/ui/timeline'

import { Card, CardContent, CardHeader } from './ui/card'
import { Separator } from './ui/separator'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'

// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent'

export function CardSkeleton() {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow">
      <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
        {/* <div className="tracking-tight text-sm font-medium">Collected</div> */}
        <Skeleton className="h-5 w-[100px]" />
        <Skeleton className="h-5 w-5 rounded-full" />
      </div>
      <div className="p-6 pt-0">
        <Skeleton className="h-8 w-[110px]" />
      </div>
    </div>
  )
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  )
}

export function RevenueChartSkeleton() {
  return (
    <div className="pl-4">
      <Skeleton className="h-[350px] w-full" />
    </div>
  )
}

export function InvoiceSkeleton() {
  return (
    <div className="flex items-center">
      <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
        <Skeleton className="h-10 w-10 rounded-full" />
      </span>
      <div className="ml-4 space-y-1">
        <Skeleton className="h-5 w-[100px]" />
        <Skeleton className="h-3 w-[100px]" />
      </div>
      <div className="ml-auto font-medium">
        <Skeleton className="h-8 w-[80px]" />
      </div>
    </div>
  )
}

export function LatestInvoicesSkeleton() {
  return (
    <div className="space-y-8">
      <InvoiceSkeleton />
      <InvoiceSkeleton />
      <InvoiceSkeleton />
      <InvoiceSkeleton />
      <InvoiceSkeleton />
    </div>
  )
}

export function LatestOrderSkeleton() {
  return (
    <div className="flex items-center">
      <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
        <Skeleton className="h-10 w-10 rounded-full" />
      </span>
      <div className="ml-4 space-y-1">
        <Skeleton className="h-5 w-[100px]" />
        <Skeleton className="h-3 w-[100px]" />
      </div>
      <div className="ml-auto font-medium">
        <Skeleton className="h-8 w-[120px]" />
      </div>
    </div>
  )
}

export function LatestOrdersSkeleton() {
  return (
    <div className="space-y-8">
      <LatestOrderSkeleton />
      <LatestOrderSkeleton />
      <LatestOrderSkeleton />
      <LatestOrderSkeleton />
      <LatestOrderSkeleton />
    </div>
  )
}

export default function DashboardSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100`}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChartSkeleton />
        <LatestInvoicesSkeleton />
      </div>
    </>
  )
}

export function TableRowSkeleton() {
  return (
    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
      <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
        <div className="flex items-center gap-3">
          <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
            <Skeleton className="h-10 w-10 rounded-full" />
          </span>
          <Skeleton className="h-5 w-[150px]" />
        </div>
      </td>
      <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
        <Skeleton className="h-5 w-[150px]" />
      </td>
      <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
        <Skeleton className="h-5 w-[150px]" />
      </td>
      <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
        <Skeleton className="h-5 w-[150px]" />
      </td>
      <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
        <Skeleton className="h-8 w-[100px] rounded-full" />
      </td>
      <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
        <div className="flex justify-end gap-3">
          <Skeleton className="h-9 w-9" />
          <Skeleton className="h-9 w-9" />
        </div>
      </td>
    </tr>
  )
}

export function InvoicesMobileSkeleton() {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow">
      <div className="space-y-1.5 p-6 flex flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <Skeleton className="h-10 w-10 rounded-full" />
          </span>
          <div className="ml-4 space-y-1">
            <Skeleton className="h-5 w-[100px]" />
            <Skeleton className="h-3 w-[100px]" />
          </div>
        </div>
        <Skeleton className="h-5 w-20" />
      </div>
      <div className="p-6 pt-0">
        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 bg-border h-[1px] w-full"
        ></div>
        <div className="flex w-full items-center justify-between pt-4">
          <div className="flex flex-col gap-2">
            <Skeleton className="h-7 w-[120px]" />
            <Skeleton className="h-4 w-[100px]" />
          </div>
          <div className="flex justify-end gap-2">
            <Skeleton className="h-9 w-9" />
            <Skeleton className="h-9 w-9" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function InvoicesTableSkeleton() {
  return (
    <div className="mt-2 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg p-2 md:pt-0">
          <div className="md:hidden">
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
          </div>
          <table className="w-full caption-bottom text-sm hidden md:table">
            <thead className="[&_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th className="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                  Customer
                </th>
                <th className="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                  Email
                </th>
                <th className="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                  Amount
                </th>
                <th className="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                  Date
                </th>
                <th className="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                  Status
                </th>
                <th className="h-10 px-2 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] text-right">
                  Edit
                </th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export function OrderTableRowSkeleton() {
  return (
    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
      <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
        <Skeleton className="h-5 w-[200px]" />
      </td>
      <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
        <div className="flex items-center gap-3">
          <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
            <Skeleton className="h-10 w-10 rounded-full" />
          </span>
          <Skeleton className="h-5 w-[150px]" />
        </div>
      </td>
      <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
        <Skeleton className="h-5 w-[80px]" />
      </td>
      <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
        <Skeleton className="h-7 w-[80px] rounded-full" />
      </td>
      <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
        <Skeleton className="h-5 w-[200px]" />
      </td>
      <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
        <Skeleton className="h-5 w-[150px]" />
      </td>
      <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
        <div className="flex justify-end gap-3">
          <Skeleton className="h-9 w-9" />
          <Skeleton className="h-9 w-9" />
          <Skeleton className="h-9 w-9" />
        </div>
      </td>
    </tr>
  )
}

export function OrderMobileSkeleton() {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow">
      <div className="space-y-1.5 p-6 flex flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <Skeleton className="h-10 w-10 rounded-full" />
          </span>
          <div className="ml-4 space-y-1">
            <Skeleton className="h-5 w-[100px]" />
            <Skeleton className="h-3 w-[100px]" />
          </div>
        </div>
        <Skeleton className="h-5 w-20" />
      </div>

      <div className="p-6 pt-0">
        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 bg-border h-[1px] w-full"
        ></div>
        <div className="text-xl font-bold py-2">
          <Skeleton className="h-8 w-[250px]" />
        </div>
        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 bg-border h-[1px] w-full"
        ></div>
        <div className="flex w-full items-center justify-between pt-4">
          <div className="flex flex-col gap-2">
            <Skeleton className="h-7 w-[120px]" />
            <Skeleton className="h-4 w-[100px]" />
          </div>
          <div className="flex justify-end gap-2">
            <Skeleton className="h-9 w-9" />
            <Skeleton className="h-9 w-9" />
            <Skeleton className="h-9 w-9" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function OrdersTableSkeleton() {
  return (
    <div className="mt-2 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg p-2 md:pt-0">
          <div className="md:hidden space-y-4">
            <OrderMobileSkeleton />
            <OrderMobileSkeleton />
            <OrderMobileSkeleton />
            <OrderMobileSkeleton />
            <OrderMobileSkeleton />
            <OrderMobileSkeleton />
          </div>
          <table className="w-full caption-bottom text-sm hidden md:table">
            <thead className="[&_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th className="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                  Title
                </th>
                <th className="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                  Customer
                </th>
                <th className="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                  Amount
                </th>
                <th className="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                  Status
                </th>
                <th className="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                  Last Note
                </th>
                <th className="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                  Created
                </th>
                <th className="h-10 px-2 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] text-right">
                  Edit
                </th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              <OrderTableRowSkeleton />
              <OrderTableRowSkeleton />
              <OrderTableRowSkeleton />
              <OrderTableRowSkeleton />
              <OrderTableRowSkeleton />
              <OrderTableRowSkeleton />
              <OrderTableRowSkeleton />
              <OrderTableRowSkeleton />
              <OrderTableRowSkeleton />
              <OrderTableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function TimelineItemSkeleton() {
  return (
    <TimelineItem>
      <TimelineHeading variant="secondary">
        <Skeleton className="h-6 w-[200px]" />
      </TimelineHeading>
      <TimelineDot />
      <TimelineLine />
      <TimelineContent className="pt-4">
        <Skeleton className="h-80 w-80" />
      </TimelineContent>
    </TimelineItem>
  )
}

export function OrderTimelineSkeleton() {
  return (
    <Timeline>
      <TimelineItemSkeleton />
      <TimelineItemSkeleton />
      <TimelineItemSkeleton />
    </Timeline>
  )
}

export function CustomerMobileSkeleton() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between ">
        <div className="flex items-center space-x-4">
          <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <Skeleton className="h-10 w-10 rounded-full" />
          </span>
          <div className="ml-4 space-y-2 ">
            <Skeleton className="h-5 w-[100px]" />
            <Skeleton className="h-3 w-[100px]" />
          </div>
        </div>
        <div className="flex items-center gap-2 space-y-1">
          <Skeleton className="h-9 w-9" />
          <Skeleton className="h-9 w-9" />
        </div>
      </CardHeader>
      <CardContent>
        <Separator />
        <div className="flex w-full items-center justify-between py-5 space-y-1">
          <div className="flex w-1/2 flex-col space-y-1">
            <Skeleton className="h-3 w-[100px]" />
            <Skeleton className="h-5 w-[50px]" />
          </div>
          <div className="flex w-1/2 flex-col space-y-1">
            <Skeleton className="h-3 w-[100px]" />
            <Skeleton className="h-5 w-[50px]" />
          </div>
        </div>
        <Separator />
        <div className="flex w-full items-center justify-between py-5 space-y-1">
          <div className="flex w-1/2 flex-col space-y-1">
            <Skeleton className="h-3 w-[100px]" />
            <Skeleton className="h-5 w-[150px]" />
          </div>
          <div className="flex w-1/2 flex-col space-y-1">
            <Skeleton className="h-3 w-[100px]" />
            <Skeleton className="h-5 w-[150px]" />
          </div>
        </div>
        <Separator />
        <div className="pt-2 space-y-1">
          <Skeleton className="h-3 w-[120px]" />
          <Skeleton className="h-3 w-[120px]" />
        </div>
      </CardContent>
    </Card>
  )
}

export function CustomerTableRowSkeleton() {
  return (
    <TableRow>
      <TableCell>
        <div className="flex items-center gap-3">
          <Skeleton className="h-9 w-9 rounded-full" />
          <Skeleton className="h-6 w-[200px]" />
        </div>
      </TableCell>
      <TableCell>
        <Skeleton className="h-6 w-[200px]" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-6 w-[200px]" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-6 w-[120px]" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-6 w-[120px]" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-6 w-8" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-6 w-8" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-6 w-[120px]" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-6 w-[120px]" />
      </TableCell>
      <TableCell>
        <div className="flex justify-end gap-3">
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 w-8" />
        </div>
      </TableCell>
    </TableRow>
  )
}

export function CustomerTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg p-2 md:pt-0">
          <div className="md:hidden space-y-4">
            <CustomerMobileSkeleton />
            <CustomerMobileSkeleton />
            <CustomerMobileSkeleton />
            <CustomerMobileSkeleton />
            <CustomerMobileSkeleton />
            <CustomerMobileSkeleton />
            <CustomerMobileSkeleton />
            <CustomerMobileSkeleton />
            <CustomerMobileSkeleton />
            <CustomerMobileSkeleton />
          </div>
          <Table className="hidden md:table">
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Notes</TableHead>
                <TableHead>Total Orders</TableHead>
                <TableHead>Total Invoices</TableHead>
                <TableHead>Total Pending</TableHead>
                <TableHead>Total Paid</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <CustomerTableRowSkeleton />
              <CustomerTableRowSkeleton />
              <CustomerTableRowSkeleton />
              <CustomerTableRowSkeleton />
              <CustomerTableRowSkeleton />
              <CustomerTableRowSkeleton />
              <CustomerTableRowSkeleton />
              <CustomerTableRowSkeleton />
              <CustomerTableRowSkeleton />
              <CustomerTableRowSkeleton />
              <CustomerTableRowSkeleton />
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
