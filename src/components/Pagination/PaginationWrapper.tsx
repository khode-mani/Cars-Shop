"use client";
import Pagination from "./Pagination";

export default function PaginationWrapper({ pageCount }: { pageCount: number }) {
  return <Pagination pageCount={pageCount} />;
}
