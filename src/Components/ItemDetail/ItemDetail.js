import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
    }

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
        <CardActions className='count'>
            {
                quantityAdded > 0 ? (
                    <Link to='/cart' className="Option btn btn-success btn-sm">Finalizar Compra</Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                )
            }
        </CardActions>
        </Card>
    )
};

export default ItemDetail;