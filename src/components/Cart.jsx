import { useCart } from "../hooks/useCart";
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Divider } from "@nextui-org/react";

function CartItem({ thumbnail, price, title, quantity, addToCart }) {
    return (
        <li>
            <div className="flex justify-between">
                <img src={thumbnail} alt={title} className="w-28 rounded-lg" />
                <div className="text-right">
                    <p className="font-bold text-small sm:text-medium">{title}</p>
                    <p className="text-small sm:text-medium text-zinc-400">${price}</p>
                </div>
            </div>
            <div className="flex justify-center mt-2 mb-2 gap-4 items-center">
                <p className="font-bold text-medium sm:text-large">Quantity: <span className="text-zinc-500">{quantity}</span></p>
                <button onClick={addToCart} className="flex justify-center px-2 py-1 items-center rounded-lg bg-zinc-300 text-black hover:bg-zinc-800 hover:text-white">
                    <ion-icon name="add-outline"></ion-icon>
                </button>
            </div>
            <Divider className="mb-4" />
        </li>
    );
};

export default function Cart() {
    const { cart, clearCart, addToCart } = useCart();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [modalPlacement] = React.useState("auto");

    return (
        <div className="flex flex-col gap-2">
            <Button isIconOnly onPress={onOpen} className="bg-transparent text-[27px] hover:text-white transition-all duration-300">
                <ion-icon name="cart-outline"></ion-icon>
            </Button>
            <Modal
                isOpen={isOpen}
                placement={modalPlacement}
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Shopping Cart</ModalHeader>
                            <ModalBody>
                                <ul>
                                    {cart.map(product => (
                                        <CartItem
                                            key={product.id}
                                            addToCart={() => addToCart(product)}
                                            {...product}
                                        />
                                    ))}
                                </ul>
                                <center>
                                    <Button onClick={clearCart} variant="bordered" className="flex gap-2 justify-center items-center text-[18px] w-auto border-black">
                                        Clear
                                        <ion-icon name="trash-outline"></ion-icon>
                                    </Button>
                                </center>
                            </ModalBody>
                            <ModalFooter>
                                <Button onPress={onClose} className="text-[15px]" color="danger" variant="shadow">
                                    Close
                                </Button>
                                <Button onPress={onClose} className="text-[15px]" color="warning" variant="shadow">
                                    Buy
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
};