import { useContext, useState } from 'react'
import NextLink from 'next/link' 
import { useRouter } from 'next/router'

import { UIContext } from '@/context'

import { AppBar, Badge, Box, Button, IconButton, Input, InputAdornment, Link, Toolbar, Typography } from '@mui/material'
import SearchOutlined from '@mui/icons-material/SearchOutlined'
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined'
import ClearOutlined from '@mui/icons-material/ClearOutlined'

const Navbar = () => {

  const { asPath, push } = useRouter()
  const { toggleSideMenu } = useContext(UIContext)
  const [searchTerm, setSearchTerm] = useState('')
  const [isSearchVisible, setIsSearchVisible] = useState(false)

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return
    push(`/search/${searchTerm}`)
  }
 
  return (
    <AppBar>
      <Toolbar>
        <NextLink legacyBehavior href="/" passHref>
          <Link display="flex" alignItems="center">
            <Typography variant="h6">Teslo |</Typography>
            <Typography sx={{ ml: 0.5 }}>Shop</Typography>
          </Link>
        </NextLink>

        <Box flex={1} />

        <Box
          className="fadeIn"
          sx={{ display: isSearchVisible ? 'none' : { xs: 'none', sm: 'block' } }}
        >
          <NextLink legacyBehavior href="/category/men" passHref>
            <Link>
              <Button color={asPath === '/category/men' ? 'primary' : 'info'}>Hombres</Button>
            </Link>
          </NextLink>
          <NextLink legacyBehavior href="/category/women" passHref>
            <Link>
              <Button color={asPath === '/category/women' ? 'primary' : 'info'}>Mujeres</Button>
            </Link>
          </NextLink>
          <NextLink legacyBehavior href="/category/kid" passHref>
            <Link>
              <Button color={asPath === '/category/kid' ? 'primary' : 'info'}>Niños</Button>
            </Link>
          </NextLink>
        </Box>

        <Box flex={1} />

        {
          isSearchVisible
            ? (
                <Input
                  sx={{ display: { xs: 'none', sm: 'flex' } }}
                  className="fadeIn"
                  autoFocus
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  onKeyUp={e => e.key === 'Enter' ? onSearchTerm() : null}
                  type="text"
                  placeholder="Buscar..."
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setIsSearchVisible(false)}
                      >
                        <ClearOutlined />
                      </IconButton>
                    </InputAdornment>
                  }
                />
            )
            : (
              <IconButton
                className="fadeIn"
                sx={{ display: {xs: 'none', sm: 'flex' } }}
                onClick={() => setIsSearchVisible(true)}
              >
                <SearchOutlined />
              </IconButton>
            )
        }

        { /* Pantallas pequeñas */ }
        <IconButton
          sx={{ display: {xs: 'flex', sm: 'none' } }}
          onClick={ toggleSideMenu }
        >
          <SearchOutlined />
        </IconButton>

        <NextLink legacyBehavior href="/cart" passHref>
          <Link>
            <IconButton>
              <Badge badgeContent={2} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>

        <Button onClick={toggleSideMenu}>
          Menu
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
