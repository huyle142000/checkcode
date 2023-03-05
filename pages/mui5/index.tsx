import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
type Props = {
    themeMui:any
};

const MuiPageComponent = (props: Props) => {
  return (
    <div>
        <Button color="secondary" variant="contained">Click me!</Button>
      <Grid container p={5} spacing={3}>
        <Grid item xs={8}>
          <Typography paragraph={true} align="justify" color="secondary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis, nihil quam, accusamus dolores necessitatibus quod ut,
            dignissimos consectetur est iusto voluptatibus saepe ipsa! Incidunt
            repellat voluptatibus consequatur eligendi suscipit quos.
          </Typography>
          <Accordion >
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
              <Typography variant="h4">thisLinegooood</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6">
                ấdfsdfasdfsdfsajdfnkajdhfkjahdfkjahdsfs
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion >
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
              <Typography variant="h6">thisLinegooood2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6">
                ấdfsdfasdfsdfsajdfnkajdhfkjahdfkjahdsfs
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={4}>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis, nihil quam, accusamus dolores necessitatibus quod ut,
            dignissimos consectetur est iusto voluptatibus saepe ipsa! Incidunt
            repellat voluptatibus consequatur eligendi suscipit quos.
          </Typography>
          <FormControl>
            <FormLabel>Choose options</FormLabel>
            <RadioGroup row defaultValue={"Adu"}>
                <FormControlLabel value="boostrap" control={<Radio/>} label="boostrap"/>
                <FormControlLabel value="Adu" control={<Radio/>} label="Adu"/>

            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default MuiPageComponent;
