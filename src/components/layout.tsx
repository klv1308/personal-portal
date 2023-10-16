import { Box } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="/">Home</Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/something">Something else</Link>
      </Box>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
