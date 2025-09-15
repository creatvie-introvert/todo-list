# todo-list
[To-Do List LiveSite]() <!-- add live site link -->
The To-Do List App is a simple, responsive, and interactive web application designed to help users organise daily tasks. Built using HTML, CSS, and vanilla JavaScript, it allows users to add, complete, and delete tasks. Tasks are saved in localStorage so they persist between sessions.

[Contents](#contents)  
* [User Goals](#user-goals)  
* [User Stories](#user-stories)  
* [Website Goals and Objectives](#website-goals-and-objectives)  
* [Wireframes](#wireframes)  
* [Design Choices](#design-choices)  
  + [Typography](#typography)  
  + [Colour Scheme](#colour-scheme)  
  + [Responsiveness](#responsiveness)  
- [Features](#features)  
  * [Existing Features](#existing-features)  
    + [Header](#header)  
    + [Task Input Section](#task-input-section)  
    + [Task List](#task-list)  
    + [Footer](#footer)  
  * [Future Enhancements](#future-enhancements)  
- [Technologies Used](#technologies-used)  
  * [Languages](#languages)  
  * [Tools](#tools)  
- [Testing](#testing)  
  * [Bugs Fixed](#bugs-fixed)  
  * [Responsiveness Tests](#responsiveness-tests)  
  * [Code Validation](#code-validation)  
    + [HTML](#html)  
    + [CSS](#css)  
    + [JavaScript](#javascript)  
  * [User Story Testing](#user-story-testing)  
  * [Feature Testing](#feature-testing)  
  * [Accessibility Testing](#accessibility-testing)  
  * [Lighthouse Testing](#lighthouse-testing)  
  * [Browser Testing](#browser-testing)  
- [Deployment](#deployment)  
  * [To deploy the project](#to-deploy-the-project)  
  * [To fork the project](#to-fork-the-project)  
  * [To clone the project](#to-clone-the-project)  
- [Credits](#credits)  

## User Goals
- Be able to quickly add new tasks with minimal clicks or typing.
- Clearly see all current tasks in a simple, uncluttered interface.
- Mark tasks as completed in a satisfying, visual way (e.g., strike-through).
- Easily delete tasks that are no longer needed.
- Have tasks saved automatically so they remain after closing/reloading the browser.
- Access the app across devices (mobile, tablet, desktop) with a responsive layout.
- Experience smooth, intuitive navigation without distractions.
- Use the app without needing instructions — interface should feel natural.
- Have a lightweight tool that loads fast and works offline (localStorage).
[Back to top](#contents)
## User Stories
- As a user, I want to add new tasks so that I can remember things I need to do.
- As a user, I want to see all my tasks in a clear list so I can stay organized.
- As a user, I want to mark tasks as complete so I can track my progress.
- As a user, I want completed tasks to look different (e.g., strike-through) so I can easily see what’s done.
- As a user, I want to delete tasks so I can remove items I no longer need.
- As a user, I want my tasks to be saved automatically so I don’t lose them when I refresh the page.
- As a user, I want the app to work on mobile and desktop so I can manage tasks anywhere.
- As a user, I want the interface to be simple and fast so I can use it without confusion.
[Back to top](#contents)

[View User Stories in GitHub Projects](https://github.com/users/creatvie-introvert/projects/14/views/1?template_dialog_tab=featured&layout_template=board)
## Website Goals and Objectives
- Build a simple, responsive, and intuitive task management app using **HTML, CSS, and vanilla JavaScript**.
- Provide users with a lightweight productivity tool that works entirely in the browser without the need for backend services.
- Demonstrate core front-end development skills including **DOM manipulation**, event handling, and localStorage persistence.
- Design a clean and distraction-free interface that adapts across devices, following mobile-first design principles.
- Ensure accessibility by using semantic HTML, clear color contrasts, and `ARIA` where needed.
- Showcase project planning and tracking through **User Stories** linked to **GitHub Projects**.
- Deploy the app on **GitHub Pages** for public access and portfolio presentation.

[Back to top](#contents)
## Wireframes
Wireframes were designed using a mobile-first approach, then adapted for tablet and desktop layouts. The wireframes outline the structure of the app, focusing on usability and clarity:
- **Mobile Version** – Single-column layout with task input at the top and task list below for easy thumb navigation.
- **Tablet Version** – Slightly wider layout, larger spacing, and more visible tasks without scrolling.
- **Desktop Version** – Centred container with balanced spacing, clear task list, and optional footer controls.

The final live version closely follows the wireframes, with minor adjustments for accessibility and responsiveness.

<details>
  <summary><b>Mobile Wireframe Preview</b></summary>
  <img src="docs/ux-artefacts/mobile-wireframe.png" alt="Mobile Wireframe" width="300">
</details>  

<details>
  <summary><b>Tablet Wireframe Preview</b></summary>
  <img src="docs/ux-artefacts/tablet-wireframe.png" alt="Tablet Wireframe" width="500">
</details>  

<details>
  <summary><b>Desktop Wireframe Preview</b></summary>
  <img src="docs/ux-artefacts/desktop-wireframe.png" alt="Desktop Wireframe" width="700">
</details>  

[Back to top](#contents)
## Design Choices
The To-Do List app was designed with simplicity and clarity at the forefront. All design decisions were made to ensure users can quickly add, manage, and track tasks without distractions. A mobile-first approach was followed to guarantee usability across all screen sizes, scaling gracefully to tablet and desktop layouts.

### Typography
The app uses the Inter font family for its modern, clean, and highly legible style. Inter was chosen because it provides excellent readability across different devices and screen sizes.
- Heading / H1 (32px, Bold): Used for the app title in the header.
- Heading / H2 (20px, Semi-Bold): Used for section headings such as task filters.
- Body / Paragraph (16px, Regular): Used for task text, input placeholders, and buttons.
- Body / Caption (12–14px, Regular/Italic): Used for secondary text such as task counts.

This hierarchy ensures that important elements such as the app title and tasks stand out, while supporting information remains subtle but clear.

### Colour Scheme
The To-Do List app supports both light and dark modes to improve accessibility and user comfort. Each mode uses a limited palette of five core colours to keep the interface consistent and easy to navigate.

#### Light Mode (Cream Base)
A warm cream background with a green accent ensures a clean and approachable interface.

| Style Name   | Hex Code  | Usage Example             |
|--------------|-----------|---------------------------|
| Background   | #FAF9F6   | Page background           |
| Surface      | #FFFFFF   | Task cards, input fields  |
| Primary Text | #1F1F1F   | Headings, task text       |
| Accent Green | #6B8E23   | Add button, active filter |
| Accent Red   | #E53935   | Delete button/icon        |

#### Dark Mode (Cream Base)
A muted dark background with the same green accent for continuity.

| Style Name   | Hex Code  | Usage Example             |
|--------------|-----------|---------------------------|
| Background   | #1C1B1A   | Page background           |
| Surface      | #2A2A28   | Task cards, input fields  |
| Primary Text | #FDFCF9   | Headings, task text       |
| Accent Green | #A4C639   | Add button, active filter |
| Accent Red   | #F87171   | Delete button/icon        |

**Completed Tasks**
In both modes, completed tasks are displayed with a **strike-through** and reduced opacity of the primary text colour to clearly distinguish them from active tasks.

### Responsiveness
The To-Do List app was designed using a mobile-first approach, ensuring it works seamlessly on smaller screens before scaling up for larger devices. CSS media queries were applied to adapt layouts, spacing, and alignment across breakpoints. The design maintains usability and consistency whether accessed on a phone, tablet, or desktop.
- **Mobile (375×812):**
    - Single-column layout for simplicity.
    - Input field and add button placed prominently at the top.
    - Footer elements stacked to avoid crowding.
- **Tablet (768×1024):**
    - Increased spacing and padding for improved readability.
    - Wider input field with a proportionate add button.
    - Footer split into two rows: task counter and clear button on the first row, filters centered below.
- **Desktop (1440×1024):**
    - Centered container with max-width of ~960–1140px for optimal line length.
    - Input field and button balanced across the grid.
    - Footer displayed in a single row with task counter on the left, filters in the center, and clear button on the right.

This responsive strategy ensures the app remains intuitive, accessible, and visually balanced across all devices, providing users with a consistent and engaging experience.

[Back to top](#contents)
## Features
### Existing Features
#### Header
#### Task Input Section
#### Task List
#### Footer
### Future Enhancements
[Back to top](#contents)
## Technologies Used
### Languages
### Tools
[Back to top](#contents)
## Testing
### Bugs Fixed
### Responsiveness Tests
### Code Validation
#### HTML
#### CSS
#### JavaScript
### User Story Testing
### Feature Testing
### Accessibility Testing
### Lighthouse Testing
### Browser Testing
[Back to top](#contents)
## Deployment
The To-Do List app was developed and deployed using GitHub Pages. The repository is publicly available, and the live site can be accessed via the deployment link.
### To Deploy the Project
The site was deployed to GitHub Pages using the following steps:
1.	Log in to GitHub and navigate to the repository.
2.	Click on the Settings tab at the top of the repository.
3.	In the side menu, select Pages.
4.	Under the Branch section, select main (or master) and the /root folder.
5.	Click Save.
6.	GitHub Pages will generate a link to the live site after a few moments.

The live site is available at:
[To-Do List App Live]()

### To Fork the Project
Forking the repository allows you to create a personal copy to view and/or modify without affecting the original project.
1.	Log in to GitHub.
2.	Navigate to the repository page.
3.	In the top-right corner, click the Fork button.
4.	A copy of the repository will now be available in your GitHub account.

### To Clone the Project
Cloning creates a local copy of the repository on your machine for development.
1.	Log in to GitHub.
2.	Navigate to the main page of the repository.
3.	Click the green Code button and copy the HTTPS link.
4.	Open your IDE or terminal and navigate to the location where you want the clone.
5.	Type:
```
git clone https://github.com/your-username/todo-list.git
```
6.	Press Enter to create a local clone.
[Back to top](#contents)
## Credits
[Back to top](#contents)

