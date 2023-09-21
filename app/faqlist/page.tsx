import { useEffect, useState } from "react";
import { Faqs } from "@/interface/faqlist";
import getAllFaqs from "@/lib/getAllFaqs";
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

export default function UseFaqs() {
    const columns = [
        { id: "id", name: "ID" },
        { id: "title", name: "title" },
    ];

    const [faqs, setFaqs] = useState<Faqs[]>([]);
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
        async function fetchFaqs() {
            const data = await getAllFaqs();
            setFaqs(data);
            console.log(data);
        }

        fetchFaqs();
    }, []);

    return (
        <Container sx={{ minWidth: "sm", maxWidth: "xl" }}>
            <Box sx={{ marginTop: 5, marginBottom: 30 }}>
                <Typography variant="h3">AIA-SPURS FAQ</Typography>
                <Paper sx={{ width: "90%" }}>
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
                                    faqs
                                        .slice(
                                            page * rowperpage,
                                            page * rowperpage + rowperpage
                                        )
                                        .map((faq, i) => (
                                            <TableRow key={i}>
                                                {columns.map((column) => {
                                                    let value = faq[column.id];
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
                                                            <TableCell
                                                                key={column.id}
                                                            >
                                                                <Link
                                                                    href={`/faqlist/${faq.id}`}
                                                                    style={{
                                                                        textDecoration:
                                                                            "none",
                                                                        color: "inherit",
                                                                    }}
                                                                >
                                                                    {value}
                                                                </Link>
                                                            </TableCell>
                                                        );
                                                    } else {
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
                        count={faqs.length}
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
