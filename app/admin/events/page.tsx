"use client";
import { useState, useEffect } from "react";
import * as React from "react";
import Box from "@mui/joy/Box";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Checkbox from "@mui/joy/Checkbox";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import Tooltip from "@mui/joy/Tooltip";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { visuallyHidden } from "@mui/utils";

interface EventtsList {
    id: any;
    name: string;
    phoneNum: string;
    gender: string;
    adress: string;
    reason1: string;
    reason2: string;
    reason3: string;
}
function Events(
    id: any,
    name: string,
    phoneNum: string,
    gender: string,
    adress: string,
    reason1: string,
    reason2: string,
    reason3: string
): EventtsList {
    return {
        id,
        name,
        phoneNum,
        gender,
        adress,
        reason1,
        reason2,
        reason3,
    };
}

function labelDisplayedRows({
    from,
    to,
    count,
}: {
    from: number;
    to: number;
    count: number;
}) {
    return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string }
) => number {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
    array: readonly T[],
    comparator: (a: T, b: T) => number
) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
    disablePadding: boolean;
    id: keyof EventtsList;
    label: string;
    numeric: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: "id",
        numeric: false,
        disablePadding: true,
        label: "회원아이디",
    },
    {
        id: "name",
        numeric: true,
        disablePadding: false,
        label: "회원이름",
    },
    {
        id: "phoneNum",
        numeric: true,
        disablePadding: false,
        label: "전화번호",
    },
    {
        id: "gender",
        numeric: true,
        disablePadding: false,
        label: "성별",
    },
    {
        id: "adress",
        numeric: true,
        disablePadding: false,
        label: "주소",
    },
    {
        id: "reason1",
        numeric: true,
        disablePadding: false,
        label: "응모이유1",
    },
    {
        id: "reason2",
        numeric: true,
        disablePadding: false,
        label: "응모이유2",
    },
    {
        id: "reason3",
        numeric: true,
        disablePadding: false,
        label: "응모이유3",
    },
];

interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (
        event: React.MouseEvent<unknown>,
        property: keyof EventtsList
    ) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
    const {
        onSelectAllClick,
        order,
        orderBy,
        numSelected,
        rowCount,
        onRequestSort,
    } = props;
    const createSortHandler =
        (property: keyof EventtsList) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <thead>
            <tr>
                <th style={{ width: "20" }}>
                    <Checkbox
                        indeterminate={
                            numSelected > 0 && numSelected < rowCount
                        }
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        slotProps={{
                            input: {
                                "aria-label": "select all desserts",
                            },
                        }}
                        sx={{ verticalAlign: "sub" }}
                    />
                </th>
                {headCells.map((headCell) => {
                    const active = orderBy === headCell.id;
                    return (
                        <th
                            key={headCell.id}
                            aria-sort={
                                active
                                    ? (
                                          {
                                              asc: "ascending",
                                              desc: "descending",
                                          } as const
                                      )[order]
                                    : undefined
                            }
                        >
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <Link
                                underline="none"
                                color="neutral"
                                textColor={
                                    active ? "primary.plainColor" : "primay"
                                }
                                component="button"
                                onClick={createSortHandler(headCell.id)}
                                fontWeight="lg"
                                startDecorator={
                                    headCell.numeric ? (
                                        <ArrowDownwardIcon
                                            sx={{ opacity: active ? 1 : 0 }}
                                        />
                                    ) : null
                                }
                                endDecorator={
                                    !headCell.numeric ? (
                                        <ArrowDownwardIcon
                                            sx={{ opacity: active ? 1 : 0 }}
                                        />
                                    ) : null
                                }
                                sx={{
                                    "& svg": {
                                        transition: "0.2s",
                                        transform:
                                            active && order === "desc"
                                                ? "rotate(0deg)"
                                                : "rotate(180deg)",
                                    },
                                    "&:hover": { "& svg": { opacity: 1 } },
                                }}
                            >
                                {headCell.label}
                                {active ? (
                                    <Box component="span" sx={visuallyHidden}>
                                        {order === "desc"
                                            ? "sorted descending"
                                            : "sorted ascending"}
                                    </Box>
                                ) : null}
                            </Link>
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
}

interface EnhancedTableToolbarProps {
    numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
    const { numSelected } = props;

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                py: 1,
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: "background.level1",
                }),
                borderTopLeftRadius: "var(--unstable_actionRadius)",
                borderTopRightRadius: "var(--unstable_actionRadius)",
            }}
        >
            {numSelected > 0 ? (
                <Typography sx={{ flex: "1 1 100%" }} component="div">
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    level="body-lg"
                    sx={{ flex: "1 1 100%", fontWeight: "bold" }}
                    id="tableTitle"
                    component="div"
                >
                    이벤트 참여자 정보
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton size="sm" color="danger" variant="solid">
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton size="sm" variant="outlined" color="neutral">
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Box>
    );
}

