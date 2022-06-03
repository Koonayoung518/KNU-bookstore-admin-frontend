import { format } from "date-fns";
import { v4 as uuid } from "uuid";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { SeverityPill } from "../severity-pill";
// isbn: "9788965402602",
//     title:
//       "스프링 부트와 AWS로 혼자 구현하는 웹 서비스 (인텔리제이, JPA, JUnit 테스트, 그레이들, 소셜 로그인, AWS 인프라로 무중단 배포까지)",
//     publisher: "프리렉",
//     author: "이동욱",
//     price: 22000,
//     image: "https://bookthumb-phinf.pstatic.net/cover/158/717/15871738.jpg?type=m1&udate=20211019",
//     pubdate: "20191129",
//     stock: 10,
const orders = [
  {
    id: uuid(),
    ref: "9788965402602",
    amount: 3,
    customer: {
      name: "스프링 부트와 AWS로 혼자 구현하는 웹 서비스",
    },
    createdAt: 22000,
    status: 66000,
  },
  {
    id: uuid(),
    ref: "9791185578606",
    amount: 1,
    customer: {
      name: "인공지능 (파이썬으로 배우는 머신러닝과 딥러닝)",
    },
    createdAt: 30000,
    status: 30000,
  },
];

export const LatestOrders = (props) => (
  <Card {...props}>
    <CardHeader title="내역" />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ISBN</TableCell>
              <TableCell>책 제목</TableCell>
              <TableCell>가격</TableCell>
              <TableCell>수량</TableCell>
              <TableCell>총 금액</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow hover key={order.id}>
                <TableCell>{order.ref}</TableCell>
                <TableCell>{order.customer.name}</TableCell>
                <TableCell>{order.createdAt}</TableCell>
                <TableCell>
                  <Button color="primary" size="small" variant="text">
                    -
                  </Button>
                  {order.amount}
                  <Button color="primary" size="small" variant="text">
                    +
                  </Button>
                </TableCell>
                <TableCell>{order.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        p: 2,
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon fontSize="small" />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);
