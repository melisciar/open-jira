import { useContext } from "react";
import { Router, useRouter } from "next/router";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { UIContext } from "@/context/ui";
import { Entry } from "@/interfaces";
import { dateFunctions } from "@/utils";

interface Props {
  entry: Entry;
}
export const EntryCard: React.FC<Props> = ({ entry }) => {
  const { toggleDragging } = useContext(UIContext);
  const router = useRouter();

  const onDragStart = (event: React.DragEvent) => {
    event.dataTransfer.setData("text", entry._id);
    toggleDragging();
  };

  const onClick = () => {
    router.push(`/entries/${entry._id}`);
  };
  return (
    <Card
      onClick={onClick}
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
          <Typography variant="body2">
            {dateFunctions.getFormatDistanceToNow(entry.createdAt)}
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
