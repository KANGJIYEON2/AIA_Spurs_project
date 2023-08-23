import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import "../globals.css";

export default function Footer() {
  const FooterInfo = (
    <Grid item xs={8} paddingBottom={1}>
      <Typography sx={{ fontSize: 14 }} color="#fafafa">
        AIA 생명보험 주식회사 <br />
        서울시 중구 통일로2길 16(순화동 216) AIA타워 <br />
        (우)04511 대표이사 네이슨 황
      </Typography>
    </Grid>
  );

  const Links = (menu: string, path: string) => {
    return (
      <Link color="#fafafa" href={path} underline="none">
        {menu} <br />
      </Link>
    );
  };

  const FooterLink = (
    <Grid item xs={4}>
      <Typography sx={{ fontSize: 14 }} align="right">
        {Links("서비스 이용 약관", "/terms")}
        {Links(
          "개인정보처리방침",
          "https://www.aia.co.kr/ko/index/pi-processing.html"
        )}
        {Links("관리자페이지", "/admin/login2")}
      </Typography>
    </Grid>
  );

  return (
    <Grid
      className="Footer"
      container
      spacing={1}
      sx={{
        bgcolor: "#333D47",
      }}
      padding={1}>
      {FooterInfo}
      {FooterLink}
    </Grid>
  );
}
