import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, TextField, Button, Typography,Card, CardContent } from "@mui/material";
import { generateReportAction } from "../state/chat/Action";

const ChatComponent = () => {
  const [report, setReport] = useState("");
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.chat);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (report.trim()) {
      dispatch(generateReportAction(report, file));
      setReport("");
      setFile(null);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Report Generator
      </Typography>
      <Card sx={{ width: "100%", maxWidth: 600, marginBottom: 4 }}>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              variant="outlined"
              label="Type your report..."
              value={report}
              onChange={(e) => setReport(e.target.value)}
              disabled={loading}
              multiline
              rows={4}
            />
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ marginTop: 16, marginBottom: 16 }}
            />
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button type="submit" variant="contained" color="primary" disabled={loading}>
                {loading ? "Processing..." : "Generate Report"}
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