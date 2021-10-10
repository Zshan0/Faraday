import React, {useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const columns = [
  { field: 'username', headerName: 'User Name', width: 180 },
  { field: 'netAsset', headerName: 'Net Assets', width: 180 },
  { field: 'cash', headerName: 'Cash', width: 180 },
  { field: 'return', headerName: 'Overall Return', width: 180 },
  { field: 'portfolio', headerName: 'PortFolio', width: 180 },

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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};



export default function LeaderBoard({contestName, leaderBoardList}) {
    
    return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
        <TableRow>
            <StyledTableCell>User Name</StyledTableCell>
            <StyledTableCell align="right">Net Assets</StyledTableCell>
            <StyledTableCell align="right">Cash</StyledTableCell>
            <StyledTableCell align="right">Overall Returns</StyledTableCell>
            <StyledTableCell align="right">PortFolio</StyledTableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        {leaderBoardList.map((row) => (
            <StyledTableRow key={row.username}>
            <StyledTableCell>{row.username}</StyledTableCell>
            <StyledTableCell align="right">{row.profit}</StyledTableCell>
            <StyledTableCell align="right">{row.netAsset}</StyledTableCell>
            <StyledTableCell align="right">{row.cash}</StyledTableCell>
            <StyledTableCell align="right">{row.portfolio}</StyledTableCell>
            </StyledTableRow>
        ))}
        </TableBody>
    </Table>
    </TableContainer>
    );
}