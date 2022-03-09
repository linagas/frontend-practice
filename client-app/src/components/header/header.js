import React from 'react';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';

//own
import SearchForm from '../searchForm/searchForm';
import { useNavigate } from 'react-router-dom';


const StyledToolbar = styled('div')({
  backgroundColor: '#fff159',
  display: 'flex',
  border: 0,
  height: 'auto',
  minHeight: '48px'
});

const StyledButton = styled(IconButton)({
    backgroundSize:'44px 31px',
    width: '34px',
    height: '22px',
    top: '13px',

})

const StyledImg= styled('img')(({ theme }) => ({
    height: '38px',
    overflow: 'hidden',
    textIndent: '-999px',
    width: '49px',
    position:'absolute'
}))

export function Header() {
  const navigate = useNavigate();
  return (
    <AppBar position="relative">
      <StyledToolbar role={'banner'}>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0.5} columns={16} justifyContent={'center'}>
        <Grid item xs={1} >
          <Grid id='logo' item>
            <StyledButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={() => navigate("/")}>
                  <StyledImg alt="Mercado Libre Chile - Donde comprar y vender de todo" src={'https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__small.png'}/>
            </StyledButton>
          </Grid>

        </Grid>
        <Grid id="searchBar" item xs={8} >
          <SearchForm></SearchForm>
        </Grid>
      </Grid>
    </Box>
    </StyledToolbar>
</AppBar>
  );
}

export default Header;