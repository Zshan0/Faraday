import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useHistory } from "react-router-dom"

const contests = [ ];

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'contestName', headerName: 'Contest Name', width: 180 },
  { field: 'start', headerName: 'Start Time', width: 180 },
  { field: 'end', headerName: 'End time', width: 180 },
  { field: 'participants', headerName: 'Participants', width: 180 },
];


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(entry) {
    var startDate = new Date(entry.start);
    var startString = startDate.toLocaleString('en-US')

    var endDate = new Date(entry.end);
    var endString = endDate.toLocaleString('en-US')
    return {
        ...entry,
        start: startString,
        end: endString,
    };
}


export default function List() {
    let history = useHistory();
    const entries = [
        { 
            id: 1, 
            contestName: 'Warren Buffet',
            start: 1633822992222, 
            end: 1633822992222, 
            participants: '100',
            url: 'contests/warrenbuffet'
        },
        { 
            id: 2,
            contestName: 'Elon Musk', 
            start: 2633822992222, 
            end: 1633822992222, 
            participants: '100',
            url: 'contests/elonmusk'
        }
    ];
    const rows = entries.map(createData);
    const handleClick = (row) => {
        history.push(row.url);
    };

    return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Contest </StyledTableCell>
            <StyledTableCell align="right">Start Time</StyledTableCell>
            <StyledTableCell align="right">End Time</StyledTableCell>
            <StyledTableCell align="right">Participants</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name} onClick = {() => {handleClick(row)}}>
              <StyledTableCell>{row.contestName}</StyledTableCell>
              <StyledTableCell align="right">{row.start}</StyledTableCell>
              <StyledTableCell align="right">{row.end}</StyledTableCell>
              <StyledTableCell align="right">{row.participants}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
}