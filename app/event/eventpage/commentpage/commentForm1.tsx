import { useState } from "react";
import { Box, TextField, Button, Grid } from "@mui/material";

const CommentForm = ({ handleSubmit, submitLabel }: any) => {
    const [text, setText] = useState("");
    const isTextareaDisabled = text.length === 0;
    const onsubmit = (event: any) => {
        event.preventDefault();
        handleSubmit(text);
        setText("");
    };
    return (
        <Box component="form" onSubmit={onsubmit} mb={5}>
            <Grid container>
                <Grid item xs={5}>
                    <Box
                        sx={{
                            width: 700,
                            maxWidth: "100%",
                        }}
                    >
                        <TextField
                            fullWidth
                            focused
                            color="info"
                            id="comment-form-textarea"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </Box>
                </Grid>
                <Grid item xs={7}>
                    <button
                        className="comment-form-button"
                        disabled={isTextareaDisabled}
                        style={{
                            padding: 18,
                        }}
                        color="primary"
                    >
                        {submitLabel}
                    </button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CommentForm;
