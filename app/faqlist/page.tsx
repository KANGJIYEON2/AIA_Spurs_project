"use client";

import { useEffect, useState } from "react";
import { Faqs } from "@/interface/list";
import getAllFaqs from "@/lib/getAllFaqs";
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

export default function UseFaqs() {
    const columns = [
        { id: "id", name: "ID" },
        { id: "title", name: "제목" },
        { id: "date", name: "날짜" },
    ];

    const [faqs, setFaqs] = useState<Faqs[]>([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [selectedFaqId, setSelectedFaqId] = useState<number | null>(null);

    const handleFaqTitleClick = (faqId: number) => {
        setSelectedFaqId(selectedFaqId === faqId ? null : faqId);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        async function fetchFaqs() {
            const data = await getAllFaqs();
            setFaqs(data);
        }
        fetchFaqs();
    }, []);

    return (
        <Container
        sx={{
            minWidth: "sm",
            maxWidth: "xl",
        }}
    >
        <Box sx={{ marginTop: 5, marginBottom: 60 }}>
            <Typography
                variant="h4"
                sx={{ fontWeight: "bold" }}
                textAlign={"left"}
                mb={"10"}
            >
                AIA-SPURS FAQ
            </Typography>
            <Paper
                sx={{
                    width: "92%",
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
                                {faqs &&
                                    faqs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((faq, i) => (
                                        <>
                                            <TableRow key={i} style={selectedFaqId === faq.id ? { backgroundColor: "#f2f2f2" } : {}}>
                                                {columns.map((column) => {
                                                    const value = faq[column.id];
                                                    if (column.id === "id") {
                                                        return (
                                                            <TableCell key={column.id}>
                                                                {page * rowsPerPage + i + 1}
                                                            </TableCell>
                                                        );
                                                    } else if (column.id === "title") {
                                                        return (
                                                            <TableCell key={column.id} onClick={() => handleFaqTitleClick(faq.id)}>
                                                                {value}
                                                            </TableCell>
                                                        );
                                                    } else {
                                                        return (
                                                            <TableCell key={column.id}>
                                                                {value}
                                                            </TableCell>
                                                        );
                                                    }
                                                })}
                                            </TableRow>
                                            {selectedFaqId === faq.id && (
                                                <TableRow>
                                                 <TableCell colSpan={columns.length} style={{ textAlign: "center" }}>
                                                        {faq.contents}
                                                    </TableCell>
                                                </TableRow>
                                            )}
                                        </>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        page={page}
                        count={faqs.length}
                        rowsPerPage={rowsPerPage}
                        component="div"
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleRowsPerPage}
                    />
                </Paper>
            </Box>
        </Container>
    );
}
