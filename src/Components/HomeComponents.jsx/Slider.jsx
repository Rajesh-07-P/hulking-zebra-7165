import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, IconButton, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

let src = [
  "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Men_Desktop-1-07Nov2022.gif",
  "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_MEN_Desktop-2-07Nov2022.jpg",
  "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_MEN_Desktop-3-07Nov2022.jpg",
  "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_MEN_Desktop-4-07Nov2022.jpg",
  "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner5-desktop-MEN-07Nov2022.jpg",
  "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner6-desktop-MEN-07Nov2022.jpg",
];


export default function Slider() {
  let [index, setIndex] = useState(0);

  useEffect(()=>{
    let id=setInterval(()=>{
      setIndex((prev)=>{
        if(prev==5){
          setIndex(0);
          return ;
        };
        return prev+1
      });
    },3000)
  },[]);
  return (
    <>
      <Flex mt="20px" verticalAlign="center" maxW="90%" margin="auto" justify="center">
        <IconButton aria-label='Search database' icon={<AiOutlineLeft/>} verticalAlign="center" />
        <Image src={src[index]} alt="Dan Abramov" maxW="90%" margin="auto" display="inline-block"/>
        <IconButton aria-label='Search database' icon={<AiOutlineRight/>} verticalAlign="center" />
      </Flex>
    </>
  );
}
