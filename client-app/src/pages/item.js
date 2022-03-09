import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';
import CustomBreadcrumbs from './../components/breadcrumbs/breadcrumbs'
import { useParams } from 'react-router-dom'
import { useGetItemQuery } from "./../services/app-services";
import { useSelector } from 'react-redux';


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });


export function Item() {
    const {id}= useParams();
    const { products, breadcrumbs } = useSelector(({ products, breadcrumbs }) => ({ products: products.value, breadcrumbs: breadcrumbs.value }))
    const { data, error, isLoading, isSuccess, isError } = useGetItemQuery(id);
    let item
    if(data){
        item = data.message.item
    }

    return (
        <Grid
        container
        spacing={0}
        direction="column"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
        >
        {isLoading && "Loading..."}
            {isError && error.message}
            {isSuccess && data && (
                <>
                <Paper
                sx={{
                    backgroundColor: 'none',
                    p: 2,
                    margin: '5% 10%',
                    maxWidth: 800,
                    flexGrow: 1
                 }}>
                <CustomBreadcrumbs  breadcrumbsArr={breadcrumbs}/>
                <Grid container spacing={2}>
                    <Grid item>
                    <ButtonBase sx={{ width: 378, height: 468 }}>
                        <Img alt="complex" src={item.picture} />
                    </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                    <Grid item xs container  direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography variant="body2" gutterBottom>
                                {item.condition}
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="div">
                            {item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                { item.free_shipping ? 'Envio Gratis' : ''}
                            </Typography>
                            <Typography variant="subtitle1" component="div">
                               $ {item.price.amount}
                            </Typography>
                            <Button variant="contained" disableElevation>
                                Comprar
                            </Button>
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid container paddingTop={10}  >
                <Grid item xs container  direction="column" spacing={2} paddingLeft={ '20px' } justifyContent={"flex-start"} alignItems={'flex-start'}>
                <Typography gutterBottom variant="subtitle1" component="div">
                   Descripci&oacute;n del Producto
                </Typography>
                <Typography variant="body2" gutterBottom>
                    {item.description}
                </Typography>
                </Grid>
                </Grid>
            </Paper>
                </>

            )}
        </Grid>
    );
}