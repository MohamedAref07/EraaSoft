/** @format */

import { Box } from "@chakra-ui/react";

export const Card = ({
  urlImage,
  productTitle,
  productPrice,
  productDesc,
  active,
}) => {
  return (
    <Box
      className={active ? "CardContainer active" : "CardContainer"}
      w={"100% / 3"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
      transition={".5s"}
      _hover={{
        backgroundColor: "cadetblue",
        color: "#fff",
        borderRadius: "15px",
        padding: "1rem 0",
        transform: "scale(1.1)",
      }}
    >
      <Box className="cardImage" w={"100%"}>
        <img src={urlImage} alt="" width={"100%"} />
      </Box>
      <Box className="cardTitle" marginBottom={"1rem"}>
        <Box as="h2" fontSize={"1.5rem"} fontWeight={"800"}>
          {productTitle}
        </Box>
        <p>{productDesc}</p>
      </Box>
      <Box
        className="description"
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        w={"100%"}
        marginBottom={"1.5rem"}
      >
        <Box
          as="div"
          className="sizes"
          display={"flex"}
          gap={"5px"}
          fontSize={"16px"}
        >
          <Box as="span">S</Box>
          <Box as="span">M</Box>
          <Box as="span">L</Box>
          <Box as="span">XL</Box>
        </Box>
        <Box as="div" className="price" fontSize={"1.5rem"} fontWeight={"800"}>
          $ {productPrice}
        </Box>
      </Box>
      <Box className="addToCartBtn" width={"80%"} m={"auto"} textColor={"gold"}>
        <Box
          as="button"
          width={"100%"}
          padding={".5rem 1rem"}
          border={"2px solid gold"}
          color={"gold"}
          textTransform={"uppercase"}
          borderRadius={"30px"}
          fontSize={"1.2rem"}
          fontWeight={"700"}
          transition={".5s"}
          sx={{
            "&:hover": {
              background: "gold",
              color: "white",
            },
          }}
        >
          Add To Cart
        </Box>
      </Box>
    </Box>
  );
};
