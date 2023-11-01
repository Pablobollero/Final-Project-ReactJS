import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = ({title, img, price, stock}) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={img}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Precio: £{price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Stock: {stock}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Ver Descripcion</Button>
        </CardActions>
        </Card>
    )
};    

export default Item;