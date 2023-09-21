import { Box, useTheme, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import SubHeader from '../../components/SubHeader';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';

/* TODO: Update the questions to be relevant  */

const Faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return(
  <Box m='20px'>
    <SubHeader title="FAQ" subtitle='Frequently Asked Questions Page' />
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color={colors.greenAccent[500]} variant='h5'>
          An Important Question
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Long winded answer to the above query.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color={colors.greenAccent[500]} variant='h5'>
          An Important Question
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Long winded answer to the above query.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color={colors.greenAccent[500]} variant='h5'>
          An Important Question
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Long winded answer to the above query.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color={colors.greenAccent[500]} variant='h5'>
          An Important Question
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Long winded answer to the above query.
        </Typography>
      </AccordionDetails>
    </Accordion>
  </Box>)
}

export default Faq;