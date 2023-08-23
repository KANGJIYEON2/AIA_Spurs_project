"use client";
import React, { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
} from "@mui/material";

const Userpage = () => {
  const columns = [
    { id: "id", name: "ID" },
    { id: "name", name: "Name" },
    { id: "phoneNum", name: "Phone" },
    { id: "adress", name: "Adress" },
  ];

  const handlechangepage = (event:any, newpage:any) => {
    pagechange(newpage);
  };
  const handleRowsPerPage = (event:any) => {
    rowperpagechange(+event.target.value);
    pagechange(0);
  };

  const [rows, rowchange] = useState([]);
  const [page, pagechange] = useState(0);
  const [rowperpage, rowperpagechange] = useState(5);
  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        rowchange(resp);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <div style={{ width: "70%", marginLeft: "6%" }}>
      <h3>회원정보</h3>
      <Paper sx={{ width: "90%" }}>
        <TableContainer sx={{ maxHeight: 450 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id}>{column.name}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows &&
                rows
                  .slice(page * rowperpage, page * rowperpage + rowperpage)
                  .map((row, i) => {
                    return (
                      <TableRow key={i}>
                        {columns &&
                          columns.map((column, i) => {
                            let value = row[column.id];
                            return <TableCell key={value}>{value}</TableCell>;
                          })}
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          page={page}
          count={rows.length}
          rowsPerPage={rowperpage}
          component="div"
          onPageChange={handlechangepage}
          onRowsPerPageChange={handleRowsPerPage}
        ></TablePagination>
      </Paper>
    </div>
  );
};
export default Userpage;
