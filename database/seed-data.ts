interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData = {
  entries: [
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, illum.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, illum.",
      status: "in-progress",
      createdAt: Date.now(),
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, illum.",
      status: "finished",
      createdAt: Date.now(),
    },
  ],
};
