import { Button, Stack } from "@mui/material";
import { styleBtn } from "@/app/styles/Inputbutton";
import { useOrderSection } from "@/state";

const ActionButtons = () => {
  const [, setOrderSection] = useOrderSection();
  return (
    <Stack direction="row" gap="25px">
      <Button
        sx={{
          ...styleBtn,
          backgroundColor: "alert.critical.100",
          flexBasis: "50%",
        }}
        onClick={() => {
          setOrderSection({ title: "where", page: 3 });
        }}
      >
        cancel
      </Button>
      <Button
        sx={styleBtn}
        onClick={() => {
          setOrderSection({ title: "success", page: 6 });
        }}
      >
        Submit
      </Button>
    </Stack>
  );
};

export default ActionButtons;
