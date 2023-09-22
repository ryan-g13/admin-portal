import { Box } from "@mui/material";
import SubHeader from "../../components/SubHeader";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <SubHeader title="Programming Languages" subtitle="Top 5 languages" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;