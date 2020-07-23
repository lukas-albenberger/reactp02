import React, {Component} from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const StyledSideNav = styled.div`
    position: fixed;
    height: 100%;
    width: 75px;
    z-index: 1;
    top: 3.4em;
    background-color: #222;
    overflow-x: hidden;
    padding-top: 10px;
`;

class SideNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activePath: '/',
            items: [
                {
                    path: '/',
                    name: 'Home',
                    css: 'fa fa-fw fa-home',
                    key: 1
                },
                {
                    path: '/todo',
                    name: 'ToDo',
                    css: 'fa fa-fw fa-todo',
                    key: 2
                },
                {
                    path: '/weather',
                    name: 'Weather',
                    css: 'fa fa-fw fa-weather',
                    key: 3
                },
                {
                    path: '/NoMatch',
                    name: 'NoMatch',
                    css: ' fas fa-hashtag',
                    key: 4
                },
            ]
        }
    }

    onItemClick = (path) => {
        this.setState({ activePath: path })
    }

    render() {
        const { items, activePath } = this.state
        return(
            <StyledSideNav>
                {
                    items.map((item) => {
                        return (
                            <NavItem
                                path={item.path}
                                name={item.name}
                                css={item.css}
                                onItemClick={this.onItemClick}
                                active={item.path === activePath} 
                                key={item.key}
                            />
                        )
                    })
                }
            </StyledSideNav>
        )
    }
}

const StyledNavItem = styled.div`
    height: 70px;
    width: 75px;
    text-align: center;
    margin-bottom: 0;
    a {
        font-size: 2.7em;
        color: ${(props) => props.active ? "white" : "#9FFFCB"};
        :hover {
            opacity: 0.7;
            text-decoration: none;
        }
    }
`;

class NavItem extends Component {
    handleClick = () => {
        const { path, onItemClick } = this.props
        onItemClick(path)
    }
    render() {
        const { active } = this.props
        return(
            <StyledNavItem active={active}>
                <Link
                to={this.props.path}
                className={this.props.css}
                onClick={this.handleClick}>
                    <NavIcon></NavIcon>
                </Link>
            </StyledNavItem>
        )
    }
}

const NavIcon = styled.div`

`;

export default class Sidebar extends Component {
    render() {
        return (
            <SideNav>
                <StyledSideNav>

                </StyledSideNav>
            </SideNav>
        )
    }
}