"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
    Alert,
    AlertTitle,
    AppBar,
    Box,
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Radio,
    RadioGroup,
    Slide,
    TextField,
    Toolbar,
    Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import Comments from "./commentpage/comments1";
import { TransitionProps } from "@mui/material/transitions";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type FormData = {
    name: string;
    birth: string;
    phoneNum: string;
    gender: string;
    address: string;
    reason1: string;
    reason2: string;
    reason3: string;
};

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function Event() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        birth: "",
        phoneNum: "",
        gender: "",
        address: "",
        reason1: "",
        reason2: "",
        reason3: "",
    });
    const { data: session } = useSession();
    const [openLoginAlert, setOpenLoginAlert] = useState(false);
    const handleLoginAlertClose = () => {
        setOpenLoginAlert(false);
        window.location.href = "/api/auth/login";
    };

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm<FormData>();
    const watchedValues = watch();
    useEffect(() => {
        setFormData(watchedValues);
    }, [watchedValues]);

    const [checkbox1Checked, setCheckbox1Checked] = useState(false);
    const [checkbox2Checked, setCheckbox2Checked] = useState(false);
    const [checkbox3Checked, setCheckbox3Checked] = useState(false);
    const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
    const [isSubmitSuccessDialogOpen, setIsSubmitSuccessDialogOpen] =
        useState(false);
    const isFormEmpty = Object.values(formData).some((value) => value === "");
    const isSubmitDisabled =
        !checkbox1Checked ||
        !checkbox2Checked ||
        !checkbox3Checked ||
        isFormEmpty;
    const handleControl = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!checkbox1Checked || !checkbox2Checked || !checkbox3Checked) {
            alert("모든 필수 동의사항에 동의하셔야 합니다.");
            return;
        }
        handleSubmit(onSubmit)();
    };

    const onSubmit = async (data: FormData) => {
        try {
            const res = await fetch("http://localhost:8000/events", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!res.ok) {
                throw new Error("Http Error" + res.status);
            }
            reset();
            setIsSubmitSuccess(true);
            console.log("Form submitted successfully.");
            setIsSubmitSuccessDialogOpen(true);
        } catch (error: any) {
            console.log("데이터 확인" + error.message);
        }
    };
    const [isSubmitDialogOpen, setIsSubmitDialogOpen] = useState(false);
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        if (!session) {
            setOpenLoginAlert(true);
        } else {
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleCloseSuccessDialog = () => {
        setIsSubmitSuccess(false);
        setIsSubmitSuccessDialogOpen(false);
        setOpen(false);
    };
    return (
        <div>
            <Box>
                <Image
                    src="/pan.png"
                    width={600}
                    height={500}
                    alt=""
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            </Box>

            <Box sx={{ textAlign: "center", mt: 2 }}>
                <Typography variant="h4" gutterBottom>
                    이벤트 안내
                </Typography>
                <Typography variant="h6" gutterBottom>
                    응모 기간 2023년 8월 4일 (금요일) - 2023년 9월 4일 (월요일)
                </Typography>
                <Typography variant="h6" gutterBottom>
                    당첨자 발표 2023년 9월 8일 (금요일) AIA 스퍼스 허브 내
                    공지사항 발표 및 개별 연락
                </Typography>

                <Typography variant="body1" gutterBottom sx={{ mt: 2 }}>
                    <strong>당첨자 활동기간&내용</strong>
                </Typography>
                <Typography variant="body1" gutterBottom>
                    2024년 3월 - 2024년 6월
                </Typography>
                <Typography variant="body1" gutterBottom>
                    * 런던 가기 전 AIA생명 본사 홍보 활동 1회 참여
                </Typography>
                <Typography variant="body1" gutterBottom>
                    * 런던 방문 전/후 본인의 SNS채널, 블로그를 통해 VIP 투어
                    홍보
                </Typography>

                <Typography variant="body1" gutterBottom sx={{ mt: 2 }}>
                    <strong>모집대상 및 응모방법</strong>
                </Typography>
                <Typography variant="body1" gutterBottom>
                    2024년 4월에 런던에 방문하실 수 있고, 사진 및 영상에 출연
                    가능하신 분은 카카오 간편로그인을 통해 회원 가입한 후 이벤트
                    참여 가능합니다. (1회 한정)
                </Typography>
                <Typography variant="body1" gutterBottom>
                    * 여러분이 팬 크리에이터로 꼭 뽑혀야 하는 강력한 이유를 자유
                    방식으로 제출해 주세요. (개인 포트폴리오, 본인의 SNS/블로그
                    URL, UCC 영상, 직접 작성한 글 등 본인을 어필할 수 있는 내용
                    모두 환영)
                </Typography>
                <Typography variant="body1" gutterBottom>
                    * 1등 당첨을 위해 자료 제출은 필수
                </Typography>
                <Typography variant="body1" gutterBottom>
                    * 2등~5등 경품은 자료 제출 없이 응모만 해도 추첨을 통해 당첨
                    가능
                </Typography>
                <Typography variant="body1" gutterBottom>
                    * 제출처: aiampsteam@gmail.com
                </Typography>
            </Box>

            <Box>
                <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid item xs={6}>
                        <Image
                            src="/event1.png"
                            width={500}
                            height={300}
                            alt=""
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Image
                            src="/event2.png"
                            width={500}
                            height={300}
                            alt=""
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box marginTop={3}>
                <Button
                    variant="outlined"
                    onClick={handleClickOpen}
                    color="primary"
                    sx={{
                        width: "40%",
                        height: "60%",
                        padding: "12px",
                        margin: "0 auto",
                        display: "block",
                    }}
                >
                    <Typography variant="h5">이벤트 참여하기</Typography>
                </Button>
                <Dialog
                    open={openLoginAlert}
                    onClose={handleLoginAlertClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <Alert severity="error" onClose={handleLoginAlertClose}>
                        <AlertTitle>경고!</AlertTitle>
                        이벤트 참여시 <strong>로그인 필요</strong>
                    </Alert>
                </Dialog>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            minWidth: "70%",
                            width: "90%",
                        },
                    }}
                >
                    {" "}
                    <DialogContent style={{ padding: "20px" }}>
                        <Box
                            component="form"
                            onSubmit={handleControl}
                            mt={1}
                            sx={{ width: "100%", maxWidth: 950, mx: "auto" }}
                        >
                            <DialogContentText>
                                <Typography variant="h6" sx={{ mb: 2 }}>
                                    {" "}
                                    이벤트 당첨시 경품 지급 안내를 위해 정확한
                                    정보를 기입해 주세요.
                                </Typography>
                            </DialogContentText>
                            <FormControlLabel
                                required
                                checked={checkbox1Checked}
                                onChange={() =>
                                    setCheckbox1Checked(!checkbox1Checked)
                                }
                                control={<Checkbox />}
                                label="[필수] 이벤트를 위한 개인정보 수집∙이용 동의 및 처리 위탁 안내"
                            />
                            <Typography variant="body2" sx={{ mt: 1 }}>
                                AIA생명보험 주식회사가 이벤트 진행 등을 목적으로
                                아래와 같이 본인의 개인정보를 수집·이용하는 것에
                                동의합니다.
                            </Typography>

                            <Box
                                sx={{ border: 1, borderRadius: 1, mt: 1, p: 1 }}
                                style={{
                                    maxHeight: 150,
                                    overflow: "auto",
                                    maxWidth: 950,
                                }}
                            >
                                <Typography variant="body2">
                                    <strong>수집·이용 목적: </strong>이벤트 진행
                                    및 관련 업무 처리 (당첨자 선정, 안내, 경품
                                    제공, 문의∙민원 처리 등) 이벤트 홈페이지
                                    개발 및 운영·관리 등
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1 }}>
                                    <strong>수집·이용 항목: </strong>이름,
                                    휴대폰번호, 성별, 거주지역, 생년월일, 이벤트
                                    관련 업무 처리에 필요한 정보 등
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1 }}>
                                    <strong>보유 및 이용기간: </strong>
                                    동의일로부터 6개월
                                </Typography>
                            </Box>

                            <FormControlLabel
                                required
                                checked={checkbox2Checked}
                                onChange={() =>
                                    setCheckbox2Checked(!checkbox2Checked)
                                }
                                control={<Checkbox />}
                                label="[필수] AIA생명의 마케팅을 위한 개인정보 수집∙이용 동의"
                            />

                            <Typography variant="body2" sx={{ mt: 2 }}>
                                AIA생명보험 주식회사가 보험상품∙서비스 소개 및
                                홍보 등을 목적으로 아래와 같이 본인의 개인정보를
                                수집·이용하는 것에 동의합니다.
                            </Typography>

                            <FormControlLabel
                                required
                                checked={checkbox3Checked}
                                onChange={() =>
                                    setCheckbox3Checked(!checkbox3Checked)
                                }
                                control={<Checkbox />}
                                label="[필수] 광고성 정보 수신 동의"
                            />

                            <Typography variant="body2" sx={{ mt: 2 }}>
                                AIA생명보험 주식회사 및 회사의 업무 수탁자가
                                전화, 전자적 전송 매체(문자, 이메일, 메신저, SNS
                                등) 등의 방법으로 회사의 상품∙서비스 홍보나 판매
                                등의 광고성 정보를 전송하는 것에 동의합니다.
                            </Typography>

                            <Typography variant="body2" sx={{ mt: 2 }}>
                                ※ 위의 동의를 거부하실 수도 있습니다. 그러나
                                동의를 거부하면 이벤트 참여나 경품 제공 등의
                                혜택을 받는 데 제한이 있을 수 있습니다.
                            </Typography>
                        </Box>

                        <Box
                            component="form"
                            onSubmit={handleSubmit(onSubmit)}
                            mt={1}
                            sx={{
                                width: "100%",
                                mx: "auto",
                                maxWidth: 950,
                                mt: 5,
                                border: "1px solid grey",
                                borderRadius: "8px",
                                p: 3,
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 2,
                                    mb: 2,
                                }}
                            >
                                <TextField
                                    fullWidth
                                    label="이름"
                                    variant="filled"
                                    {...register("name", { required: true })}
                                />
                                <TextField
                                    fullWidth
                                    label="생년월일"
                                    variant="filled"
                                    {...register("birth", { required: true })}
                                />
                                <TextField
                                    fullWidth
                                    label="휴대폰번호"
                                    variant="filled"
                                    {...register("phoneNum", {
                                        required: true,
                                    })}
                                />
                            </Box>

                            <FormControl component="fieldset" sx={{ mt: 1 }}>
                                <FormLabel component="legend">성별</FormLabel>
                                <RadioGroup
                                    row
                                    aria-label="gender"
                                    name="gender-row"
                                >
                                    <FormControlLabel
                                        value="male"
                                        control={<Radio />}
                                        label="남"
                                        {...register("gender")}
                                    />
                                    <FormControlLabel
                                        value="female"
                                        control={<Radio />}
                                        label="여"
                                        {...register("gender")}
                                    />
                                </RadioGroup>
                            </FormControl>

                            <TextField
                                fullWidth
                                label="주소"
                                variant="filled"
                                sx={{ mt: 2 }}
                                {...register("address", { required: true })}
                            />
                            <TextField
                                fullWidth
                                multiline
                                label="여러분이 AIA Spurs 팬 크리에이터로 뽑혀야 하는 이유가 무엇이라고 생각하시나요?"
                                variant="filled"
                                sx={{ mt: 2 }}
                                {...register("reason1", { required: true })}
                            />
                            <TextField
                                fullWidth
                                multiline
                                label="본인이 팬 크리에이터로 런던을 방문할 수 있다면 누구와 함께 가고 싶으세요?"
                                variant="filled"
                                sx={{ mt: 2 }}
                                {...register("reason2", { required: true })}
                            />
                            <TextField
                                fullWidth
                                multiline
                                label="손흥민 선수 또는 토트넘 구단에 대한 귀하의 팬 활동을 말씀해주세요."
                                variant="filled"
                                sx={{ mt: 2 }}
                                {...register("reason3", { required: true })}
                            />
                            <Box
                                mt={3}
                                display="flex"
                                justifyContent="flex-end"
                            >
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    disabled={isSubmitDisabled}
                                    sx={{
                                        width: { xs: "100%", sm: "auto" },
                                        p: "12px 24px",
                                    }}
                                >
                                    참여하기
                                </Button>
                                <Button
                                    variant="outlined"
                                    onClick={handleClose}
                                    sx={{
                                        width: { xs: "100%", sm: "auto" },
                                        p: "14px 34px",
                                        ml: 1,
                                    }}
                                >
                                    취소
                                </Button>
                            </Box>

                            {isSubmitSuccess && (
                                <Dialog
                                    open={isSubmitSuccessDialogOpen}
                                    onClose={handleCloseSuccessDialog}
                                >
                                    <DialogTitle>응모완료</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            응모완료되었습니다.
                                        </DialogContentText>
                                        <Button
                                            onClick={handleCloseSuccessDialog}
                                        >
                                            확인
                                        </Button>
                                    </DialogContent>
                                </Dialog>
                            )}
                        </Box>
                    </DialogContent>
                </Dialog>
                <Box>
                    <Box
                        sx={{
                            borderBottom: 1,
                            border: "1px dashed",
                            color: "GrayText",
                        }}
                        mt={10}
                        mb={5}
                    />
                    <Comments />
                </Box>
            </Box>
        </div>
    );
}
