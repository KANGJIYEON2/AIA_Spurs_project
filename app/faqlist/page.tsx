"use client";

import * as React from "react";
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

const rows = [
  {
    id: 1,
    title: "로그인 하는 방법",
    contents: "로그인을 하기 위해서는 LOGIN 창에 접속해야 합니다.",
    note: "로그인 관련 문의",
  },
  {
    id: 2,
    title: "이벤트 참여하는 방법",
    contents: "이벤트에 참여하기 위해서는 EVENT 창에 접속해야 합니다.",
    note: "이벤트 관련 문의",
  },
  {
    id: 3,
    title: "비밀번호 찾는 방법",
    contents:
      "비밀번호를 찾기 위해서는 해당 SNS에서 비밀번호 찾기를 진행해야 합니다.",
    note: "로그인 관련 문의",
  },
  {
    id: 4,
    title: "영상 재생이 안되는 경우",
    contents:
      "원활한 영상 재생을 위해서는 Chrome 브라우저 접속을 권장하고 있습니다.",
    note: "콘텐츠 관련 문의",
  },
  {
    id: 5,
    title: "사진 다운로드가 안되는 경우",
    contents:
      "원활한 콘텐츠 재생을 위해서는 Chrome 브라우저 접속을 권장하고 있습니다.",
    note: "콘텐츠 관련 문의",
  },
];

export default function DataGridDemo() {
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