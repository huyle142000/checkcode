import * as React from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";
import Stack from "@mui/material/Stack";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { Box, FormHelperText } from "@mui/material";
import moment, { Moment } from "moment";
type Props = {};

const DatePages = (props: Props) => {
  const [value, setValue] = React.useState<Moment | null>(moment("10-2-2000"));

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <div></div>
        <Stack margin={4}>
          <DesktopDateTimePicker
            label="For desktop"
            value={value}
            inputFormat="DD/MM/YYYY hh:mm:ss"
            onChange={(newValue: Moment | null) => {
              console.log(newValue, "newValue");
              setValue(newValue);
            }}
            renderInput={(params) => {
              return (
                <>
                  <TextField {...params} />
                  {params.error && (
                    <FormHelperText
                      sx={{ color: "error.main" }}
                      id=""
                    >SAi rồi nè</FormHelperText>
                  )}
                </>
              );
            }}
          />
        </Stack>
      </LocalizationProvider>
    </>
  );
};

export default DatePages;
