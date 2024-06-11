import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import user from "@/assets/images/user.png";
import star from "@/assets/images/star.png";
import { dummy_reviews } from "../content";

const Reviews = () => {
  return (
    <Box marginTop="37px" marginBottom="25" color="secondary.dark">
      <Typography variant="subtitle1">Reviews</Typography>
      <Stack gap="15px" marginBottom="80px" marginTop="25px">
        {dummy_reviews.map((review) => (
          <Stack key={review.name} direction="row">
            <Box flexBasis="10%">
              <Image src={user} width={30} alt="user no picture" />
            </Box>
            <Stack>
              <Stack direction="row" gap="5px" justifyContent="space-between">
                <Stack direction="row" alignItems="end" gap="5px">
                  <Typography variant="subtitle1">{review.name}</Typography>
                  <Typography variant="caption" color="#909090">
                    {review.data}
                  </Typography>
                </Stack>
                <Stack direction="row" gap="5px" alignItems="center">
                  <Image src={star} width="10" alt="star points" />
                  <Typography>{review.votes}</Typography>
                </Stack>
              </Stack>
              {review.details}
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default Reviews;
