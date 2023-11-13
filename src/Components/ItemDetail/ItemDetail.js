import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)
    
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }

    return (
        <Card className="card" sx={{ maxWidth: 345 }}>
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
                        <>
                            <Link to='/cart' className="Option btn btn-success btn-sm">Finalizar Compra</Link>
                            <Link to='/productos' className="Option btn btn-success btn-sm">Seguir Comprando</Link>
                        </>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )
                }
            </CardActions>
        </Card>
    )
};

export default ItemDetail;