import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CircularProgress from "@mui/material/CircularProgress";

export default function WeatherCard({
  location,
  temp_f,
  temp_c,
  condition,
  loading,
  icon,
}) {
  if (loading) {
    return (
      <Card
        variant="outlined"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "200px",
        }}
      >
        <CircularProgress thickness={6} />
      </Card>
    );
  }

  const iconUrl = `https:${icon}`;

  return (
    <Card variant="outlined">
      <img src={iconUrl} alt="Weather icon" style={{ width: 50, height: 50 }} />
      <CardHeader title={location} />
      <Typography>{condition}</Typography>
      <Typography>{temp_f}</Typography>
      <Typography>{temp_c}</Typography>
    </Card>
  );
}
