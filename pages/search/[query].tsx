import { GetServerSideProps } from 'next'
import { Box, Typography } from '@mui/material'

import { ShopLayout } from '@/components/layouts'
import { ProductList } from '@/components/products'

import { getAllProducts, getProductsByTerm } from '@/database/dbProducts'
import { IProduct } from '@/interfaces'

interface SearchPageProps {
  products: IProduct[]
  foundProducts: boolean
  query: string
}

export default function SearchPage({products, foundProducts, query}: SearchPageProps) {
  return (
    <ShopLayout title="Teslo-Shop - Search" pageDescription="Encuentra los mejores productos de Teslo aquí">
      <Typography variant="h1" component="h1">Buscar productos</Typography>

      {
        foundProducts
          ? <Typography variant="h2" sx={{ mb: 1 }} textTransform="capitalize">Término: {query}</Typography>
          : (
            <Box display="flex">
              <Typography variant="h2" sx={{ mb: 1 }}>No econtramos ningún producto</Typography>
              <Typography variant="h2" sx={{ ml: 1 }} color="secondary" textTransform="capitalize">{query}</Typography>
            </Box>
          )
      }

      <ProductList products={products} />
    </ShopLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async({params}) => {
  const { query = '' } = params as { query: string }

  if (query.length === 0) {
    return {
      redirect: {
        destination: '/',
        permanent: true
      }
    }
  }

  let products = await getProductsByTerm(query)
  const foundProducts = products.length > 0

  // TODO: retornar otros productos
  if (!foundProducts) {
    // TODO: obtener todos los productos
    products = await getAllProducts()
  }

  return {
    props: {
      products,
      foundProducts,
      query
    }
  }
}
