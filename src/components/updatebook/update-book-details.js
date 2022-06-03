import { useState } from "react";
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

export const UpdateBookDetails = (props) => {
  const [book, setBook] = useState({
    isbn: "9791185578606",
    publisher: "인피니티북스",
    author: "천인국",
    price: 30000,
    pubdate: "20200212",
    stock: 5,
  });

  const handleChange = (event) => {
    setBook({
      ...book,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form autoComplete="off" noValidate {...props}>
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
                value={book.isbn}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="출판사"
                name="출판사"
                inputProps={{ readOnly: true }}
                value={book.publisher}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="저자"
                name="저자"
                inputProps={{ readOnly: true }}
                value={book.author}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="출간일"
                name="출간일"
                inputProps={{ readOnly: true }}
                value={book.pubdate}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="가격"
                name="가격"
                onChange={handleChange}
                required
                type="number"
                value={book.price}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="재고"
                name="재고"
                onChange={handleChange}
                required
                value={book.stock}
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
            Update
          </Button>
        </Box>
      </Card>
    </form>
  );
};
