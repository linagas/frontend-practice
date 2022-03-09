import  React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
//Redux&Redux Toolkit
import { useDispatch } from 'react-redux';
import { changeSearch } from '../../redux/slices/search';

import { useNavigate } from 'react-router-dom';


export default function CustomBreadcrumbs({breadcrumbsArr}) {
  const [last] = breadcrumbsArr.slice(-1);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleClick =(breadcrumb) => {
    const selected = breadcrumb
    dispatch(changeSearch(selected))
    navigate({ pathname:'/items', search: `?q=${selected}`})

  }

  const breadcrumbs=() => breadcrumbsArr.map((breadcrumb, index) => {
    return (last === breadcrumb) ?
    (<Typography key={index} color="text.primary"/>)
    : (<Link underline="hover" key={index} color="inherit" onClick={() => handleClick(breadcrumb)}>{breadcrumb}</Link>)
  })

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs()}
      </Breadcrumbs>
    </Stack>
  );
}
