import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import Container from '@mui/material/Container';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LeaderBoard from './LeaderBoard';
import * as data from './RELIANCE.json';
import ReactApexCharts from 'react-apexcharts'
import moment from 'moment'

import { getLeaderBoard } from './getLeaderboard';


function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}


TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, calories, fat) {
    return { name, calories, fat };
}
  
  const rows = [
    createData('Cupcake', 305, 3.7),
    createData('Donut', 452, 25.0),
    createData('Eclair', 262, 16.0),
    createData('Frozen yoghurt', 159, 6.0),
    createData('Gingerbread', 356, 16.0),
    createData('Honeycomb', 408, 3.2),
    createData('Ice cream sandwich', 237, 9.0),
    createData('Jelly Bean', 375, 0.0),
    createData('KitKat', 518, 26.0),
    createData('Lollipop', 392, 0.2),
    createData('Marshmallow', 318, 0),
    createData('Nougat', 360, 19.0),
    createData('Oreo', 437, 18.0),
  ].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const ModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    height: 600,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    overflow: 'scroll',
    p: 4,
  };

const chartStyle = {
    justifyItems: 'center',
    alignItems: 'center',
    mt: 5
}

function ModalCustom({ open, handleClose, row, data}) {
    if (!open) {
        return(
            <div>
            </div>
        );
    }


    const series = [{ data: data }]
    const options = {
        chart: {
            type: 'candlestick',
            height: 500
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        }
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={ModalStyle}>
                           <Typography variant="h3" >
                                {row.name}
                            </Typography>
                        <Box sx={chartStyle} >
                        <ReactApexCharts options={options} series={series} type="candlestick" height={450} />
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}

function ModalLeaderBoard({ open, handleClose, leaderBoardList}) {
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={ModalStyle}>
                      <Typography variant="h3" sx={{mb: 6}}>
                        Leaderboard
                      </Typography>
                    <Box>
                        <LeaderBoard 
                            contestName="Warren Buffet"
                            leaderBoardList={leaderBoardList}
                        />
                    </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}

export default function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);
  const [rowModal, setRowModal] = React.useState(null);
  const [sample, setSamples] = React.useState([]);

  const [leaderModal, setLeaderModal] = React.useState(false);
  const [leaderBoardList, setLeaderBoardList] = React.useState([ ]);

  const [tempFlag, setTempFlag] = React.useState(false);

  React.useEffect(() => {
      if(!tempFlag) {
        getLeaderBoard("Warren Buffet").then(x => {
            setLeaderBoardList(x);
            setTempFlag(true);
        })
      } 
  });

  const getDate = (date) => { 
      var newdate = moment(date, "DD-MMM-YYYY").toDate();
      return newdate;
  }

  const getData = () => {
      function parse(x) { return parseFloat(x.replace(/,/g, '')); }
      var temp = []
      for (let i in data['default']) {
          temp.push({
              x: getDate(data['default'][i]["Date"]),
              y: [
                parse(data['default'][i]["OPEN"]),
                parse(data['default'][i]["HIGH"]),
                parse(data['default'][i]["LOW"]),
                parse(data['default'][i]["close"]),
              ]
          })
      }
      setSamples(temp);
  }



  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClick = (row) => {
      setOpen(true);
      setRowModal(row);
      getData();
  }

  const handleClose = () => setOpen(false);

  const handleButton = () => {
      setLeaderModal(true);
  }
  const handleLeaderClose = () => setLeaderModal(false);

  return (
      <Container fixWidth>
        <Box>
            <ModalCustom
                open={open}
                handleClose={handleClose}
                row={rowModal}
                data={sample}
            />
        </Box>
        <Box sx={{ mt: 20}} boxShadow={3}>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell>Name </TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">% Change</TableCell>
          </TableRow>
        </TableHead>
            <TableBody>
            {(rowsPerPage > 0
                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : rows
            ).map((row) => (
                <TableRow key={row.name} onClick = {() => {handleClick(row)}}>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                    {row.calories}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                    {row.fat}
                </TableCell>
                </TableRow>
            ))}

            {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
                </TableRow>
            )}
            </TableBody>
            <TableFooter>
            <TableRow>
                <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                    inputProps: {
                    'aria-label': 'rows per page',
                    },
                    native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
                />
            </TableRow>
            </TableFooter>
        </Table>
        </TableContainer>
        </Box>
        <Box>
            <ModalLeaderBoard
                open={leaderModal}
                handleClose={handleLeaderClose}
                leaderBoardList={leaderBoardList}
            />
        </Box>
        <Box sx={{mt: 6}} >
            <Button variant="outlined" onClick={handleButton}>Leaderboard</Button>
        </Box>
    </Container>
  );
}
