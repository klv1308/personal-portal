import Box from "@mui/material/Box";
import { useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import {
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";

interface MedicationSchedule {
  name: string;
  time: Dayjs[];
}

interface Schedule {
  startDate: Dayjs;
  endDate: Dayjs;
  medication: MedicationSchedule[];
}

export function Calendar() {
  //const [scedule, setScedule] = useState<Schedule>();
  useEffect(() => {
    var now = dayjs();

    const obj: Schedule = {
      startDate: now,
      endDate: now.add(10, "day"),
      medication: [
        {
          name: "таблетки 1",
          time: [
            dayjs("09:00:00", "HH:mm:ss"),
            dayjs("14:00:00", "HH:mm:ss"),
            dayjs("20:00:00", "HH:mm:ss"),
          ],
        },
        {
          name: "таблетки 2",
          time: [dayjs("15:00:00", "HH:mm:ss")],
        },
      ],
    };
    localStorage.setItem("medicationSchedule", JSON.stringify(obj));
    //setScedule(obj);
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#F3F6F9",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignContent: "flex-start",
        padding: 2,
      }}
    >
      <Typography variant="h5">Today</Typography>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" sx={{ textAlign: "start" }}>
            8:00
          </Typography>
          <Stack>
            <FormControlLabel
              control={<Checkbox color="success" />}
              label="Таблетки 1"
            />
            <FormControlLabel
              control={<Checkbox color="success" />}
              label="Таблетки 2"
            />
          </Stack>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h5" sx={{ textAlign: "start" }}>
            15:00
          </Typography>
          <Stack>
            <FormControlLabel
              control={<Checkbox color="success" />}
              label="Таблетки 1"
            />
          </Stack>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h5" sx={{ textAlign: "start" }}>
            20:00
          </Typography>
          <Stack>
            <FormControlLabel
              control={<Checkbox color="success" />}
              label="Таблетки 1"
            />
          </Stack>{" "}
        </CardContent>
      </Card>
    </Box>
  );
}
