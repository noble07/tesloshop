import { Typography } from '@mui/material'

import { ShopLayout } from '@/components/layouts'
import { ProductList } from '@/components/products'

import { initialData } from '@/database/products'

export default function Home() {
  return (
    <ShopLayout title="Teslo-Shop - Home" pageDescription="Encuentra los mejores productos de Teslo aquí">
      <Typography variant="h1" component="h1">Tienda</Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>Todos los productos</Typography>

      <ProductList products={initialData.products as any} />
      
    </ShopLayout>
  )
}
