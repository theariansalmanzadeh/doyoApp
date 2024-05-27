import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DigitalClock } from "@mui/x-date-pickers/DigitalClock";
import { MultiSectionDigitalClock } from "@mui/x-date-pickers/MultiSectionDigitalClock";
import { Box, Button, Modal } from "@mui/material";
import { useOpenCalendar, useServiceRequest } from "@/state";
import {
  DateCalendar,
  StaticDatePicker,
  TimePicker,
} from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { IDate } from "@/types";

const TimeModal = () => {
  const [openCalendar, setOpenCalendar] = useOpenCalendar();
  const [serviceRequest, setServiceRequest] = useServiceRequest();
  console.log(serviceRequest.when);

  const formatDay = (day: number) => {
    switch (day) {
      case 0:
        return "sat";
      case 1:
        return "sun";
      case 2:
        return "mon";
      case 3:
        return "tue";
      case 4:
        return "wed";
      case 5:
        return "thu";
      case 6:
        return "fri";
    }
  };
  return (
    <Modal
      open={openCalendar}
      onClose={() => setOpenCalendar(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          width: "auto",
          backgroundColor: "white.200",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          position: "fixed",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            components={["DateCalendar", "MultiSectionDigitalClock"]}
            sx={{ width: "100%", height: "100%", flexDirection: "row" }}
          >
            <DateCalendar
              sx={{ flexBasis: "100%" }}
              defaultValue={dayjs("2022-04-17")}
              onChange={(newValue) => {
                console.log(formatDay(newValue?.day() as number));
                setServiceRequest({
                  ...serviceRequest,
                  when: {
                    ...(serviceRequest.when as IDate),
                    day: `${formatDay(newValue?.day() as number)}`,
                  },
                });
              }}

              // slots={{ toolbar: false }}
            />

            <MultiSectionDigitalClock
              sx={{ borderBottom: "none", justifyContent: "center" }}
              onChange={(newValue) => {
                setServiceRequest({
                  ...serviceRequest,
                  when: {
                    ...(serviceRequest.when as IDate),
                    hour: `${newValue?.hour().toString()}`,
                    min: `${newValue?.minute().toString()}`,
                  },
                });
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
        <Button
          onClick={() => {
            setOpenCalendar(false);
          }}
        >
          Ok
        </Button>
      </Box>
    </Modal>
  );
};

export default TimeModal;
