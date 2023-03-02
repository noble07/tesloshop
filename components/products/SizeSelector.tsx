import { Size } from '@/interfaces'
import { Box, Button } from '@mui/material'

interface SizeSelectorProps {
  selectedSize?: Size
  sizes: Size[]
}

const SizeSelector = ({selectedSize, sizes}: SizeSelectorProps) => {
  return (
    <Box>
      {
        sizes.map(size => (
          <Button
            key={size}
            size="small"
            color={selectedSize === size ? 'primary' : 'info'}
          >
            {size}
          </Button>
        ))
      }
    </Box>
  )
}

export default SizeSelector