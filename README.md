# 🚀 DevStack — Technology Stack Builder

DevStack is a React-based technology stack builder. Users can explore different technologies, select their favorite technologies, and build their own technology stack.

## ✨ Features

* 🔍 **Explore Technologies** — View different technologies with their name, category, description, rating, difficulty, and icon.
* 🧩 **Build Your Stack** — Select technologies and add them to your personal stack.
* 🗑️ **Manage Your Stack** — Remove individual technologies or remove all selected technologies.
* 🔔 **Toast Notifications** — Get notifications when technologies are added or removed.

## 🛠️ Technologies Used

* React.js
* TypeScript
* Tailwind CSS
* React-Toastify
* React Icons
* JSON
* Vite

## 📸 Project Overview

The application has two main sections:

### Technology Section

Users can see available technologies and select the technologies they want to use.

### Your Stack

Selected technologies are displayed in the **Your Stack** section. Users can remove individual technologies or remove all technologies at once.

---

# ❓ React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript.

It makes React UI code easier to read and write.

Example:

```tsx
<h1>Hello React</h1>
```

---

## 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data managed inside a component that can change over time.

In this project, technology information is passed through props, while selected technologies are stored in state.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook used to store and update data in a component.

I used it to store the selected technologies:

```tsx
const [Count, setCount] = useState<CardType[]>([])
```

When a technology is added or removed, the state is updated.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in React, such as fetching data or running code after a component renders.

It can be used to load JSON data when the component starts.

In this project, the technology data comes from JSON.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list.

It helps React efficiently update, add, or remove items.

Example:

```tsx
{card.map(card => (
  <Card
    key={card.id}
    card={card}
  />
))}
```

Here, `card.id` is the unique key.

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI depending on a condition.

I used it for the empty stack message:

```tsx
{Count.length === 0
  ? "No technologies selected yet"
  : `${Count.length} technologies selected`}
```

If no technology is selected, it shows **"No technologies selected yet"**.

Otherwise, it shows the number of selected technologies.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using **props**.

For example:

```tsx
<Card
  card={card}
  handelcounter={handelcounter}
/>
```

The parent sends the `card` data and the `handelcounter` function to the child.

The child can call the function when a user performs an action. This allows the child to send information back to the parent through a callback function.

---

# 📦 Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Go to the project folder:

```bash
cd my-assignemt-app
```

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

---

# 🏗️ Build

To create a production build:

```bash
npm run build
```

---

# 🌐 Live Demo

**Live Website:** https://friendly-toffee-428657.netlify.app/

---

# 👨‍💻 Author

**Atik Hasan**

Built with ❤️ using React, TypeScript and Tailwind CSS.

