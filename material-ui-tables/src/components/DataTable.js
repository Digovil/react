import {Box} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

function DataTable({columns,rows}) {

  return (
    <Box sx={{ height: 400, width: '100%'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
    
  );
}

export default DataTable;