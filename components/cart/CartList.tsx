import { useContext } from 'react'
import { CartContext } from '@/context'
import NextLink from 'next/link'
import { Box, Button, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material'
import { ItemCounter } from '../ui'
import { ICartProduct } from '@/interfaces'

interface CartListProps {
  editable?: boolean
}

const CartList = ({editable = false}: CartListProps) => {

  const { cart, updateCartQuantity } = useContext(CartContext)

  const onNewCartQuantityValue = (product: ICartProduct, newQuantityValue: number) => {
    const newProduct: ICartProduct = {
      ...product,
      quantity: newQuantityValue
    }
    updateCartQuantity(newProduct)
  }

  return (
    <>
      {
        cart.map(product => (
          <Grid key={product.slug + product.size} container spacing={2} sx={{ mb: 1 }}>
            <Grid item xs={3}>
              {/* TODO: llevar a la página del producto */}
              <NextLink legacyBehavior href={`/product/${product.slug}`} passHref>
                <Link>
                  <CardActionArea>
                    <CardMedia
                      image={`/products/${product.images}`}
                      component="img"
                      sx={{ borderRadius: '5px' }}
                    />
                  </CardActionArea>
                </Link>
              </NextLink>
            </Grid>
            <Grid item xs={7}>
              <Box display="flex" flexDirection="column">
                <Typography variant="body1">{product.title}</Typography>
                <Typography variant="body1">Talla: <strong>{product.size}</strong></Typography>

                {
                  editable
                  ? (
                    <ItemCounter
                      currentValue={product.quantity}
                      maxValue={10}
                      updateQuantity={(value) => onNewCartQuantityValue(product, value)}
                    />
                  )
                  : <Typography variant="h5">{product.quantity} {product.quantity > 1 ? 'producto' : 'productos'}</Typography>
                }
                
              </Box>
            </Grid>
            <Grid item xs={2} display="flex" alignItems="center" flexDirection="column">
              <Typography variant="subtitle1">${product.price}</Typography>

              {
                editable
                ? (
                  <Button variant="text" color="secondary">
                    Remover
                  </Button>
                )
                : ''
              }
              
            </Grid>
          </Grid>
        ))
      }
    </>
  )
}

export default CartList