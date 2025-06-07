import { Box } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DateRange } from "@mui/x-date-pickers-pro/models";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { useState } from "react";

export const MuiDateRangePicker = () => {
    const [value, setValue] = useState<DateRange<Dayjs>>([
      dayjs(null),
      dayjs(null),
    ]);
    console.log({value});
  return (
    <Box width="500px">
      <DemoContainer components={["DateRangePicker"]}>
        <DemoItem label="Controlled picker" component="DateRangePicker">
          <DateRangePicker
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </DemoItem>
      </DemoContainer>
    </Box>
  );
}
