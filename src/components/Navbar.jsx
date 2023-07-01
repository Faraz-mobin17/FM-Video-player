import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    sx={{
      position: "sticky",
      background: "#0E1924",
      top: 0,
      justifyContent: "center",
      borderBottom: "1px solid #2e2e2e",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    }}
  >
    <Link
      to="/"
      style={{ display: "flex", alignItems: "center", marginRight: "20px" }}
    >
      <img src={logo} alt="logo" height={45} />
    </Link>
    <h2 style={{ color: "#fff" }}>FM Player</h2>
    <SearchBar />
  </Stack>
);
export default Navbar;
