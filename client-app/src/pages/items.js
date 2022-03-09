import React from 'react';
import List from '@mui/material/List';
import { Link } from "react-router-dom";
import { styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { useGetItemsQuery } from "./../services/app-services";
import { setProducts } from '../redux/slices/products';
import { setBreadcrumbs } from '../redux/slices/breadcrumbs'
import { CardActionArea } from "@mui/material";
import CustomBreadcrumbs from './../components/breadcrumbs/breadcrumbs'


const StyledImg = styled(CardMedia)({
    width: '284px',
    height:' 100%',
    maxHeight: '284px',
    minHeight: '284px',
})

const StyleCardActionArea = styled(CardActionArea)({
    textAlign: 'justify',
})

export const Items=() => {
    const {search, products, breadcrumbs } = useSelector(({ search, products, breadcrumbs }) => ({ search: search.value, products: products.value, breadcrumbs: breadcrumbs.value }))
    const dispatch = useDispatch();

    const { data, error, isLoading, isSuccess, isError } = useGetItemsQuery(search,{ refetchOnReconnect: true});

    if (data?.message?.items) {
        dispatch(setProducts(data.message.items))
        dispatch(setBreadcrumbs(data.message.categories))
    }


    const listItems = products.map((item, index) =>
        <div key={ `${item}#${index}`}>
            <Card sx={{ minWidth: 300 }}>
                <StyleCardActionArea sx={{ display: "flex" }}>
                    <Link to={`/item/${item.id}`}>
                        <StyledImg
                        component="img"
                        image={item.picture}
                        alt={`${item.title}`}/>
                    </Link>
                    <CardContent>
                        <Link to={`/item/${item.id}`}>
                            <Typography component="div" variant="h5">
                                $ {item.price.amount}
                            </Typography>
                        </Link>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {item.title}
                        </Typography>
                    </CardContent>
                    <CardContent>
                    <Typography sx={{ position:'absolute', top:'46px', right: '46px'}} variant="subtitle2" color="text.secondary" component="div">
                        {item.condition}
                    </Typography>
                    </CardContent>
                </StyleCardActionArea>
            </Card>
        </div>
     );

    return (
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh' }}
        >
            <Grid container alignItems="center"
        justifyContent="center" spacing={2}>
            {isLoading && "Loading..."}
            {isError && error.message}
            {isSuccess && data && (
                <Grid item xs={8} >
                    <CustomBreadcrumbs breadcrumbsArr={breadcrumbs}/>
                    <List component="nav" aria-label="list of products">
                        {listItems}
                    </List>
                </Grid>
            )}
            </Grid>

        </Grid>
    );
}