export default function TableSortAndSelectionEvents() {
    const [rows, rowchange] = useState([]);
    const [order, setOrder] = React.useState<Order>("asc");
    const [orderBy, setOrderBy] = React.useState<keyof EventtsList>("id");
    const [selected, setSelected] = React.useState<readonly string[]>([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof EventtsList
    ) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const handleSelectAllClick = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (event.target.checked) {
            const newSelected = rows.map((n: any) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, id: string) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected: readonly string[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: any, newValue: number | null) => {
        setRowsPerPage(parseInt(newValue!.toString(), 10));
        setPage(0);
    };

    const getLabelDisplayedRowsTo = () => {
        if (rows.length === -1) {
            return (page + 1) * rowsPerPage;
        }
        return rowsPerPage === -1
            ? rows.length
            : Math.min(rows.length, (page + 1) * rowsPerPage);
    };

    const isSelected = (id: string) => selected.indexOf(id) !== -1;

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
    useEffect(() => {
        fetch("http://localhost:8000/events")
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
        <Sheet variant="outlined" sx={{}}>
            <EnhancedTableToolbar numSelected={selected.length} />
            <Table
                aria-labelledby="tableTitle"
                hoverRow
                sx={{
                    "--TableCell-headBackground": "transparent",
                    "--TableCell-selectedBackground": (theme) =>
                        theme.vars.palette.success.softBg,
                    "& thead th:nth-of-type(1)": {
                        width: "40px",
                    },
                    "& thead th:nth-of-type(2)": {
                        width: "20%",
                    },
                    "& tr > *:nth-of-type(n+3)": { textAlign: "left" },
                }}
            >
                <EnhancedTableHead
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onSelectAllClick={handleSelectAllClick}
                    onRequestSort={handleRequestSort}
                    rowCount={rows.length}
                />
                <tbody>
                    {stableSort(rows, getComparator(order, orderBy))
                        .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        )
                        .map((row: any, index) => {
                            const isItemSelected = isSelected(row.id);
                            const labelId = `enhanced-table-checkbox-${index}`;

                            return (
                                <tr
                                    onClick={(event) =>
                                        handleClick(event, row.id)
                                    }
                                    role="checkbox"
                                    aria-checked={isItemSelected}
                                    tabIndex={-1}
                                    key={row.id}
                                    // selected={isItemSelected}
                                    style={
                                        isItemSelected
                                            ? ({
                                                  "--TableCell-dataBackground":
                                                      "var(--TableCell-selectedBackground)",
                                                  "--TableCell-headBackground":
                                                      "var(--TableCell-selectedBackground)",
                                              } as React.CSSProperties)
                                            : {}
                                    }
                                >
                                    <th scope="row">
                                        <Checkbox
                                            checked={isItemSelected}
                                            slotProps={{
                                                input: {
                                                    "aria-labelledby": labelId,
                                                },
                                            }}
                                            sx={{ verticalAlign: "top" }}
                                        />
                                    </th>
                                    <th id={labelId} scope="row">
                                        {row.id}
                                    </th>
                                    <td>{row.name}</td>
                                    <td>{row.phoneNum}</td>
                                    <td>{row.gender}</td>
                                    <td>{row.adress}</td>
                                    <td>{row.reason1}</td>
                                    <td>{row.reason2}</td>
                                    <td>{row.reason3}</td>
                                </tr>
                            );
                        })}
                    {emptyRows > 0 && (
                        <tr
                            style={
                                {
                                    height: `calc(${emptyRows} * 40px)`,
                                    "--TableRow-hoverBackground": "transparent",
                                } as React.CSSProperties
                            }
                        >
                            <td colSpan={9} aria-hidden />
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={9}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                    justifyContent: "flex-end",
                                }}
                            >
                                <FormControl orientation="horizontal" size="sm">
                                    <FormLabel>Rows per page:</FormLabel>
                                    <Select
                                        onChange={handleChangeRowsPerPage}
                                        value={rowsPerPage}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Option value={5}>5</Option>
                                        <Option value={10}>10</Option>
                                        <Option value={25}>25</Option>
                                    </Select>
                                </FormControl>
                                <Typography
                                    textAlign="center"
                                    sx={{ minWidth: 80 }}
                                >
                                    {labelDisplayedRows({
                                        from:
                                            rows.length === 0
                                                ? 0
                                                : page * rowsPerPage + 1,
                                        to: getLabelDisplayedRowsTo(),
                                        count:
                                            rows.length === -1
                                                ? -1
                                                : rows.length,
                                    })}
                                </Typography>
                                <Box sx={{ display: "flex", gap: 1 }}>
                                    <IconButton
                                        size="sm"
                                        color="neutral"
                                        variant="outlined"
                                        disabled={page === 0}
                                        onClick={() =>
                                            handleChangePage(page - 1)
                                        }
                                        sx={{ bgcolor: "background.surface" }}
                                    >
                                        <KeyboardArrowLeftIcon />
                                    </IconButton>
                                    <IconButton
                                        size="sm"
                                        color="neutral"
                                        variant="outlined"
                                        disabled={
                                            rows.length !== -1
                                                ? page >=
                                                  Math.ceil(
                                                      rows.length / rowsPerPage
                                                  ) -
                                                      1
                                                : false
                                        }
                                        onClick={() =>
                                            handleChangePage(page + 1)
                                        }
                                        sx={{ bgcolor: "background.surface" }}
                                    >
                                        <KeyboardArrowRightIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </Sheet>
    );
}
