import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <Paper
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        // setSearchText(e.target.value);
      }}
      sx={{
        borderRadius: 20,
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
      style={{
        background: "transparent",
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "#FF0066" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
