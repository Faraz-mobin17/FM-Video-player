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
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        style={{
          background: category.name === selectedCategory && "#FF0066",
          color: "#fff",
        }}
        key={category.name}
        onClick={() => setSelectedCategory(category.name)}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "#fff" : "#FF0066",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{
            opacity: category.name === selectedCategory ? "1" : "0.9",
            fontSize: "18px",
          }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
