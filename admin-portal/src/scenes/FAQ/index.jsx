import { Box, useTheme, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import SubHeader from '../../components/SubHeader';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';

/* TODO: Update the questions to be relevant  */

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return(
  <Box m='20px'>
    <SubHeader title="FAQ" subtitle='Frequently Asked Questions Page' />
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color={colors.greenAccent[500]} variant='h5'>
          Where am I from? 
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          I am currently located in Seattle, Washington. I also attended the University of Washington. 
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color={colors.greenAccent[500]} variant='h5'>
          How many years of experience do you have in software development? 
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          I have 4+ years of coding experience, spanning React.js and Angular.js in the frontend and multiple languages in the backend (Java C# and Python)
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color={colors.greenAccent[500]} variant='h5'>
          What are some of your hobbies? 
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          I enjoy reading sci-fi and fantasy books with some noir/mystery thrown in. I ride my motorcycle to visit some incredibly twisty roads and to smell nature and feel the wind. As a good Seattle-ite I hike and take my dog out into nature with me.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color={colors.greenAccent[500]} variant='h5'>
          What breed of dog do you have and what is his name?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          My dog is named Benedict, after eggs benedict, but he goes by Benny. He is a miniature golden doodle, weighing in at 27 lbs and will be 3 this December. 
        </Typography>
      </AccordionDetails>
    </Accordion>
  </Box>)
}

export default FAQ;