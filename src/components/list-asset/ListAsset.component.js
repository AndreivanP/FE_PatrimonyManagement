import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TablePagination from '@mui/material/TablePagination';
import TableFooter from '@mui/material/TableFooter';
import { makeStyles } from '@material-ui/core/styles'
import faker from '@faker-js/faker';

let USERS = []
let STATUSES = ['Active', 'Inactive', 'Blocked']

for (let i = 0; i < 14; i++) {
  USERS[i] = {
    name: faker.finance.accountName()+faker.finance.account(),
    currentValue: faker.finance.amount(),
    broker: faker.finance.account(),
    expiryDate: faker.date.future().toLocaleDateString('en-US'),
    isVariableIncome: faker.animal.dog(),
    status: STATUSES[Math.floor(Math.random() * STATUSES.length)]
  }
}

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 20,
    margin: '10px 350px',
    maxWidth: 1200
  },
  tableHeaderCell: {
    backgroundColor: theme.palette.primary.dark,
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.getContrastText(theme.palette.primary.light)
  },
  name: {
    fontWeight: 'bold',
    color: theme.palette.secondary.dark
  },
  status: {
    fontWeight: 'bold',
    fontSize: '0.75rem',
    color: 'white',
    backgroundColor: 'grey',
    borderRadius: 8,
    padding: '3px 10px',
    display: 'inline-block'
  }
}));

function ListAssetComponent() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
      <TableHead>
          <TableRow>
            <TableCell style={{ color: 'Indigo', fontWeight: 'bold'}}>+ Add Asset</TableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell} style={{ color: 'white', fontWeight: 'bold'}}>Name</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{ color: 'white', fontWeight: 'bold'}}>Current Value</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{ color: 'white', fontWeight: 'bold'}}>Broker</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{ color: 'white', fontWeight: 'bold'}}>Expiry Date</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{ color: 'white', fontWeight: 'bold'}}>Is Variable Income?</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{ color: 'white', fontWeight: 'bold'}}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {USERS.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.name}>
              <TableCell>
                <Grid container>
                  <Grid item lg={60}>
                    <Typography className={classes.name} style={{ color: 'deeppurple', fontWeight: 'bold'}}>{row.name}</Typography>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Typography color="primary" variant="subtitle2">{row.currentValue}</Typography>
              </TableCell>
              <TableCell>{row.broker}</TableCell>
              <TableCell>{row.expiryDate}</TableCell>
              <TableCell>{row.isVariableIncome}</TableCell>
              <TableCell>
                <Typography
                  className={classes.status}
                  style={{
                    backgroundColor:
                      ((row.status === 'Active' && 'green') ||
                        (row.status === 'Pending' && 'blue') ||
                        (row.status === 'Blocked' && 'orange'))
                  }}
                >{row.status}</Typography>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={USERS.length}
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
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default ListAssetComponent;