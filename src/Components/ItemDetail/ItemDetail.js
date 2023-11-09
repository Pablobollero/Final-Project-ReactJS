import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ItemCount from '../ItemCount/ItemCount'
import Typography from '@mui/material/Typography';

const ItemDetail = ({img, title, description, price, stock}) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            sx={{ height: 345 }}
            image={img}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {title}
            </Typography>
            <Typography variant="body2" color="warning.light">
            {description}
            </Typography>
        </CardContent>
        <CardContent>    
            <Typography variant="body2" color="text.secondary">
            Precio: £{price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Stock: {stock}
            </Typography>
        </CardContent>
        <CardActions>
        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/>
        </CardActions>
        </Card>
    )
};

export default ItemDetail;