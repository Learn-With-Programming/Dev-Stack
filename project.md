## 1. Name of your project: DevStack

## 2. A little description: A modern, responsive, and curated web application designed for developers to explore, filter, and manage essential tools and technologies for building modern software applications.

## 3. Technology that you use

\* Frontend Library:** React (TSX with TypeScript)
**Styling & UI Components:** Tailwind CSS & daisyUI
**Icons & Notifications:** React Icons (`react-icons`) & React-Toastify
**Data Handling:\*\* Asynchronous JSON Data Fetching (`async/await` with `React.Suspense`)

## 4. features about your project

1. **Interactive Tech Stack Selection:** Browse through a wide array of curated technologies and dynamically add or remove them from your custom stack with instant visual feedback via toast notifications.
2. **Modern & Fully Responsive UI:** Designed with a mobile-first approach featuring a smooth side-drawer navigation menu for mobile screens and clean grid layouts for desktop viewing.
3. **Seamless Async Data Loading:** Implements smooth loading skeleton placeholders using `React.Suspense` to provide an effortless user experience while technology data is fetched.

---

## 5. 1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It allows us to write HTML-like markup directly inside JavaScript files. It is used in React because it makes writing UI components intuitive, highly readable, and keeps rendering logic alongside component logic.

## 5. 2. What is the difference between props and state?

Props (Properties): Read-only data passed from a parent component down to a child component. They cannot be modified by the child.
State: Internal data managed within a specific component. It can be changed over time, causing the component to re-render.

## 6.3. What does the useState hook do, and where did you use it in this project?

The useState hook allows functional components to store and manage local state. In this project, it was used to manage the mobile drawer visibility (isMobileMenuOpen) and track selected items in the "Your Stack" sidebar.

## 7.4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook handles side-effects in functional components. It was used here to trigger an asynchronous fetch request to load data from public/data.json immediately when the application component mounts.

## 8.5. Why does every item in a .map() list need a unique key prop?

The key prop helps React identify which items have changed, been added, or removed. It optimizes performance by updating only the specific element in the DOM instead of re-rendering the entire list.

## 9.6. What is conditional rendering? Show one place you used it.

Conditional rendering is showing or hiding UI elements based on specific conditions or state.
Example: In the "Your Stack" sidebar, if the stack array is empty.

## 10.7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Parent to Child: Data is passed down using standard Component Props.
Child to Parent: The parent passes a callback function as a prop to the child, and the child calls that function with data as an argument when an event occurs.
