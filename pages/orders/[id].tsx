import NextLink from 'next/link'

import { CartList, OrderSummary } from '@/components/cart'
import { ShopLayout } from '@/components/layouts'
import { Box, Card, CardContent, Chip, Divider, Grid, Link, Typography } from '@mui/material'
import CreditCardOffOutlined from '@mui/icons-material/CreditCardOffOutlined'
import CreditScoreOutlined from '@mui/icons-material/CreditScoreOutlined'

export default function OrderPage() {
  return (
    <ShopLayout title="Resumen de la orden 1234657897" pageDescription="Resumen de la orden">
      <Typography variant="h1" component="h1">Orden: ABC123</Typography>

      {/* <Chip
        sx={{ my: 2 }}
        label="Pendiente de pago"
        variant="outlined"
        color="error"
        icon={<CreditCardOffOutlined />}
      /> */}
      <Chip
        sx={{ my: 2 }}
        label="Orden ya fue pagada"
        variant="outlined"
        color="success"
        icon={<CreditScoreOutlined />}
      />

      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Resumen (3 productos)</Typography>
              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="subtitle1">Dirección de entrega</Typography>
                <NextLink legacyBehavior href="/checkout/address" passHref>
                  <Link underline="always">
                    Editar
                  </Link>
                </NextLink>
              </Box>

              <Typography>Juan Camilo Muñoz</Typography>
              <Typography>Cl 12 # 2D - 34</Typography>
              <Typography>Medellín, Ant.</Typography>
              <Typography>Colombia</Typography>
              <Typography>+57 3158993694</Typography>

              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="end">
                <NextLink legacyBehavior href="/cart" passHref>
                  <Link underline="always">
                    Editar
                  </Link>
                </NextLink>
              </Box>

              <OrderSummary />

              <Box sx={{ mt: 3 }}>
                {/* TODO */}
                <h1>Pagar</h1>

                <Chip
                  sx={{ my: 2 }}
                  label="Orden ya fue pagada"
                  variant="outlined"
                  color="success"
                  icon={<CreditScoreOutlined />}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </ShopLayout>
  )
}
