# DevSoc 2024 Subcommittee Recruitment Frontend Technical

## Overview and Expectations

- You will be given an image of a website. **Your goal is to recreate this image as a page**.
- You can (and we would prefer) that you implement your solution in this directory, though you may choose to create your own repository
- This is a qualitative technical assessment that will be reviewed by Project Directors to make a judgment on progressing your application to an interview.
- There are no exact marks associated with the completion of individual components. Your code will be judged on its structure, style and adherence to frontend conventions to create a visually similar product to the specified goal.
- This technical task is **not compulsory**. You may judge the relevance of this task to the project and role you are applying for.
  - We will be making a judgement based on your holistic application which includes your application answers and may include either or both this and the backend task.

## Tasks

![Unilectives](./Unilectives.png)

An image of the [Unilectives](https://unilectives.devsoc.app/) site is provided above.

### Main Task

The goal of this part is for you to demonstrate your HTML, CSS and JS/TS skills. Please recreate this image in a frontend environment.

You are given the freedom to choose how you recreate this.

- You may decide to use a single `.html` file.
- You can also use any frontend framework or library as the foundation of your page.
  - These include but are not limited to `React`, `Angular`, `Vue` as well as `Next.js` or `Gatsby.js`.
- The search bar and sort by dropdown do not need to work.
- Obviously matching every stylistic aspect of this page may be difficult and time-consuming. Prioritise large elements and structural features before you try to partially fill a rating start for example.
- You do not need to find exact matches for the fonts, icons or logos.
- You do not need to aim for perfection. Please only complete as much of this exercise as you wish focusing on demonstrating the breadth of your frontend knowledge. There is no requirement for perfection or pixel-precise matching.
- You do not need to account for responsive design.

The sample data shown in the image is provided both in the `courses.json` file and below in the [Appendix](#appendix) in `JSON` format.

The [Unilectives](./assets/unilectives.svg) icon has been provided as an `svg`. The rest of the assets are taken from a library which has been provided below for your convenience.

- Navbar: [Heroicons](https://heroicons.com/), from top to bottom:
  - [Unilectives](./assets/unilectives.svg)
  - book-open
  - shield-check
  - bars-arrow-down/bars-arrow-up
  - user-circle
  - moon
  - arrow-right-end-on-rectangle
- Course cards:
  - star: `★` (plain text)

Partially coloured stars are not a requirement for this task but you are welcome make an attempt.

### Stretch Task 1

The goal of this part is for you to demonstrate component state management. Please make the colour of the title "Unilectives" change when clicked.

### Stretch Task 2

The goal of this part is for you to demonstrate interaction with your site. Please make the search bar clickable. Upon being clicked, a `div` should appear. The `div` should be any simple, blank white box with a black outline, vertically and horizontally centred on top of the content of the page. The `div` should contain in it, another button to dismiss the `div`.

## Submission

Please submit the link to your fork of the repo in the application form. You may choose to implement your solution in a separate, fresh repository. If so, please share the link to this repository within `instructions.txt`.

If your solution is not accessible through an `index.html` file or run via a standard `npm i` `npm run start` command, please fill out `instructions.txt` with instructions on how we can open your solution in our browser and any dependencies that we may need.

## Additional comment

Whilst most of our frontend applicants tend to have frontend experience, either through self-study, work or COMP6080, we are open to candidates of varying experiences and abilities. The most important characteristics are one's curiosity and willingness to self-teach/learn. We have had frontend members join with little prior experience and go on to learn and contribute significantly. Therefore, if you find a lot of these exercises difficult, do not be disheartened - please make an attempt.

## Appendix

```json
[
  {
    "course_prefix": "COMP",
    "course_code": 1511,
    "course_title": "Programming Fundamentals",
    "average_stars": 4.8,
    "total_reviews": 68,
    "offered_terms": ["Term 1", "Term 2", "Term 3"]
  },
  {
    "course_prefix": "COMP",
    "course_code": 1531,
    "course_title": "Software Engineering Fundamentals",
    "average_stars": 3.9,
    "total_reviews": 47,
    "offered_terms": ["Term 1", "Term 2", "Term 3"]
  },
  {
    "course_prefix": "COMP",
    "course_code": 1521,
    "course_title": "Computer Systems Fundamentals",
    "average_stars": 4,
    "total_reviews": 40,
    "offered_terms": ["Term 1", "Term 2", "Term 3"]
  },
  {
    "course_prefix": "COMP",
    "course_code": 2521,
    "course_title": "Data Structures and Algorithms",
    "average_stars": 4,
    "total_reviews": 36,
    "offered_terms": ["Summer", "Term 1", "Term 2", "Term 3"]
  },
  {
    "course_prefix": "COMP",
    "course_code": 2511,
    "course_title": "Object-Oriented Design & Programming",
    "average_stars": 3,
    "total_reviews": 33,
    "offered_terms": ["Term 1", "Term 2", "Term 3"]
  },
  {
    "course_prefix": "COMP",
    "course_code": 3311,
    "course_title": "Database Systems",
    "average_stars": 4,
    "total_reviews": 33,
    "offered_terms": ["Term 1", "Term 3"]
  }
]
```
