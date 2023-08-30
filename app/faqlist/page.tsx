"use client";

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "title",
    headerName: "title",
    width: 200,
    editable: true,
  },
  {
    field: "contents",
    headerName: "contents",
    width: 550,
    editable: true,
  },
  {
    field: "note",
    headerName: "note",
    type: "string",
    width: 200,
    editable: true,
  },
];

export default function DataGridDemo() {
  const [rows, rowchange] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/faqlist")
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
    <Box sx={{ width: "100%" }}>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        AIA-SPURS 관련 FAQ
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
