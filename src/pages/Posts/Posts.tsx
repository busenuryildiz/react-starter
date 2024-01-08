import React from "react";
import { Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { addToCart, clearCart, removeFromCart } from "../../store/actions/cartActions";
function Posts() {
	const dispatch = useDispatch();

	return (
		<div>
			Posts
			<Button
				onClick={() => {
					dispatch(addToCart({ id: 1, name: "Laptop", price: 10 }));
				}}
			>
				Sepete Ekle
			</Button>
			<Button
				onClick={() => {
					dispatch(removeFromCart({ id: 1 }));
				}}
			>
				Sepetten Çıkar
			</Button>
			<Button
				onClick={() => {
					dispatch(clearCart());
				}}
			>
				Sepeti Temizle
			</Button>
		</div>
	);
}

export default Posts;