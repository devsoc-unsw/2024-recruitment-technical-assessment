
type FileData = {
    id: number,
    name: string,
    categories: string[],
    parent: number
    size: number
};

/**
 * Task 1
 */
function leafFiles(files: FileData[]): string[] {
    let parentFiles: number[] = [];
    // compile a list of parent files
    for (const file of files) {
        if (file.parent != -1) {
            parentFiles.push(file.id);
        }
    }
    // make a list of leaf file, i.e. list of all files that are not parent files
    let leafFiles: FileData[] = files;
    for (const file of leafFiles) {
        for (const parentFile of parentFiles) {
            if (file.id === parentFile) {
                leafFiles = leafFiles.filter(file => file.id !== parentFile);
            }
        }
    }
    let leafFilesNames: string[] = [];
    for (const file of leafFiles) {
        leafFilesNames.push(file.name);
    }
    return leafFilesNames;
}

/**
 * Task 2
 */
function kLargestCategories(files: FileData[], k: number): string[] {
    // map to store category frequency and sizes
    const catMap: Map<string, { count: number, size: number }> = new Map();

    for (const file of files) {
        for (const category of file.categories) {
            if (!catMap.has(category)) {
                catMap.set(category, { count: 0, size: 0 });
            }
            // idk why the next two lines are returning undefined
            // catMap.get(category).count++;
            // catMap.get(category).size += file.size;
        }
    }

    // convert map into sorted array
    const sortedCategories = Array.from(catMap.entries())
        .sort((a, b) => {
            // Sort by size in descending order
            if (a[1].size !== b[1].size) {
                return b[1].size - a[1].size;
            } else {
                // If sizes are equal, sort alphabetically
                return a[0].localeCompare(b[0]);
            }
        })
        .map(entry => entry[0]);
    return sortedCategories.slice(0, k);

}

/**
 * Task 3
 */
function largestFileSize(files: FileData[]): number {
    if (files.length === 0) {
        return 0;
    }

    let maxFileSize = 0;

    for (const file of files) {
        const totalSize = parentFileSize(file, files);
        // new largest file size replaces old largest file size
        if (totalSize > maxFileSize) {
            maxFileSize = totalSize;
        }
    }

    return maxFileSize;
}


function parentFileSize(file: FileData, files: FileData[]): number {
    let totalSize = file.size;
    
    // recursively add children file sizes
    const children = files.filter(f => f.parent === file.id);
    for (const child of children) {
        totalSize += parentFileSize(child, files);
    }

    return totalSize;
}

function arraysEqual<T>(a: T[], b: T[]): boolean {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

const testFiles: FileData[] = [
    { id: 1, name: "Document.txt", categories: ["Documents"], parent: 3, size: 1024 },
    { id: 2, name: "Image.jpg", categories: ["Media", "Photos"], parent: 34, size: 2048 },
    { id: 3, name: "Folder", categories: ["Folder"], parent: -1, size: 0 },
    { id: 5, name: "Spreadsheet.xlsx", categories: ["Documents", "Excel"], parent: 3, size: 4096 },
    { id: 8, name: "Backup.zip", categories: ["Backup"], parent: 233, size: 8192 },
    { id: 13, name: "Presentation.pptx", categories: ["Documents", "Presentation"], parent: 3, size: 3072 },
    { id: 21, name: "Video.mp4", categories: ["Media", "Videos"], parent: 34, size: 6144 },
    { id: 34, name: "Folder2", categories: ["Folder"], parent: 3, size: 0 },
    { id: 55, name: "Code.py", categories: ["Programming"], parent: -1, size: 1536 },
    { id: 89, name: "Audio.mp3", categories: ["Media", "Audio"], parent: 34, size: 2560 },
    { id: 144, name: "Spreadsheet2.xlsx", categories: ["Documents", "Excel"], parent: 3, size: 2048 },
    { id: 233, name: "Folder3", categories: ["Folder"], parent: -1, size: 4096 },
];

console.assert(arraysEqual(
    leafFiles(testFiles).sort((a, b) => a.localeCompare(b)),
    [
        "Audio.mp3",
        "Backup.zip",
        "Code.py",
        "Document.txt",
        "Image.jpg",
        "Presentation.pptx",
        "Spreadsheet.xlsx",
        "Spreadsheet2.xlsx",
        "Video.mp4"
    ]
));

console.assert(arraysEqual(
    kLargestCategories(testFiles, 3),
    ["Documents", "Folder", "Media"]
));

console.assert(largestFileSize(testFiles) == 20992)
