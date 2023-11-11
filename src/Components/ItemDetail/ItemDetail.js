import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ItemCount from '../ItemCount/ItemCount'
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

const ItemDetail = ({id, img, title, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = React.useState(0)

    const { addItem } = React.useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, title, price
        }
        addItem(item, quantity)
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
            {
                quantityAdded > 0 ? (
                    <Link to='/cart' className='Option'>Terminar Compra</Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                )
            }
        </CardActions>
        </Card>
    )
};

export default ItemDetail;