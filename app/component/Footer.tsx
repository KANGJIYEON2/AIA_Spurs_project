import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import "../globals.css";

const primary = {
  backgroundColor: "#333D47",
};

export default function Footer() {
  return (
    <Grid
      className="Footer"
      container
      spacing={1}
      sx={{
        bgcolor: primary,
      }}
      padding={1}>
      <Grid item xs={8} paddingBottom={1}>
        <Typography sx={{ fontSize: 14 }} color="#fafafa">
          AIA 생명보험 주식회사 <br />
          서울시 중구 통일로2길 16(순화동 216) AIA타워 <br />
          (우)04511 대표이사 네이슨 황
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography sx={{ fontSize: 14 }} color="#fafafa" align="right">
          <Link color="#fafafa" href="/terms" underline="none">
            서비스 이용 약관 <br />
          </Link>
          <Link
            color="#fafafa"
            href="https://www.aia.co.kr/ko/index/pi-processing.html"
            underline="none">
            개인정보처리방침 <br />
          </Link>
          <Link color="#fafafa" href="/login2" underline="none">
            관리자페이지
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}
