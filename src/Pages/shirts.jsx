import { useEffect, useState } from "react";
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Image,
  Checkbox,
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
  
} from "@chakra-ui/react";
import { CheckIcon, ChevronDownIcon } from "@chakra-ui/icons";
import PriceFilter from "../Components/filtercomponents/pricefilter";

export default function Shirts() {
  let [data, setData] = useState([]);

  useEffect(() => {
    function getdata() {
      fetch(" http://localhost:8000/products")
        .then((res) => res.json())
        .then((json) => setData(json));
    }
    getdata();
  }, []);

  return (
    <>
      <div style={{ maxWidth: "1200px", margin: "auto" }}>
        <h1 style={{ display: "flex", justifyContent: "start" }}>
          Casual Shirts
        </h1>
        {/* <div>
          <Menu closeOnSelect={false}>
            <MenuButton as={Button} colorScheme="blue">
              MenuItem
            </MenuButton>
            <MenuList minWidth="240px">
              <MenuOptionGroup title="Order" type="radio">
                <MenuItemOption value="asc">Ascending</MenuItemOption>
                <MenuItemOption value="desc">Descending</MenuItemOption>
              </MenuOptionGroup>
              <MenuDivider />
              <MenuOptionGroup title="Country" type="checkbox">
                <MenuItemOption value="email">Email</MenuItemOption>
                <MenuItemOption value="phone">Phone</MenuItemOption>
                <MenuItemOption value="country">Country</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </div> */}
        <PriceFilter/>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
          {data.map((elem) => {
            return (
              <div style={{ width: "200px", height: "200px" }}>
                <img src={elem.image1} alt="" style={{ width: "100%" }} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
