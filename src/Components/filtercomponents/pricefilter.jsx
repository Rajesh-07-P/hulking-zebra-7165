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

export default function PriceFilter() {
  return (
    <>
      <div>
        <Menu closeOnSelect={false}>
          <MenuButton as={Button} colorScheme="blue">
            Size
          </MenuButton>
          <MenuList minWidth="240px">
            <MenuOptionGroup title="Country" type="checkbox">
              <MenuItemOption value="38">38</MenuItemOption>
              <MenuItemOption value="39">39</MenuItemOption>
              <MenuItemOption value="40">40</MenuItemOption>
              <MenuItemOption value="42">42</MenuItemOption>
              <MenuItemOption value="44">44</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </div>
    </>
  );
}
