import { Box } from "@mui/material";
import SubHeader from "../../components/SubHeader";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <SubHeader title="Transportation Types" subtitle="In Countries Visited" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;