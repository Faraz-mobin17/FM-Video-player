import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      navigate("/search/${searchText}");
      setSearchText("");
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
      style={{ marginLeft: "20px" }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <IconButton
        type="submit"
        sx={{
          p: "10px",
          color: "#FF0066",
          backgroundColor: "#eee",
          border: "1px solid transparent",
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
