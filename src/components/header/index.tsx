import React, { memo } from "react";
import { Menu, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

const MainHeader = () => {
    return (
        <Menu borderless secondary id="mainHeader" color="blue">
            <Menu.Item>
                <Header floated="left" as={Link} to="/">
                    registry
                </Header>
            </Menu.Item>
        </Menu>
    );
};

export const MemoisedMainHeader = memo(MainHeader);
