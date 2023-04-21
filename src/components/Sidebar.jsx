import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
const selectedCategory = "New";
const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: "column",
      background: "#000",
      width: { sx: "auto", md: "250px" },
      padding: "10px",
    }}
    style={{ backgroundColor: "black", paddingLeft: "0px" }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        style={{
          background: category.name === selectedCategory && "#425266",
          color: "#fff",
        }}
        key={category.name}
        onClick={() => setSelectedCategory(category.name)}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "#fff" : "red",
            marginRight: "15px",
            fontFamily: "font-family: 'Open Sans', sans-serif",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
