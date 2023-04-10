import type { GetStaticPaths, GetStaticProps } from 'next'

import { Box, Button, Chip, Grid, Typography } from '@mui/material'


import { ShopLayout } from '@/components/layouts'
import { ProductSlideshow, SizeSelector } from '@/components/products'
import { ItemCounter } from '@/components/ui'

import { getAllProductsSlugs, getProductBySlug } from '@/database/dbProducts'
import { IProduct } from '@/interfaces'

interface ProductPageProps {
  product: IProduct
}

export default function ProductPage({product}: ProductPageProps) {

 // const router = useRouter()
 // const { products: product, isLoading } = useProducts(`/products/${router.query.slug}`)
 
  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlideshow images={product.images} />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Box display="flex" flexDirection="column">
            {/* titulos */}
            <Typography variant="h1" component="h1">{product.title}</Typography>
            <Typography variant="subtitle1" component="h2">${product.price}</Typography>

            {/* Cantidad */}
            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle2">Cantidad</Typography>
              {/* ItemCounter */}
              <ItemCounter />
              <SizeSelector
                selectedSize={product.sizes[0]}
                sizes={product.sizes}
               />
            </Box>

            {/* Agregar al carrito */}
            {
              product.inStock > 0
                ? (
                  <Button color="secondary" className="circular-btn">
                  Agregar al carrito
                  </Button>
                )
                : (
                  <Chip label="No hay disponibles" color="error" variant="outlined" />
                )
            }

            {/* Descripción */}
            <Box sx={{mt: 3}}>
              <Typography variant="subtitle2">Descripción</Typography>
              <Typography variant="body2">{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

//export const getServerSideProps: GetServerSideProps = async ({params}) => {
//  const { slug = '' } = params as { slug: string }
//
//  const product = await getProductBySlug(slug as string)
// 
//  if (!product) {
//    return {
//      redirect: {
//        destination: '/',
//        permanent: false
//      }
//    }
//  }
//
//  return {
//    props: {
//      product
//    }
//  }
//}

export const getStaticPaths: GetStaticPaths = async() => {

  const slugs = await getAllProductsSlugs()

  const paths = slugs.map(({slug}) => ({
    params: {slug}
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const { slug = '' } = params as { slug: string }
  const product = await getProductBySlug(slug)

  if (!product) return {
    redirect: {
      destination: '/',
      permanent: false
    }
  }
  
  return {
    props: {
      product
    },
    revalidate: 60*60*24
  }
}
