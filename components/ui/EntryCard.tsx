import { Entry } from "@/interfaces";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

interface Props {
  entry: Entry;
}
export const EntryCard: React.FC<Props> = ({ entry }) => {
  const onDragStart = (event: React.DragEvent) => {
    event.dataTransfer.setData("text", entry._id);
    // todo: modificar el estado para indicar que estoy haciendo drag
  };
  const onDragEnd = () => {
    // todo: cancelar on drag
  };
  return (
    <Card
      sx={{ marginBottom: 1 }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {entry.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}
        >
          <Typography variant="body2">hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
