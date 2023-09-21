import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import { mockTransactions } from '../../data/mockData';
import SubHeader from "../../components/SubHeader";
import LineChart from '../../components/LineChart';
import BarChart from '../../components/BarChart';
import GeographyChart from '../../components/GeographyChart';
import StatBox from '../../components/Statbox';
import ProgressCircle from '../../components/ProgressCircle';

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
    <Box m='20px'>
        <Box display='flex' justifyContent="space-between" alignItems='center'>
            <SubHeader title='Dashboard' subtitle='Welcome to your dashboard' /> 
        </Box>

        <Box>
            <Button sx={{ backgroundColor: colors.blueAccent[700], color: colors.gray[100], fontSize: '14px', fontWeight: 'bold', padding: '10px 20px' }}>
                <DownloadOutlinedIcon sx={{ marginRight: '10px'}} />
                Download Reports
            </Button>
        </Box>
        {/* Grid and Charts */}
        <Box
            display='grid'
            gridTemplateColumns='repeat(12 1fr)'
            gridAutoRows='140px'
            gap='20px'
        >
            <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center' >
                <StatBox 
                title='10952'
                subtitle='Emails Sent'
                increase='+10%'
                progress='0.84'
                icon={<EmailIcon sx={{ color: colors.greenAccent[600], fontSize: '26px'}}/>}
                />
            </Box>
            <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center' >
                <StatBox 
                title='500,258'
                subtitle='Sales Obtained'
                increase='+32%'
                progress='0.90'
                icon={<PointOfSaleIcon sx={{ color: colors.greenAccent[600], fontSize: '26px'}}/>}
                />
            </Box>
            <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center' >
                <StatBox 
                title='57,265'
                subtitle='New Clients'
                increase='+5%'
                progress='0.53'
                icon={<PersonAddIcon sx={{ color: colors.greenAccent[600], fontSize: '26px'}}/>}
                />
            </Box>
            <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center' >
                <StatBox 
                title='1,322,487'
                subtitle='Traffic Inbound'
                increase='+11%'
                progress='0.66'
                icon={<TrafficIcon sx={{ color: colors.greenAccent[600], fontSize: '26px'}}/>}
                />
            </Box>
        </Box>
    </Box>
    )
}

export default Dashboard;