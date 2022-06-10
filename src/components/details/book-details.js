import { useState, useEffect, useCallback, useDebugValue } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import axios from "axios";
import Api from "src/api/Api";

export const BookDetails = ({ bookData, ...rest }) => {
  // const handleChange = (event) => {
  //   setBook({
  //     ...book,
  //     [event.target.name]: event.target.value,
  //   });
  // };
  const registerd = bookData.bookType == "registered";
  return (
    <form autoComplete="off">
      <Card>
        <CardHeader subheader="The book information" title="책 상세 정보" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="ISBN"
                name="ISBN"
                inputProps={{ readOnly: true }}
                value={bookData.isbn}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="출판사"
                name="출판사"
                inputProps={{ readOnly: true }}
                value={bookData.publisher}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="저자"
                name="저자"
                inputProps={{ readOnly: true }}
                value={bookData.author}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="출간일"
                name="출간일"
                inputProps={{ readOnly: true }}
                value={bookData.pubdate}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="가격"
                name="가격"
                // onChange={handleChange}
                required
                type="number"
                value={bookData.price}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="재고"
                name="재고"
                //onChange={handleChange}
                required
                value={bookData.stock}
                variant="outlined"
              ></TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button color="primary" variant="contained">
            Delete
          </Button>
          <Button color="primary" disabled={registerd} variant="contained">
            Update
          </Button>
          <Button color="primary" disabled={!registerd} variant="contained">
            Register
          </Button>
        </Box>
      </Card>
    </form>
  );
};
