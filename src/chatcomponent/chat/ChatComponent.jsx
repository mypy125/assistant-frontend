import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, TextField, Button, Typography, Card, CardContent } from "@mui/material";
import { getChatResponseAction, processFileAction } from "../state/chat/Action";

const ChatComponent = () => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.chat);

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      dispatch(getChatResponseAction(message));
      setMessage("");
    }
  };

  const handleFileSubmit = (e) => {
    e.preventDefault();
    if (file) {
      dispatch(processFileAction(file));
      setFile(null);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Chat Assistant
      </Typography>
      <Card sx={{ width: "100%", maxWidth: 600, marginBottom: 4 }}>
        <CardContent>
          <form onSubmit={handleChatSubmit}>
            <TextField
              fullWidth
              variant="outlined"
              label="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={loading}
            />
            <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}>
              <Button type="submit" variant="contained" color="primary" disabled={loading}>
                {loading ? "Sending..." : "Send"}
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
      <Card sx={{ width: "100%", maxWidth: 600 }}>
        <CardContent>
          <form onSubmit={handleFileSubmit}>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ marginBottom: 16 }}
            />
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button type="submit" variant="contained" color="secondary" disabled={loading}>
                {loading ? "Uploading..." : "Upload File"}
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
      {data && (
        <Card sx={{ width: "100%", maxWidth: 600, marginTop: 4 }}>
          <CardContent>
            <Typography variant="h6">Response:</Typography>
            <Typography variant="body1">{data}</Typography>
          </CardContent>
        </Card>
      )}

      {error && (
        <Typography color="error" sx={{ marginTop: 2 }}>
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default ChatComponent;