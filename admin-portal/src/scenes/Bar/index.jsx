import { Box } from "@mui/material";
import BarChart from "../../components/BarChart";
import SubHeader from "../../components/SubHeader";

const Bar = () => {
  return(
  <Box m='20px'>
    <SubHeader title="Food" subtitle='In Countries Visited'/>
    <Box height='75vh'>
      <BarChart />
    </Box>
  </Box>)
}

export default Bar;