import { Box, Button, Card, CardActions, CardContent, Divider, Typography } from "@mui/material";

const book = {
  image: "https://bookthumb-phinf.pstatic.net/cover/162/437/16243707.jpg?type=m1&udate=20210509",
  title: "인공지능 (파이썬으로 배우는 머신러닝과 딥러닝)",
  registered: "이미 등록된 책입니다!",
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
        <img alt="이미지 없음" src={book.image} />

        <Typography color="textPrimary" gutterBottom variant="h5">
          {book.title}
        </Typography>
        <Typography color="red" variant="h6">
          {book.registered}
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
