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
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AddBoxIcon from '@mui/icons-material/AddBox';

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
  },
  date: {
    fontWeight: 'bold',
    fontSize: '0.15rem',
    borderRadius: 8,
    color: 'white',
    padding: '1px 10px',
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
  const [openDeleteToast, setOpenDeleteToast] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // const handleClick = () => {
  //   setOpenDeleteToast(true);
  //   setOpenUpdateToast(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenDeleteToast(false);
  };

  const getAssetData = async () => {
    try {
      const data = await AssetDataService.retrieveAllAssets(AuthenticationService.getLoggedInUserName(), AuthenticationService.getLoggedInToken())
      setAsset(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const history = useHistory();

  const addAsset = () => {
    history.push(`/users/${AuthenticationService.getLoggedInUserName()}/assets/new`);
  }

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
        },
        setOpenDeleteToast(true)
    )  
  }

  useEffect(() => {
    getAssetData();
  }, []);

    console.log("Rendered")

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
          {console.log("Rendered 2")}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right">
              <Button startIcon={<AddBoxIcon />} variant="contained" onClick={ () => {addAsset()}} >
                  Add Asset
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell data-testid="column-name" className={classes.tableHeaderCell} style={{ color: 'white', fontWeight: 'bold'}}>Name</TableCell>
            <TableCell data-testid="column-current-value" className={classes.tableHeaderCell} style={{ color: 'white', fontWeight: 'bold'}}>Current Value</TableCell>
            <TableCell data-testid="column-company" className={classes.tableHeaderCell} style={{ color: 'white', fontWeight: 'bold'}}>Broker</TableCell>
            <TableCell data-testid="column-expiry-date" className={classes.tableHeaderCell} style={{ color: 'white', fontWeight: 'bold'}}>Expiry Date</TableCell>
            <TableCell data-testid="column-is-var-income" className={classes.tableHeaderCell} style={{ color: 'white', fontWeight: 'bold'}}>Is Variable Income?</TableCell>
            <TableCell className={classes.tableHeaderCell} style={{ color: 'white', fontWeight: 'bold'}}></TableCell>
            <TableCell className={classes.tableHeaderCell} style={{ color: 'white', fontWeight: 'bold'}}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {asset.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <Grid container>
                  <Grid item lg={60}>
                    <Typography data-testid="name" className={classes.name} style={{ color: 'deeppurple', fontWeight: 'bold'}}>{row.name}</Typography>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Typography data-testid="current-value" color="primary" variant="subtitle2">R$ {row.current_value}</Typography>
              </TableCell>
              <TableCell data-testid="company">{row.company}</TableCell>
              
              <TableCell data-testid="expiry-date"  style={{ fontWeight: 'bold'}}>
                {(moment(moment(row.expiryDate).format('YYYY-MM-DD') + "T00:00:00.000Z").isBefore( moment()))
                  && row.expiryDate !== null
                ?
                  <Typography className={classes.date} style={{ backgroundColor:'red'}}>
                        {moment(row.expiryDate).format('DD/MM/YYYY')}
                   </Typography> :
                  row.expiryDate !== null ? moment(row.expiryDate).format('DD/MM/YYYY') : ''
                }
                
              </TableCell>
              <TableCell>
                <Typography data-testid="is-var-income" className={classes.status} 
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
                  <IconButton data-testid="icon-update" color="primary" aria-label="update" onClick={ () => {updateAsset(row.id)}}> <EditIcon/></IconButton>
              </TableCell>
              <TableCell>
                <IconButton data-testid="icon-delete" aria-label="delete" onClick={ () => {setConfirmOpen(true); setAssetID(row.id); setAssetName(row.name)}}  > <DeleteIcon /></IconButton>
                <ConfirmDialog
                  data-testid="delete-dialog"
                  title="Delete Asset?"
                  open={confirmOpen}
                  setOpen={setConfirmOpen}
                  onConfirm={ () => {deleteAsset(assetID)}}
                >
                  Are you sure you want to delete asset {assetName} ?
                </ConfirmDialog>
                <Snackbar data-testid="toast-msg" open={openDeleteToast} autoHideDuration={6000} onClose={handleClose}  anchorOrigin={{vertical: "bottom", horizontal: "center"}}>
                  <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Asset {assetName} successfully deleted!
                  </Alert>
                </Snackbar>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Table>
        <TableFooter>
          <TableRow>
            <TablePagination
              data-testid="table-pagination"
              rowsPerPageOptions={[5, 10, 25, 1000, { label: 'All', value: -1 }]}
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