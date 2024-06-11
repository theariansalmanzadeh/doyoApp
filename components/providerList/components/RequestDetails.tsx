import { useIsDetailOpen } from "@/state";
import { TOrderState } from "@/types";
import { Box, Button, Stack, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

const RequestDetails = ({
  timeOrder,
  title,
  state,
}: {
  title: string;
  timeOrder: number;
  state: TOrderState;
}) => {
  const [isDetailOpen, setIsDetailOpen] = useIsDetailOpen();
  return (
    <Stack direction="column" bgcolor="#eee" padding="10px" borderRadius="8px">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center" gap="5px">
          <Typography variant="h5">{title}</Typography>
          <Typography color="#909090" variant="caption">
            {timeOrder}min ago
          </Typography>
        </Stack>
        <Typography variant="subtitle1" color={blue[600]}>
          {state}
        </Typography>
      </Stack>
      {!isDetailOpen && (
        <Button
          variant="text"
          sx={{ color: blue[600], alignSelf: "start" }}
          onClick={() => {
            setIsDetailOpen(true);
          }}
        >
          show more
        </Button>
      )}
    </Stack>
  );
};

export default RequestDetails;
