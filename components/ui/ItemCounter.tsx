import { Box, IconButton, Typography } from '@mui/material'
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'

interface ItemCounterProps {
  currentValue: number
  maxValue: number

  // Methods
  updateQuantity: (newQuantity: number) => void
}

const ItemCounter = ({currentValue, maxValue, updateQuantity}: ItemCounterProps) => {
  return (
    <Box display="flex" alignItems="center">
      <IconButton
        onClick={() => currentValue > 1 ? updateQuantity(currentValue - 1) : ''}
      >
        <RemoveCircleOutline />
      </IconButton>
      <Typography sx={{ width: 40, textAlign: 'center' }}>{currentValue}</Typography>
      <IconButton
        onClick={() => currentValue < maxValue ? updateQuantity(currentValue + 1) : ''}
      >
        <AddCircleOutline />
      </IconButton>
    </Box>
  )
}

export default ItemCounter