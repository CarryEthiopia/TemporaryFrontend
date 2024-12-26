import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Button,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

// Placeholder Data
const defaultData = [
  {
    id: 1,
    travelerName: "John Doe",
    product: "Laptop",
    amount: 1,
    price: 1000,
    status: "Completed",
    statusColor: "green-500",
    profileImg: "https://via.placeholder.com/40",
  },
  {
    id: 2,
    travelerName: "Jane Smith",
    product: "Phone",
    amount: 2,
    price: 1500,
    status: "Cancelled",
    statusColor: "red-500",
    profileImg: "https://via.placeholder.com/40",
  },
  {
    id: 3,
    travelerName: "Emily Johnson",
    product: "Tablet",
    amount: 3,
    price: 1800,
    status: "In Process",
    statusColor: "yellow-500",
    profileImg: "https://via.placeholder.com/40",
  },
];

const ReportTable = ({ data = defaultData }) => {
  const [orderDirection, setOrderDirection] = useState("asc");
  const [orderBy, setOrderBy] = useState("travelerName");

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && orderDirection === "asc";
    setOrderDirection(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const createSortHandler = (property) => {
    return () => handleRequestSort(property);
  };

  const sortedData = [...data].sort((a, b) => {
    if (orderBy === "travelerName") {
      return orderDirection === "asc"
        ? a.travelerName.localeCompare(b.travelerName)
        : b.travelerName.localeCompare(a.travelerName);
    } else if (orderBy === "amount" || orderBy === "price") {
      return orderDirection === "asc"
        ? a[orderBy] - b[orderBy]
        : b[orderBy] - a[orderBy];
    }
    return 0;
  });

  return (
    <TableContainer className="mt-6 bg-white shadow-lg rounded-lg p-4 overflow-x-auto">
      <Table className="min-w-full">
        {/* Table Header */}
        <TableHead>
          <TableRow>
            <TableCell className="px-2 py-3">
              <TableSortLabel
                active={orderBy === "travelerName"}
                direction={orderBy === "travelerName" ? orderDirection : "asc"}
                onClick={createSortHandler("travelerName")}
              >
                Traveler Name
                {orderBy === "travelerName" &&
                  (orderDirection === "asc" ? (
                    <ArrowUpwardIcon fontSize="small" />
                  ) : (
                    <ArrowDownwardIcon fontSize="small" />
                  ))}
              </TableSortLabel>
            </TableCell>
            <TableCell className="px-2 py-3">
              <TableSortLabel
                active={orderBy === "product"}
                direction={orderBy === "product" ? orderDirection : "asc"}
                onClick={createSortHandler("product")}
              >
                Product
              </TableSortLabel>
            </TableCell>
            <TableCell className="px-2 py-3 hidden sm:table-cell">
              <TableSortLabel
                active={orderBy === "amount"}
                direction={orderBy === "amount" ? orderDirection : "asc"}
                onClick={createSortHandler("amount")}
              >
                Amount
              </TableSortLabel>
            </TableCell>
            <TableCell className="px-2 py-3 hidden sm:table-cell">
              <TableSortLabel
                active={orderBy === "price"}
                direction={orderBy === "price" ? orderDirection : "asc"}
                onClick={createSortHandler("price")}
              >
                Price ($)
              </TableSortLabel>
            </TableCell>
            <TableCell className="px-2 py-3 hidden sm:table-cell">
              Status
            </TableCell>
            <TableCell className="px-2 py-3 hidden sm:table-cell">
              Detail
            </TableCell>
          </TableRow>
        </TableHead>

        {/* Table Body */}
        <TableBody>
          {sortedData.map((row) => (
            <TableRow key={row.id} className="flex flex-wrap sm:table-row">
              <TableCell className="border-r px-2 py-3 flex items-center">
                <img
                  src={row.profileImg}
                  alt="Profile"
                  className="w-10 h-10 rounded-full mr-2"
                />
                <span
                  className={`w-2.5 h-2.5 rounded-full inline-block mr-2 bg-${row.statusColor}`}
                ></span>
                {row.travelerName}
              </TableCell>
              <TableCell className="border-r px-2 py-3">
                {row.product}
              </TableCell>
              <TableCell className="border-r px-2 py-3 hidden sm:table-cell">
                {row.amount}
              </TableCell>
              <TableCell className="border-r px-2 py-3 hidden sm:table-cell">
                {row.price}
              </TableCell>
              <TableCell className="border-r px-2 py-3 hidden sm:table-cell">
                <span className={`text-${row.statusColor} font-semibold`}>
                  {row.status}
                </span>
              </TableCell>
              <TableCell className="px-2 py-3 hidden sm:table-cell">
                <Button
                  variant="outlined"
                  color="primary"
                  className="text-xs py-1 px-3"
                >
                  More...
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReportTable;
