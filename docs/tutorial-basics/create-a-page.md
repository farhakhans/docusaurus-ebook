---
sidebar_position: 1
---

# Create a Page

Add **Markdown or React** files to `src/pages` to create a **standalone page**:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## Create your first React Page

Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>Physical AI & Humanoid Robotics</h1>
      <p>T# Chapter 1: Introduction to Physical AI

Physical AI refers to artificial intelligence systems that interact directly with the physical world. Unlike traditional AI, which works primarily with data in digital space, Physical AI integrates **sensors, actuators, and computational intelligence** to perform real-world tasks.  

Humanoid robots are a major application of Physical AI. These systems are designed to replicate human behavior, allowing machines to navigate, perceive, and act in complex environments. Physical AI combines robotics, machine learning, and human-computer interaction to create autonomous agents capable of learning and adapting.  

Applications include robotic assistants in healthcare, delivery systems, and research platforms for AI-human interaction. The field is growing rapidly due to advances in sensors, computing, and AI algorithms, making robots smarter, safer, and more efficient in performing real-world tasks.</p>
    </Layout>
  );
}
```

A new page is now available at [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).
