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

// Example usage:
const folderStructure: Folder[] = [
  {
    id: 1,
    name: "Folder 1",
    size: 100,
    dateCreated: "2024-03-21T12:00:00Z",
    dateModified: "2024-03-21T12:00:00Z",
    folders: [
      {
        id: 2,
        name: "Subfolder 1.1",
        size: 50,
        dateCreated: "2024-03-21T12:00:00Z",
        dateModified: "2024-03-21T12:00:00Z",
        files: [
          {
            id: 3,
            name: "File 1.1.1",
            size: 20,
            dateCreated: "2024-03-21T12:00:00Z",
            dateModified: "2024-03-21T12:00:00Z",
          },
          {
            id: 4,
            name: "File 1.1.1",
            size: 20,
            dateCreated: "2024-03-21T12:00:00Z",
            dateModified: "2024-03-21T12:00:00Z",
          },
          {
            id: 5,
            name: "File 1.1.1",
            size: 20,
            dateCreated: "2024-03-21T12:00:00Z",
            dateModified: "2024-03-21T12:00:00Z",
          },
          {
            id: 6,
            name: "File 1.1.1",
            size: 20,
            dateCreated: "2024-03-21T12:00:00Z",
            dateModified: "2024-03-21T12:00:00Z",
          },
          // Other files...
        ],
        folders: [
          // Subfolders...
          {},
        ],
      },
      // Other subfolders...
    ],
    files: [
      // Files directly under Folder 1...
    ],
  },
  // Other folders...
];

export default folderStructure;
