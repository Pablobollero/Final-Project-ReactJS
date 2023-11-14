import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
//import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import './Item.css';

const Item = ({id, name, img, price, stock}) => {
    return (
        <Card className="tarjeta" sx={{  maxWidth: 345, borderRadius: '5rem', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#f3f3f3' }}>
        <CardMedia
            component="img"
            sx={{ height: 140 }}
            image={img}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Precio: £{price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Stock: {stock}
            </Typography>
        </CardContent>
        <CardActions>
            <Link to={`/item/${id}`} className='Button btn btn-sm mx-auto' size="small">Ver Detalle</Link>
        </CardActions>
        </Card>
    )
}

export default Item;