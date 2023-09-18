import { Box } from '@mui/material';
import SubHeader from "../../components/SubHeader";

const Dashboard = () => {
    return (
    <Box m='20px'>
        <Box display='flex' justifyContent="space-between" alignItems='center'>
            <SubHeader title='Dashboard' subtitle='Welcome to your dashboard' /> 
        </Box>
    </Box>
    )
}

export default Dashboard;