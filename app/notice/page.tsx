"use client";
import React, { FormEvent, useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


export default function Notice() {
  const columns = [
    { field: "id", name: "id", width: 90  } as any,
    { field: "title", name: "title" , width: 200}  as any,
    { field: "explain", name: "explain", width: 550 }  as any,
    { field: "ETC", name: "관련설명", width: 200 }  as any,
  ];
  
  const [rows, rowchange] = useState([]);
  
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
    <Box sx={{ minWidth: "sm", maxWidth: "xl" }}>
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
