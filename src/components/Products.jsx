import { useCart } from "../hooks/useCart";
import React from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";

export default function Products({ products }) {
    const { addToCart, cart, removeFromCart } = useCart();

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    };

    return (
        < div className="gap-8 grid grid-cols-1 px-14 sm:grid-cols-2 sm:px-10 md:grid-cols-3 md:px-16 lg:grid-cols-3 lg:px-36 xl:grid-cols-4 py-10">
            {
                products.map((product) => {
                    const isProductInCart = checkProductInCart(product);

                    return (
                        <Card shadow="sm" key={product.id} isPressable onPress={() => console.log("item pressed")} className="transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 duration-300">
                            <CardHeader className="overflow-visible p-0 flex justify-center ">
                                <Image
                                    shadow="sm"
                                    radius="lg"
                                    width="100%"
                                    alt={product.title}
                                    className="w-full h-[224px] object-cover"
                                    src={product.thumbnail}
                                />
                            </CardHeader>
                            <CardBody className="text-small justify-between">
                                <b>{product.title}</b>
                                <p className="text-default-500">${product.price}</p>
                            </CardBody>
                            <CardFooter className="flex justify-center p-0">
                                <Button
                                    className="w-full bg-black text-white text-[15px] hover:bg-[#2f82ff] hover:text-black"
                                    onClick={() => isProductInCart
                                        ? removeFromCart(product)
                                        : addToCart(product)}
                                >
                                    {
                                        isProductInCart
                                            ? <div className="flex gap-2 items-center">
                                                <p>Remove</p>
                                                <ion-icon name="bag-remove-outline"></ion-icon>
                                            </div>
                                            : <div className="flex gap-2 items-center">
                                                <p>Add</p>
                                                <ion-icon name="bag-add-outline"></ion-icon>
                                            </div>
                                    }
                                </Button>
                            </CardFooter>
                        </Card>
                    );
                })}
        </div >
    );
};