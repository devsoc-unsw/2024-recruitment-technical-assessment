# DevSoc Backend Technical Assessment

## Background

In this assessment, you will be working with **files**. A file has the following properties:

- An **id** (`int`)
- A **name** (`str`)
- A list of **categories** (`str[]`)
- A **parent** file (`int`) - this is the ID of the parent file, or `-1` if none
- A **size** (`int`)

Code templates have been provided for C, C++, Java, JavaScript, Python and TypeScript. Please select **ONE** language to complete the following tasks in.

## Tasks

### Task 1

The first task is to implement the `leafFiles` function, which takes in a list of files and returns a list containing the names of all _leaf files_, that is, files which have no children.

The file names can be returned in any order.

### Task 2

The second task is to implement the `kLargestCategories` function, which takes in a list of files and a number `k` and returns a list containing the `k` categories that have the most files.

This list should be returned in descending order of size. If multiple categories have the same size, they should be ordered alphabetically. If there are less than `k` categories in the list of files, the returned list should contain all categories.

### Task 3

The third and final task is to implement the `largestFileSize` function, which returns the size of the file with the largest total size. Total size **includes the size of all children files** (this includes grandchildren etc.).

If there are no files, this function should return `0`.

## Testing

Basic assert-based tests are provided in each language, but they are not comprehensive, and we recommend doing some manual testing to ensure your solutions are correct.

You can compile and run the tests using the given `run.sh` scripts by running the command

```
./run.sh
```

from within the directory of your chosen language.

These scripts assume you have the required compilers/runtimes installed for your chosen language. The C/C++ compiler used is configurable within `run.sh`.

## Submission

To submit, push your solutions to your fork and submit a link to the fork in the application form. Your submissions will be reviewed by our Project Directors and considered holistically, taking in to account correctness, efficiency and code style.
