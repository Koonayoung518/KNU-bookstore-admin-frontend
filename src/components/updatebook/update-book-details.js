import { useState, useEffect, useCallback, useDebugValue } from "react";
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

export const UpdateBookDetails = (props) => {
  // const [book, setBook] = useState({
  //   isbn: "9791185578606",
  //   publisher: "인피니티북스",
  //   author: "천인국",
  //   price: 30000,
  //   pubdate: "20200212",
  //   stock: 5,
  // });

  const handleChange = (event) => {
    setBook({
      ...book,
      [event.target.name]: event.target.value,
    });
  };
  const [isbn, setIsbn] = useState(null);
  const [publisher, setPublisher] = useState(null);
  const [author, setAuthor] = useState(null);
  const [price, setPrice] = useState(null);
  const [pubdate, setPubdate] = useState(null);
  const [stock, setStock] = useState(null);

  const bringData = useCallback(async () => {
    setIsbn("9788965402602"); // 임의로 지정
    const resBook = await new Api().getData("http://localhost:8080/manage/book/" + isbn, {});
    console.log(resBook);
    setPublisher(resBook.list.publisher);
    setAuthor(resBook.list.author);
    setPrice(resBook.list.price);
    setPubdate(resBook.list.pubdate);
    setStock(resBook.list.stock);
  }, []);

  useEffect(() => {
    bringData();
  }, [bringData]);
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
                value={isbn}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="출판사"
                name="출판사"
                inputProps={{ readOnly: true }}
                value={publisher}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="저자"
                name="저자"
                inputProps={{ readOnly: true }}
                value={author}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="출간일"
                name="출간일"
                inputProps={{ readOnly: true }}
                value={pubdate}
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
                value={price}
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
                value={stock}
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
