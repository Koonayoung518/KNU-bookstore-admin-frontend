import Head from "next/head";
import { Box, Container } from "@mui/material";
import { BookListResults } from "../components/book/book-list-results";
import { BookListToolbar } from "../components/book/book-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { books } from "../__mocks__/books";
import React, { useState, useEffect, useCallback } from "react";
import Api from "src/api/Api";
import axios from "axios";
const Manage = () => {
  const [books, setBooks] = useState([]);

  const bringData = useCallback(async () => {
    const resBook = await new Api().getData("http://localhost:8080/knu/book", {});
    console.log(resBook);
    setBooks([...resBook.list]);
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
        <Container maxWidth={false}>
          <BookListToolbar />
          <Box sx={{ mt: 3 }}>
            <BookListResults customers={books} />
          </Box>
        </Container>
      </Box>
    </>
  );
};
Manage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Manage;
