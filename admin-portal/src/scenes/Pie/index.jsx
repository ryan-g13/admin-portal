import { Box } from "@mui/material";
import SubHeader from "../../components/SubHeader";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <SubHeader title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;