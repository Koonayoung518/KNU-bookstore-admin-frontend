import { Box, Button, Card, CardActions, CardContent, Divider, Typography } from "@mui/material";

const user = {
  avatar: "/static/images/avatars/avatar_6.png",
  city: "Los Angeles",
  country: "USA",
  registered: "이미 등록된 책입니다!",
  name: "Katarina Smith",
  timezone: "GTM-7",
};

export const UpdateBookProfile = (props) => (
  <Card {...props}>
    <CardContent>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img alt="이미지 없음" src={user.avatar} />

        <Typography color="textPrimary" gutterBottom variant="h5">
          {user.name}
        </Typography>
        <Typography color="red" variant="h6">
          {user.registered}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
      <Button color="primary" fullWidth variant="text">
        책 표지 등록
      </Button>
    </CardActions>
  </Card>
);
