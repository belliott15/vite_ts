interface File {
  id: number;
  name: string;
  size: number;
  dateCreated: string;
  dateModified: string;
}

interface Folder {
  id: number;
  name: string;
  size: number;
  dateCreated: string;
  dateModified: string;
  folders: Folder[];
  files: File[];
}

const data: Folder = [
  {
    id: 1,
    name: "Folder 1",
    size: 100, // size in bytes
    dateCreated: "2024-03-21T12:00:00Z",
    dateModified: "2024-03-21T12:00:00Z",
    folders: [
      {
        id: 2,
        name: "Subfolder 1.1",
        size: 50, // size in bytes
        dateCreated: "2024-03-21T12:00:00Z",
        dateModified: "2024-03-21T12:00:00Z",
        files: [
          {
            id: 3,
            name: "File 1.1.1",
            size: 20, // size in bytes
            dateCreated: "2024-03-21T12:00:00Z",
            dateModified: "2024-03-21T12:00:00Z",
          },
          {
            id: 4,
            name: "File 1.1.2",
            size: 30, // size in bytes
            dateCreated: "2024-03-21T12:00:00Z",
            dateModified: "2024-03-21T12:00:00Z",
          },
          {
            id: 5,
            name: "File 1.1.3",
            size: 40, // size in bytes
            dateCreated: "2024-03-21T12:00:00Z",
            dateModified: "2024-03-21T12:00:00Z",
          },
        ],
      },
      {
        id: 6,
        name: "Subfolder 1.2",
        size: 50, // size in bytes
        dateCreated: "2024-03-21T12:00:00Z",
        dateModified: "2024-03-21T12:00:00Z",
        files: [
          {
            id: 7,
            name: "File 1.2.1",
            size: 20, // size in bytes
            dateCreated: "2024-03-21T12:00:00Z",
            dateModified: "2024-03-21T12:00:00Z",
          },
          {
            id: 8,
            name: "File 1.2.2",
            size: 30, // size in bytes
            dateCreated: "2024-03-21T12:00:00Z",
            dateModified: "2024-03-21T12:00:00Z",
          },
          {
            id: 9,
            name: "File 1.2.3",
            size: 40, // size in bytes
            dateCreated: "2024-03-21T12:00:00Z",
            dateModified: "2024-03-21T12:00:00Z",
          },
        ],
      },
    ],
  },
  {
    // Repeat similar structure for other folders...
  },
];

export default data;
