import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { 
    CheckoutItemContainer, 
    ImageContainer, 
    TextContainer, 
    QuantityContainer, 
    RemoveButton 
} from './checkout-item.styles.jsx'

const CheckoutItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>&#10095;</div>
            </QuantityContainer>
            <span className='price'>{price}</span>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
};

export default CheckoutItem;