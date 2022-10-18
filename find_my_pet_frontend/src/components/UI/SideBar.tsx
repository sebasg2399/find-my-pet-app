import styled from "@emotion/styled";
import { colors, fonts } from "assets";
import { HiHome } from "react-icons/hi";
import { MdPets } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { TiWarning } from "react-icons/ti";
import { BiLogOut } from "react-icons/bi";
import { useAuth } from "context/AuthContext";
const Wrapper = styled.div<Partial<Props>>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000065;
  display: ${(props) => (props.active ? "block" : "none")};
  /* display: none; */
`;
const StyledSideBar = styled.aside<Partial<Props>>`
  position: relative;
  width: 70%;
  height: 100%;
  border-radius: 0 1rem 1rem 0;
  overflow: hidden;
  background-color: ${colors.yellow.regular};
  background-color: ${colors.gray.dark};
  left: -800px;
  transform: translateX(${(props) => (props.active ? "800px" : "0")});
`;
const Header = styled.div`
  height: 7.5rem;
  margin: 1rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: center;
  & > svg {
    font-size: 2rem !important;
  }
  border-bottom: 2px solid white;
`;
const UserName = styled.div`
  display: flex;
  flex-direction: column;
  & > h5 {
    font-family: ${fonts.secondary};
    font-size: 1.25rem;
    font-weight: 500;
    text-transform: capitalize;
  }
`;
const Body = styled.ul`
  list-style: none;
  display: flex;
  height: 100%;
  flex-direction: column;
`;
const Item = styled.li`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  &:last-child {
    justify-self: flex-end;
  }
  & p {
    font-family: ${fonts.secondary};
  }
  padding: 2rem;
  &:hover {
    background-color: white;
    color: black;
  }
`;

type Props = {
  active: boolean;
  toggle: (active: boolean) => void;
};

export const SideBar = ({ active, toggle }: Props) => {
  const { user, AuthLogout } = useAuth();
  return (
    <Wrapper
      active={active}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(false);
      }}
    >
      <StyledSideBar
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        active={active}
      >
        <Header>
          <MdPets />
          <UserName>
            <p>Hey</p>
            <h5>
              {user?.first_name} {user?.last_name[0]}
            </h5>
          </UserName>
        </Header>
        <Body>
          <Item>
            <HiHome />
            <p>Home</p>
          </Item>
          <Item>
            <MdPets />
            <p>My Pets</p>
          </Item>
          <Item>
            <TiWarning />
            <p>My Reports</p>
          </Item>
          <Item>
            <FaUserCircle />
            <p>My Profile</p>
          </Item>
          <Item onClick={() => AuthLogout()}>
            <BiLogOut strokeWidth={1} />
            <p>Logout</p>
          </Item>
        </Body>
      </StyledSideBar>
    </Wrapper>
  );
};
