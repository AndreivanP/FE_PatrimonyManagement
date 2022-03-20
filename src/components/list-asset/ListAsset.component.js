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
import { makeStyles } from '@material-ui/core/styles';
import faker from '@faker-js/faker';
import AuthenticationService from '../../authentication/AuthenticationService';
import AssetDataService from '../../api/AssetDataService';
import AssetControlDataService from "../../api/AssetControlDataService"
import ConfirmDialog from "./ConfirmDialog.component"
import { useEffect, useState } from "react";
import moment from 'moment';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from "react-router"

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
    minWidth: 650
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
    padding: '3px 40px',
    display: 'inline-block'
  }
}));

function ListAssetComponent() {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [assetID, setAssetID] = useState();
  const [assetName, setAssetName] = useState();

  const [asset, setAsset] = useState([]);
  const [search, setSearch] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getAssetData = async () => {
    try {
      const data = await AssetDataService.retrieveAllAssets(AuthenticationService.getLoggedInUserName(), AuthenticationService.getLoggedInToken())
      console.log(data)
      setAsset(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const history = useHistory();

  const updateAsset = (id) => {
      history.push(`/users/${AuthenticationService.getLoggedInUserName()}/assets/${id}`);
  }

  const deleteAsset = (id) => {
    console.log("Deleted asset id "+id)
    AssetDataService.deleteAsset(AuthenticationService.getLoggedInUserName(), id, AuthenticationService.getLoggedInToken())
    .then(
        response => {
            AssetControlDataService.createAssetCurrentValue(AuthenticationService.getLoggedInUserName(), AuthenticationService.getLoggedInToken());
            getAssetData();
        }
    )  
  }

  useEffect(() => {
    getAssetData();
  }, []);

  console.log("xablay "+assetID)

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
            <TableCell className={classes.tableHeaderCell} style={{ color: 'white', fontWeight: 'bold'}}></TableCell>
            <TableCell className={classes.tableHeaderCell} style={{ color: 'white', fontWeight: 'bold'}}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {asset.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.name}>
              <TableCell>
                <Grid container>
                  <Grid item lg={60}>
                    <Typography className={classes.name} style={{ color: 'deeppurple', fontWeight: 'bold'}}>{row.name}</Typography>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Typography color="primary" variant="subtitle2">R$ {row.current_value}</Typography>
              </TableCell>
              <TableCell>{row.company}</TableCell>
              <TableCell>{row.expiryDate !== null ? moment(row.expiryDate).format('DD/MM/YYYY') : '' }</TableCell>
              <TableCell>
                <Typography className={classes.status} 
                style={
                    {backgroundColor:((row.is_variable_income === true && 'blue') || (row.is_variable_income === false && 'Green'))}
                  }
                  >
                {row.is_variable_income.toString() === 'true' ? 'Yes' : 'No'}
                </Typography>
              </TableCell>
              {/* <TableCell>
                <Typography
                  className={classes.status}
                  style={{
                    backgroundColor:
                      ((row.is_active === true && 'green') || (row.is_active === false && 'red'))
                  }}
                >{row.is_active.toString()}</Typography>
              </TableCell> */}
              <TableCell>
                  <IconButton color="primary" aria-label="update" onClick={ () => {updateAsset(row.id)}} > <EditIcon/></IconButton>
              </TableCell>
              <TableCell>
                <IconButton aria-label="delete" onClick={ () => {setConfirmOpen(true); setAssetID(row.id); setAssetName(row.name)}}  > <DeleteIcon /></IconButton>
                <ConfirmDialog
                  title="Delete Asset?"
                  open={confirmOpen}
                  setOpen={setConfirmOpen}
                  onConfirm={ () => {deleteAsset(assetID)}}
                >
                  Are you sure you want to delete asset {assetName} ?
                </ConfirmDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={asset.length}
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