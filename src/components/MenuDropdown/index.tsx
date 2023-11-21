import { FunctionComponent, ReactNode } from "react";
import { Dropdown, MenuProps } from "antd";
interface MenuDropdownProps {
  children: ReactNode;
  menu: Array<any>;
}

const MenuDropdown: FunctionComponent<MenuDropdownProps> = ({
  children,
  menu,
}) => {
  const items: MenuProps["items"] = menu;
  return (
    <Dropdown
      menu={{ items }}
      placement="bottomLeft"
      arrow={false}
      align={{ offset: [-8, 8] }}
      dropdownRender={(dropdownMenu) => {
        return (
          <div
            style={{
              borderTop: "2px solid #ff630e",
              borderRadius: "5px",
              width: "max-content",
              minWidth: "200px",
            }}
          >
            <div style={{ borderBottom: "1px solid green" }}>
              {dropdownMenu}
            </div>
          </div>
        );
      }}
    >
      {children}
    </Dropdown>
  );
};

export default MenuDropdown;
