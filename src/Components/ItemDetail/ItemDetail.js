import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            sx={{ height: 345 }}
            image={img}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {name}
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
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad Agregada ', quantity)}/>
        </CardActions>
        </Card>
    )
};

export default ItemDetail;