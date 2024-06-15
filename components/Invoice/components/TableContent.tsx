import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { tableContent } from "../content";

const TableContent = () => {
  return (
    <TableContainer
      sx={{
        border: "1px solid",
        borderColor: "borderCol.300",
        margin: "35px 0px 27px 0px",
      }}
    >
      <Table sx={{ minWidth: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              align="right"
              sx={{
                paddingLeft: "0px",
                textAlign: "center",
                color: "gray.500",
              }}
            >
              #
            </TableCell>
            <TableCell align="right" sx={{ color: "gray.500" }}>
              Rate
            </TableCell>
            <TableCell align="right" sx={{ color: "gray.500" }}>
              Qty
            </TableCell>
            <TableCell align="right" sx={{ color: "gray.500" }}>
              Total
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableContent.map((content) => (
            <TableRow
              key={content.orderNumber}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                // marginBottom: "10px",
              }}
            >
              <TableCell
                align="right"
                sx={{
                  paddingLeft: "0px",
                  textAlign: "center",
                  paddingBottom: "40px",
                  "&:last-child td, &:last-child th": { border: 0 },
                  borderTop: "none",
                  borderBottom: "none",
                }}
              >
                {content.orderNumber}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  paddingBottom: "40px",
                  borderTop: "none",
                  borderBottom: "none",
                }}
              >
                {content.rate}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  paddingBottom: "40px",
                  borderTop: "none",
                  borderBottom: "none",
                }}
              >
                {content.qty}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  paddingBottom: "40px",
                  borderTop: "none",
                  borderBottom: "none",
                }}
              >
                {content.totalFee}
              </TableCell>
            </TableRow>
          ))}
          <TableRow
            // key={content.orderNumber}
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
              // marginBottom: "10px",
            }}
          >
            <TableCell
              align="right"
              sx={{
                paddingLeft: "0px",
                textAlign: "center",

                borderTop: "none",
                borderBottom: "none",
              }}
            >
              {"HST"}
            </TableCell>
            <TableCell
              align="right"
              sx={{
                borderTop: "none",
                borderBottom: "none",
              }}
            >
              {" "}
            </TableCell>
            <TableCell
              align="right"
              sx={{
                borderTop: "none",
                borderBottom: "none",
              }}
            >
              {" "}
            </TableCell>
            <TableCell
              align="right"
              sx={{
                borderTop: "none",
                borderBottom: "none",
              }}
            >
              {232}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableContent;
