"use client";

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useOpenCalendar, useOrderSection, useServiceRequest } from "@/state";
import Divider from "@/components/generals/Devider";
import { styleBtn } from "@/app/styles/Inputbutton";

const WhenForm = () => {
  const [, setOrderSection] = useOrderSection();
  const [, setOpenCalendar] = useOpenCalendar();
  const [serviceRequest, setServiceRequest] = useServiceRequest();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setServiceRequest({ ...serviceRequest, when: event.target.name });
  };
  return (
    <Box padding="10px">
      <Stack
        direction="row"
        marginBottom="30px"
        padding="10px"
        borderBottom="1px solid #eee"
      >
        <Box>
          <Typography variant="subtitle1"> Set the time</Typography>
          <Typography variant="subtitle2">
            When do you need the service?
          </Typography>
        </Box>
      </Stack>

      <Stack
        direction="column"
        justifyContent="start"
        alignItems="stretch"
        gap="25px"
      >
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="As soon as Possible (Real-Time)"
          name="As soon as Possible (Real-Time)"
          //@ts-ignore
          onChange={handleChange}
          sx={{
            backgroundColor: "#eee",
            padding: "5px 20px 5px 5px",
            margin: "0px",
            borderRadius: "4px",
            // color: pink[800],
            // "&.Mui-checked": {
            //   color: pink[600],
            // },
          }}
        />
        <Divider />
        <Button
          onClick={() => {
            setOpenCalendar(true);
          }}
          sx={{
            color: "#000",
            backgroundColor: "#eee",
            justifyContent: "start",
            borderRadius: "4px",
          }}
        >
          <CalendarMonthIcon /> Set date and time
        </Button>
      </Stack>
      <Box>
        <Button
          sx={styleBtn}
          onClick={() => {
            setOrderSection({ title: "where", page: 3 });
          }}
        >
          Next <ArrowForwardIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default WhenForm;
