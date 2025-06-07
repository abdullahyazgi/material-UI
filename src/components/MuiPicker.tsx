import { Stack } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

export const MuiPicker = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(
    dayjs(Date.now())
  );
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(dayjs(null));

  const [selectedDateTime, setSelectedDateTime] = useState<Dayjs | null>(
    dayjs(null)
  );

  // console.log({ selectedDate });
  // console.log({
  //   selectedTime: selectedTime && selectedTime.toDate().toLocaleTimeString(),
  // });
  console.log(selectedDateTime);

  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      {/* <DatePicker label="Basic date picker" /> */}
      <DatePicker
        label="Data Picker"
        value={selectedDate}
        onChange={(newValue) => {
          setSelectedDate(newValue);
        }}
      />
      <TimePicker
        label="Time Picker"
        value={selectedTime}
        onChange={(newValue) => {
          setSelectedTime(newValue);
        }}
      />
      <DateTimePicker
        label="Time Picker"
        value={selectedDateTime}
        onChange={(newValue) => {
          setSelectedDateTime(newValue);
        }}
      />
    </Stack>
  );
};
