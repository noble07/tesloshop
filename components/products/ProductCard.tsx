import { IProduct } from '@/interfaces'
import { Grid, Card, CardActionArea, CardMedia } from '@mui/material'

interface ProductCardProps {
  product: IProduct
}

const ProductCard = ({product}: ProductCardProps) => {
  return (
    <Grid item xs={6} sm={4} key={product.slug}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image={`products/${product.images[0]}`}
            alt={product.title}
          >
          </CardMedia>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default ProductCard