import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export const MuiAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
//   console.log({expanded});
  const handleChange = (isExpended: boolean, panel: string) => {
    setExpanded(isExpended ? panel : false)
  };
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(event, isExpended) => handleChange(isExpended, "panel1")}
      >
        <AccordionSummary
          id="panel-1"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            corrupti ex praesentium accusamus, nisi nostrum non quidem
            exercitationem perspiciatis, optio error explicabo voluptates earum
            tempore impedit voluptatum expedita eos magnam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(event, isExpended) => handleChange(isExpended, "panel2")}
      >
        <AccordionSummary
          id="panel-2"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            corrupti ex praesentium accusamus, nisi nostrum non quidem
            exercitationem perspiciatis, optio error explicabo voluptates earum
            tempore impedit voluptatum expedita eos magnam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(event, isExpended) => handleChange(isExpended, "panel3")}
      >
        <AccordionSummary
          id="panel-3"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            corrupti ex praesentium accusamus, nisi nostrum non quidem
            exercitationem perspiciatis, optio error explicabo voluptates earum
            tempore impedit voluptatum expedita eos magnam.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
