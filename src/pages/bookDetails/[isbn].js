import Head from "next/head";
import NextLink from "next/link";
import { Box, Container, Grid, Typography } from "@mui/material";
import { BookProfile } from "../../components/details/book-profile";
import { BookDetails } from "../../components/details/book-details";
import { DashboardLayout } from "../../components/dashboard-layout";
import { useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";
import { SignalWifiStatusbarNullRounded } from "@mui/icons-material";
import Api from "src/api/Api";

const Details = () => {
  const router = useRouter();
  const isbn = router.query.isbn;
  const [book, setBook] = useState({});
  const bringData = useCallback(async () => {
    console.log(isbn);
    const resBook = await new Api().getData("http://localhost:8080/manage/book/" + isbn, {});
    console.log(resBook);
    setBook({ ...resBook.list });
  }, []);

  useEffect(() => {
    bringData();
  }, [bringData]);

  return (
    <>
      <Head>
        <title>KNU-BookStore</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography sx={{ mb: 3 }} variant="h4">
            책 정보
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
              <BookProfile bookData={book} />
            </Grid>
            <Grid item lg={8} md={6} xs={12}>
              <BookDetails bookData={book} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Details.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Details;
