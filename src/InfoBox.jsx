import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

  const COLD_URL =
    "https://www.findingtheuniverse.com/wp-content/uploads/2017/01/Blue2Bhour2BFinland_by_Laurence2BNorah.jpg";
  const HOT_URL =
    "https://images.unsplash.com/photo-1563761141-38f17aad6d44?q=80&w=1634&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL = "https://s.w-x.co/in-kcc_chirasree_phoenix_amphan.jpg";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 120 }}
            image={
              // eslint-disable-next-line react/prop-types
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent className="card">
            <Typography gutterBottom variant="h5" component="div">
              <div>
                {info.humidity > 80 ? (
                  <ThunderstormIcon />
                ) : info.temp > 15 ? (
                  <WbSunnyIcon />
                ) : (
                  <AcUnitIcon />
                )}
                &nbsp;
                <div>{info.city}</div>
              </div>
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperture = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}%</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>
                The weather can be described as <b>{info.weather}</b> and Temp
                Feels Like {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
