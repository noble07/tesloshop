import NextLink from 'next/link'
import { ShopLayout } from '@/components/layouts'
import { Chip, Grid, Link, Typography } from '@mui/material'

import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'

const colulms: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'fullName', headerName: 'Nombre Completo', width: 300 },
  {
    field: 'paid',
    headerName: 'Pagada',
    description: 'Muestra información si está pagada la orden o no',
    width: 200,
    renderCell(params: GridRenderCellParams) {
      return(
        params.row.paid
          ? <Chip color="success" label="Pagada" variant="outlined" />
          : <Chip color="error" label="No pagada" variant="outlined" />
      )
    }
  },
  {
    field: 'orderLink',
    headerName: 'Orden',
    width: 200,
    sortable: false,
    renderCell(params: GridRenderCellParams) {
      return (
        <NextLink legacyBehavior href={`/orders/${params.row.id}`} passHref>
          <Link underline="always">Ver Orden</Link>
        </NextLink>
      )
    },

  }
]

const rows = [
  { id: 1, paid: true, fullName: 'Juan Camilo Muñoz' },
  { id: 2, paid: false, fullName: 'Fernando Herrera' },
  { id: 3, paid: true, fullName: 'Patricia Espinoza' },
  { id: 4, paid: false, fullName: 'Luisa Fernanda Muñoz' },
  { id: 5, paid: false, fullName: 'Oscar Guillermo Muñoz' },
  { id: 6, paid: true, fullName: 'Beatriz Elena Zuleta' }
]

export default function HistoryPage() {
  return (
    <ShopLayout title="Historial de ordenes" pageDescription="Historial de ordenes del cliente">
      <Typography variant="h1" component="h1">Historial de ordenes</Typography>

      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={colulms}
            autoHeight
            pageSizeOptions={[10]}
            initialState={{
              pagination: {
                paginationModel: {pageSize: 10}
              }
            }}
          />
        </Grid>
      </Grid>
    </ShopLayout>
  )
}
