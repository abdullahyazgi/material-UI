import { Stack, Avatar, AvatarGroup } from "@mui/material";
import image from "../image/loremph.jpg";

export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        <Avatar sx={{ bgcolor: "primary.light" }}>YI</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>SY</Avatar>
      </Stack>
      <Stack direction="row" spacing={1}>
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: "primary.light" }}>YI</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>SY</Avatar>
          <Avatar src={image} alt="image" />
          <Avatar src={image} alt="image" />
        </AvatarGroup>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Avatar
          variant="square"
          sx={{ bgcolor: "primary.light", height: 52, width: 52 }}
        >
          YI
        </Avatar>
        <Avatar
          variant="rounded"
          sx={{ bgcolor: "success.light", height: 52, width: 52 }}
        >
          SY
        </Avatar>
      </Stack>
    </Stack>
  );
};
