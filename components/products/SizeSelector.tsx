import { Size } from '@/interfaces'
import { Box, Button } from '@mui/material'

interface SizeSelectorProps {
  selectedSize?: Size
  sizes: Size[]

  // Method
  onSelectedSize: (size: Size) => void
}

const SizeSelector = ({selectedSize, onSelectedSize, sizes}: SizeSelectorProps) => {

  return (
    <Box>
      {
        sizes.map(size => (
          <Button
            key={size}
            size="small"
            color={selectedSize === size ? 'primary' : 'info'}
            onClick={() => onSelectedSize(size)}
          >
            {size}
          </Button>
        ))
      }
    </Box>
  )
}

export default SizeSelector