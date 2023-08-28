"use client";

import Image from "next/image";
import ThemeRegistry from "../../../theme/ThemeRegistry";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CardActions from "@mui/material/CardActions";
import { Grid, Box, Table } from "@mui/material";
import { BorderAll, Height } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import Comments from "./Commentpage/comments";

export default function Event() {
  const form = useForm();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
  } = form;

  const onsubmit = (FormValues: any) => {
    console.log(FormValues);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <main>
      <div style={{ position: "relative" }}>
        <Image
          src="/pan.png"
          width={"0"}
          height={"0"}
          sizes="100vw"
          alt={""}
          style={{ width: "100%", height: "450px", objectFit: "cover" }}
        />
      </div>

      <Box sx={{ textAlign: "center", typography: "body2" }}>
        <div>
          <h1>이벤트 안내</h1>
          <h3>
            응모 기간 2023년 8월 4일 (금요일) - 2023년 9월 4일 (월요일) ||
            당첨자 발표 2023년 9월 8일 (금요일) AIA 스퍼스 허브 내 공지사항 발표
            및 개별 연락
          </h3>
          <p>
            <strong>당첨자 활동기간&내용</strong>
            <br />
            2024년 3월 - 2024년 6월
            <br />
            * 런던 가기 전 AIA생명 본사 홍보 활동 1회 참여
            <br />
            * 런던 방문 전/후 본인의 SNS채널, 블로그를 통해 VIP 투어 홍보
            <br />
            <br />
            <strong> 모집대상 및 응모방법</strong>
            <br />
            2024년 4월에 런던에 방문하실 수 있고, 사진 및 영상에 출연 가능하신
            분은 카카오 간편로그인을 통해 회원 가입한 후 이벤트 참여 가능합니다.
            (1회 한정)
            <br />
            * 여러분이 팬 크리에이터로 꼭 뽑혀야 하는 강력한 이유를 자유
            방식으로 제출해 주세요. (개인 포트폴리오, 본인의 SNS/블로그 URL, UCC
            영상, 직접 작성한 글 등 본인을 어필할 수 있는 내용 모두 환영)
            <br />
            * 1등 당첨을 위해 자료 제출은 필수
            <br />
            * 2등~5등 경품은 자료 제출 없이 응모만 해도 추첨을 통해 당첨 가능
            <br />* 제출처: aiampsteam@gmail.com
          </p>
        </div>
      </Box>

      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyItems="center">
        <Image
          src="/event1.png"
          width={"0"}
          height={"0"}
          sizes="100vw"
          alt={""}
          style={{ width: "60%", height: "60%", objectFit: "cover" }}
        />
        <Image
          src="/event2.png"
          width={"0"}
          height={"0"}
          sizes="100vw"
          alt={""}
          style={{ width: "60%", height: "60%", objectFit: "cover" }}
        />
      </Grid>
      <br />
      <div>
        <ThemeRegistry>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button
              variant="outlined"
              onClick={handleClickOpen}
              color={"secondary"}
              sx={{ width: 400, height: 60 }}>
              <h3>이벤트 참여하기</h3>
            </Button>
          </CardActions>
        </ThemeRegistry>
        <Dialog
          open={open}
          onClose={handleClose}
          sx={{
            "& .MuiDialog-container": {
              "& .MuiPaper-root": {
                width: "100%",
                maxWidth: "900px", // Set your width here
              },
            },
          }}>
          <DialogTitle>이벤트 참여하기</DialogTitle>
          <DialogContent>
            <DialogContentText>
              이벤트 당첨시 경품 지급 안내를 위해 정확한 정보를 기입해 주세요.
            </DialogContentText>
            <div>
              <p>
                {" "}
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  label="[필수] 이벤트를 위한 개인정보 수집∙이용 동의 및 처리 위탁 안내"
                />
                <br />
                AIA생명보험 주식회사(이하 ‘회사’)가 이벤트 진행 등을 목적으로
                아래와 같이 본인의 개인정보를 수집·이용하는 것에 동의합니다.
              </p>
              <Box
                sx={{ border: 1 }}
                style={{ maxHeight: 80, overflow: "auto" }}>
                <p>
                  <strong>수집·이용 목적 </strong>
                  이벤트 진행 및 관련 업무 처리 (당첨자 선정, 안내, 경품 제공,
                  문의∙민원 처리 등) 이벤트 홈페이지 개발 및 운영·관리 등<br />
                  <strong>수집·이용 항목 </strong>
                  이름, 휴대폰번호, 성별, 거주지역, 생년월일, 이벤트 관련 업무
                  처리에 필요한 정보 등(건강 관리/보험 필요성 관련 설문 내용)
                  <br />
                  <strong>보유 및 이용기간 </strong>동의일로부터 6개월
                </p>
              </Box>
              <strong>(안내) 개인정보처리 위탁 안내</strong>
              <p>
                ※ 회사는 이벤트의 진행 및 상품소개·서비스 홍보, 판매 등을
                목적으로 아래와 같이 개인정보를 처리위탁합니다.
              </p>
              <Box
                sx={{ border: 1, borderRadius: 1 }}
                style={{ maxHeight: 80, overflow: "auto" }}>
                <p>
                  <strong> 위탁받는 자(수탁업체)</strong>
                  CSM Sports & Entertainment, 젤라블루 회사와 위탁계약을 체결한
                  보험설계사, ㈜유니에스. ㈜칸타코리아, 닐슨아이큐코리아
                  유한회사, ㈜마크로밀엠브레인
                  <br />
                  <strong>위탁업무 </strong>
                  이벤트 진행 관련 업무 처리(이벤트 홈페이지 개발 및 운영·관리
                  등) 회사의 보험상품·서비스 소개 및 안내, 판매 등 시장조사
                  <br />
                </p>
              </Box>
              <p>
                {" "}
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  label="[필수] AIA생명의 마케팅을 위한 개인정보 수집∙이용 동의"
                />
                <br />
                AIA생명보험 주식회사(이하 ‘회사’)가 보험상품∙서비스 소개 및 홍보
                등을 목적으로 아래와 같이 본인의 개인정보를 수집·이용하는 것에
                동의합니다.
              </p>
              <Box
                sx={{ border: 1 }}
                style={{ maxHeight: 80, overflow: "auto" }}>
                <p>
                  <strong>수집·이용 목적 </strong>
                  회사의 보험상품 소개 및 판매, 바이탈리티 등 서비스 안내,
                  시장조사
                  <br />
                  <strong>수집·이용 항목 </strong>
                  이름, 휴대폰번호, 성별, 거주지역, 생년월일, 바이탈리티 등
                  회사가 운영하는 서비스 가입·이용 관련 정보(건강 관리/보험
                  필요성 관련 설문 내용)
                  <br />
                  <strong>보유 및 이용기간 </strong>동의일로부터 2년
                </p>
              </Box>
              <p>
                ※ 귀하는 본 동의를 거부하실 수 있습니다. 다만, 동의를 거부하실
                경우, 보험상품∙서비스 소개 등의 혜택을 받지 못할 수 있습니다.
                <br />
                ※ 본 동의는 당사와 모집위탁계약을 체결한 업무수탁자(당사 전속
                보험설계사 및 동 계약을 모집한 보험대리점)가 수집∙이용하는 것을
                포함합니다.
                <br />
                <strong>
                  ※ 상기 내용에 동의하시는 경우 당사 임직원 또는 업무수탁자가
                  전화로 상품∙서비스 소개 및 판매 안내연락(TM 등)을 드릴 수
                  있습니다.
                </strong>
              </p>
              <p>
                {" "}
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  label="[필수] 광고성 정보 수신 동의"
                />
                <br />
                AIA생명보험 주식회사(이하 &apos;회사&apos;) 및 회사 업무
                수탁자와의 전화·전자적 전송 매체(문자, 이메일, 메신저, SNS
                등)·기타 방법을 통한 회사의 상품·서비스 홍보·판매 등을 위한
                광고성 정보 수신에 동의합니다.
                <br />※ 귀하는 본 동의를 거부하실 수 있습니다. 다만, 동의를
                거부할 경우 이벤트 참가 및 경품제공 등 이벤트 관련 업무 처리가
                제한될 수 있습니다.
              </p>
            </div>
            <Box component="form" onSubmit={handleSubmit(onsubmit)}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="이름"
                type="text"
                variant="standard"
                {...register("name")}
              />
              <TextField
                autoFocus
                margin="dense"
                id="brith"
                label="생년월일"
                {...register("brith")}
                type="text"
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="phoneNum"
                label="휴대폰번호"
                {...register("phoneNum")}
                type="text"
                variant="standard"
              />
              <div className="form-check">
                <label htmlFor="man">
                  <input
                    {...register("gender", { required: true })}
                    type="radio"
                    name="gender"
                    value="man"
                    className="form-check-input"
                    id="man"
                  />{" "}
                  남
                </label>
                <label htmlFor="woman">
                  <input
                    {...register("gender", { required: true })}
                    type="radio"
                    name="gender"
                    value="woman"
                    className="form-check-input"
                    id="woman"
                  />{" "}
                  여
                </label>
              </div>
              <TextField
                autoFocus
                margin="dense"
                id="adress"
                label="주소"
                {...register("adress")}
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="reason1"
                label="여러분이 AIA Spurs 팬 크리에이터로 뽑혀야 하는 이유가 무엇이라고 생각하시나요?"
                {...register("reason1")}
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="reason2"
                label="본인이 팬 크리에이터로 런던을 방문할 수 있다면 누구와 함께 가고 싶으세요?"
                {...register("reason2")}
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="reason3"
                label="손흥민 선수 또는 토트넘 구단에 대한 귀하의 팬 활동을 말씀해주세요."
                type="text"
                {...register("reason3")}
                fullWidth
                variant="standard"
              />{" "}
              <DialogActions>
                <Button type="submit" onClick={handleClose}>
                  참여하기
                </Button>
                <Button onClick={handleClose}>취소</Button>
              </DialogActions>
            </Box>
          </DialogContent>
        </Dialog>
        <div>
          <Comments currentUserId="1" />
        </div>
      </div>
    </main>
  );
}
