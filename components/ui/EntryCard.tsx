import { Entry } from "@/interfaces";
import { useContext } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { UIContext } from "@/context/ui";

interface Props {
  entry: Entry;
}
export const EntryCard: React.FC<Props> = ({ entry }) => {
  const { toggleDragging } = useContext(UIContext);
  const onDragStart = (event: React.DragEvent) => {
    event.dataTransfer.setData("text", entry._id);
    toggleDragging();
  };
  return (
    <Card
      sx={{ marginBottom: 1 }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={toggleDragging}
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
