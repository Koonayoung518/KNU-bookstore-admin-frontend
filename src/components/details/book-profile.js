import { Box, Button, Card, CardActions, CardContent, Divider, Typography } from "@mui/material";
import { useState, useEffect, useCallback } from "react";
export const BookProfile = ({ bookData, ...rest }) => {
  return (
    <Card {...bookData}>
      <CardContent>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img alt="이미지 없음" src={bookData.image} />

          <Typography color="textPrimary" gutterBottom variant="h5">
            {bookData.title}
          </Typography>
          <Typography color="red" variant="h6">
            {bookData.bookType}
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
};
