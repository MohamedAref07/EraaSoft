/** @format */

import { Card } from "./Components/Card";
import { Box } from "@chakra-ui/react";
import "./index.css";
export default function App() {
  const productDetails = [
    {
      urlImage: "public/assets/white_front_hoodie_mockup 1.png",
      ptoductTitle: "Man Hoodie",
      productPrice: 17.99,
      productDesc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, dolores.",
      active: false,
    },
    {
      urlImage: "public/assets/black_hoodie_mockup 1.png",
      ptoductTitle: "Man Hoodie",
      productPrice: 20.99,
      productDesc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, dolores.",
      active: true,
    },
    {
      urlImage: "public/assets/white_front_hoodie_mockup 1.png",
      ptoductTitle: "Man Hoodie",
      productPrice: 17.99,
      productDesc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, dolores.",
      active: false,
    },
  ];
  return (
    <Box as="section" className="Container" width={"100%"} m={"2rem auto"}>
      <Box
        as="div"
        className="cards"
        width={"80%"}
        m={"auto"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"2rem"}
      >
        {productDetails.map((product, index) => (
          <Card
            key={index}
            urlImage={product.urlImage}
            productTitle={product.productTitle}
            productPrice={product.productPrice}
            productDesc={product.productDesc}
            active={product.active}
          />
        ))}
      </Box>
    </Box>
  );
}
