"use client";
import React, { FormEvent, useEffect, useState } from "react";
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




const Notice = () => {
  const columns = [
    { id: "id", name: "ID" },
    { id: "title", name: "title" },
    { id: "explain", name: "explain" },
    { id: "ETC", name: "관련설명" },
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
  const [openModule, setOpenModule] = React.useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/noticelist")
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
      <h3>공지사항</h3>
      <Paper sx={{ width: "90%" }}>
        <TableContainer sx={{ maxHeight: 450 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  
                  <TableCell key={column.id}>{column.name}
            
                  </TableCell>
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
                            return <TableCell key={value}>{value} </TableCell>;
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
export default Notice;
