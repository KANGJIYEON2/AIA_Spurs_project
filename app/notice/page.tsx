"use client";

import { useEffect, useState } from "react";
import { Notices } from "@/interface/list";
import getAllnotices from "@/lib/getAllnotices";
import Link from "next/link";
import {
    Box,
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
} from "@mui/material";

export default function UseNotices() {
    const columns = [
        { id: "id", name: "ID" },
        { id: "title", name: "제목" },
        { id: "data", name: "날짜" },
    ];

    const [notices, setnotices] = useState<Notices[]>([]);
    const [page, pagechange] = useState(0);
    const [rowperpage, rowperpagechange] = useState(10);
    const handlechangepage = (event: any, newpage: any) => {
        pagechange(newpage);
    };
    const handleRowsPerPage = (event: any) => {
        rowperpagechange(+event.target.value);
        pagechange(0);
    };
    useEffect(() => {
        async function fetchNotices() {
            const data = await getAllnotices();
            setnotices(data);
            console.log(data);
        }

        fetchNotices();
    }, []);

    return (
        <Container sx={{ minWidth: "sm", maxWidth: "xl" }}>
            <Box sx={{ marginTop: 5, marginBottom: 30 }}>
                <Typography variant="h3" textAlign={"center"} mb={"20"}>
                    AIA-SPURS 공지사항
                </Typography>
                <Paper
                    sx={{
                        width: "100%",
                        alignItems: "center",
                        justifyItems: "center",
                    }}
                >
                    <TableContainer sx={{ maxHeight: 600 }}>
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell key={column.id}>
                                            {column.name}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {notices &&
                                    notices
                                        .slice(
                                            page * rowperpage,
                                            page * rowperpage + rowperpage
                                        )
                                        .map((notice, i) => (
                                            <TableRow key={i}>
                                                {columns.map((column) => {
                                                    let value =
                                                        notice[column.id];
                                                    if (column.id === "id") {
                                                        return (
                                                            <TableCell
                                                                key={column.id}
                                                            >
                                                                {page *
                                                                    rowperpage +
                                                                    i +
                                                                    1}
                                                            </TableCell>
                                                        );
                                                    } else if (
                                                        column.id === "title"
                                                    ) {
                                                        return (
                                                            <>
                                                                <TableCell
                                                                    key={
                                                                        column.id
                                                                    }
                                                                >
                                                                    <Link
                                                                        href={`/notice/${notice.id}`}
                                                                        style={{
                                                                            textDecoration:
                                                                                "none",
                                                                            color: "inherit",
                                                                        }}
                                                                    >
                                                                        {value}
                                                                    </Link>
                                                                </TableCell>
                                                                <TableCell>
                                                                    {
                                                                        notice.date
                                                                    }{" "}
                                                                </TableCell>
                                                            </>
                                                        );
                                                    } else if (
                                                        column.id !== "date"
                                                    ) {
                                                        return (
                                                            <TableCell
                                                                key={column.id}
                                                            >
                                                                {value}
                                                            </TableCell>
                                                        );
                                                    }
                                                })}
                                            </TableRow>
                                        ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        page={page}
                        count={notices.length}
                        rowsPerPage={rowperpage}
                        component="div"
                        onPageChange={handlechangepage}
                        onRowsPerPageChange={handleRowsPerPage}
                    ></TablePagination>
                </Paper>
            </Box>
        </Container>
    );
}
