import { Typography, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";

export default function WeatherCard({
  location,
  temp_f,
  temp_c,
  condition,
  loading,
  icon,
  isRendered,
}) {
  if (loading) {
    return (
      <Paper
        elevation={3}
        sx={{ maxWidth: 300, m: 2, p: 2, maxheight: 300 }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <CircularProgress thickness={6} />
        </Box>
      </Paper>
    );
  }

  const iconUrl = `https:${icon}`;

  if (!loading)
    return (
      <Paper elevation={3} sx={{ maxWidth: 300, m: 2, p: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <img
            src={iconUrl}
            alt="Weather icon"
            style={{ width: 80, height: 80 }}
          />
          <CardHeader
            title={location}
            titleTypographyProps={{ align: "center", variant: "h6" }}
          />
          <Typography variant="body1" align="center">
            {condition}
          </Typography>
          <Typography variant="body1" align="center">
            Temp: {temp_f}°F / {temp_c}°C
          </Typography>
        </Box>
      </Paper>
    );
}
