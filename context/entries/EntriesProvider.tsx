import { PropsWithChildren, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import { EntriesContext, entriesReducer } from ".";
import { Entry } from "@/interfaces";

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, illum.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, illum.",
      status: "in-progress",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, illum.",
      status: "finished",
      createdAt: Date.now(),
    },
  ],
};

export const EntriesProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: "pending",
    };

    dispatch({ type: "Agregar entrada", payload: newEntry });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: "Actualizar entrada", payload: entry });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        //Methods
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
