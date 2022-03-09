import React, { useState, useCallback } from 'react'
//Material
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
//Redux&Redux Toolkit
import { useDispatch} from 'react-redux'
import { changeSearch } from '../../redux/slices/search';

import { useNavigate } from 'react-router-dom';


const Search = styled('div')(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position:'absolute'
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input:hover': {     cursor: 'pointer'  },
    '& .MuiInputBase-input:focus': {     cursor: 'auto'   },
    '& .MuiInputBase-input': {
      cursor: 'pointer',
      backgroundColor: theme.palette.common.white,
      color:theme.palette.common.black,
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(2)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '40ch',
      },
    },
  }));

  const StyledButton = styled(Button)(({theme}) =>({
    backgroundColor: "#F3F7F7",
    color: "black",
    minWidth: '45px'

  }))

export default function SearchForm() {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const onChangeSearch = (e) => {
    const searchWord = e.target.value
    setSearch(searchWord)
    ;
  }

  const goToItems = () => {
    dispatch(changeSearch(search))
    navigate({ pathname:'/items', search: `?q=${search}`})

  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      goToItems()
    }
  }

  return (
    <Search>
    <SearchIconWrapper >
    <StyledInputBase
        fullWidth
        sx={{ ml: 1, flex: 1 }}
        placeholder="Nunca dejes de buscar"
        onChange={(e) => onChangeSearch(e)}
        onKeyDown={(e) => handleKeyDown(e)}
        inputProps={{ "aria-label": "Nunca dejes de buscar" ,  value: search }}
      />
      <StyledButton startIcon={<SearchIcon />} onClick={() => goToItems()} />
      </SearchIconWrapper>
    </Search>
  )
}



