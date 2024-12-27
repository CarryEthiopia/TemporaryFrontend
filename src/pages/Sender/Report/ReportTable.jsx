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
  Tooltip,
  IconButton,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";

const defaultData = [
  {
    id: 1,
    travelerName: "John Doe",
    product: "Laptop",
    amount: 1,
    price: 1000,
    status: "Completed",
    statusColor: "success",
    profileImg: "https://via.placeholder.com/40",
  },
  {
    id: 2,
    travelerName: "Jane Smith",
    product: "Phone",
    amount: 2,
    price: 1500,
    status: "Cancelled",
    statusColor: "error",
    profileImg: "https://via.placeholder.com/40",
  },
  {
    id: 3,
    travelerName: "Emily Johnson",
    product: "Tablet",
    amount: 3,
    price: 1800,
    status: "In Process",
    statusColor: "warning",
    profileImg: "https://via.placeholder.com/40",
  },
];

const ReportTable = ({ data = defaultData }) => {
  const [orderDirection, setOrderDirection] = useState("asc");
  const [orderBy, setOrderBy] = useState("travelerName");
  const [hoveredRow, setHoveredRow] = useState(null);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && orderDirection === "asc";
    setOrderDirection(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const createSortHandler = (property) => {
    return () => handleRequestSort(property);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Completed":
        return <CheckCircleIcon sx={{ color: "success.main" }} />;
      case "Cancelled":
        return <CancelIcon sx={{ color: "error.main" }} />;
      case "In Process":
        return <HourglassEmptyIcon sx={{ color: "warning.main" }} />;
      default:
        return null;
    }
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
    <TableContainer
      sx={{
        mt: 3,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 3,
        overflow: "hidden",
        "& .MuiTableCell-root": {
          borderColor: "divider",
        },
        marginRight: { xs: 1, sm: 3, md: 4 },
      }}
    >
      <Table>
        <TableHead>
          <TableRow sx={{ bgcolor: "primary.main" }}>
            <TableCell
              sx={{
                color: "common.white",
                width: { xs: "60px", sm: "auto" },
              }}
            >
              <TableSortLabel
                active={orderBy === "travelerName"}
                direction={orderBy === "travelerName" ? orderDirection : "asc"}
                onClick={createSortHandler("travelerName")}
                sx={{
                  color: "common.white",
                  "&.Mui-active": {
                    color: "common.white",
                  },
                  "& .MuiTableSortLabel-icon": {
                    color: "common.white !important",
                  },
                }}
              >
                <span className="hidden sm:inline">Traveler</span>
                <PersonIcon sx={{ display: { xs: "block", sm: "none" } }} />
              </TableSortLabel>
            </TableCell>

            <TableCell
              sx={{
                color: "common.white",
                display: { xs: "none", sm: "table-cell" },
              }}
            >
              <TableSortLabel
                active={orderBy === "product"}
                direction={orderBy === "product" ? orderDirection : "asc"}
                onClick={createSortHandler("product")}
                sx={{
                  color: "common.white",
                  "&.Mui-active": {
                    color: "common.white",
                  },
                  "& .MuiTableSortLabel-icon": {
                    color: "common.white !important",
                  },
                }}
              >
                Product
                <ShoppingCartIcon sx={{ ml: 1, fontSize: "0.9rem" }} />
              </TableSortLabel>
            </TableCell>

            <TableCell
              sx={{
                color: "common.white",
                display: { xs: "none", md: "table-cell" },
              }}
            >
              <TableSortLabel
                active={orderBy === "amount"}
                direction={orderBy === "amount" ? orderDirection : "asc"}
                onClick={createSortHandler("amount")}
                sx={{
                  color: "common.white",
                  "&.Mui-active": {
                    color: "common.white",
                  },
                  "& .MuiTableSortLabel-icon": {
                    color: "common.white !important",
                  },
                }}
              >
                Amount
              </TableSortLabel>
            </TableCell>

            <TableCell
              sx={{
                color: "common.white",
                display: { xs: "none", sm: "table-cell" },
              }}
            >
              <TableSortLabel
                active={orderBy === "price"}
                direction={orderBy === "price" ? orderDirection : "asc"}
                onClick={createSortHandler("price")}
                sx={{
                  color: "common.white",
                  "&.Mui-active": {
                    color: "common.white",
                  },
                  "& .MuiTableSortLabel-icon": {
                    color: "common.white !important",
                  },
                }}
              >
                Price
                <AttachMoneyIcon sx={{ ml: 1, fontSize: "0.9rem" }} />
              </TableSortLabel>
            </TableCell>

            <TableCell
              sx={{
                color: "common.white",
                width: { xs: "60px", sm: "auto" },
              }}
            >
              <span className="hidden sm:inline">Status</span>
              <InfoIcon sx={{ display: { xs: "block", sm: "none" } }} />
            </TableCell>

            <TableCell
              sx={{
                color: "common.white",
                display: { xs: "none", sm: "table-cell" },
              }}
            >
              Actions
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {sortedData.map((row) => (
            <TableRow
              key={row.id}
              onMouseEnter={() => setHoveredRow(row.id)}
              onMouseLeave={() => setHoveredRow(null)}
              sx={{
                transition: "all 0.2s",
                "&:hover": {
                  bgcolor: "action.hover",
                  transform: "scale(1.01)",
                  boxShadow: 1,
                },
                cursor: "pointer",
              }}
            >
              <TableCell
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <img
                  src={row.profileImg}
                  alt={row.travelerName}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <span className="hidden sm:inline">{row.travelerName}</span>
              </TableCell>

              <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
                <Tooltip title={row.product}>
                  <span className="flex items-center gap-2">
                    <ShoppingCartIcon fontSize="small" />
                    {row.product}
                  </span>
                </Tooltip>
              </TableCell>

              <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                {row.amount}
              </TableCell>

              <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
                <span className="flex items-center gap-1">
                  <AttachMoneyIcon fontSize="small" />
                  {row.price.toLocaleString()}
                </span>
              </TableCell>

              <TableCell>
                <Tooltip title={row.status}>
                  <span className="flex items-center gap-1">
                    {getStatusIcon(row.status)}
                    <span className="hidden sm:inline">{row.status}</span>
                  </span>
                </Tooltip>
              </TableCell>

              <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  sx={{
                    textTransform: "none",
                    minWidth: 0,
                    px: 2,
                    "&:hover": {
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  Details
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
