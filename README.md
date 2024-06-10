<div align="center">

 <br />
      <img src="https://github.com/chofor-cliford/summarize_it/blob/master/public/assets/favicon.ico" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Redux-black?style=for-the-badge&logoColor=white&logo=redux&color=764ABC" alt="redux" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">An AI Article Summarizer Website</h3>
  </div>


## 📖 <a name="table">Table of Contents</a>

1. ✏️ [Introduction](#introduction)
2. 💻 [Technologies](#tech)
3. ❇️ [Features](#features)
4. 👨‍💻 [Quick Start](#quick-start)


## <a name="introduction">✏️ Introduction</a>

Summarize any kind of article with just one click using the powerful OpenAI model.

## <a name="tech">💻 Technologies</a>

- React.js
- TypeScript
- Redux Toolkit
- Tailwind CSS

## <a name="features">❇️ Features</a>

✔️ **Modern User Interface**: A modern and user-friendly interface, offering an intuitive experience for users.

✔️ **Summary Generation**: Users can input the URL of a lengthy article, and the web app utilizes AI to provide a concise summary of the article content.

✔️ **History Saving with Local Storage**: The app includes a history feature, allowing users to save summaries locally, providing a convenient way to revisit and manage their reading history.

✔️ **Copy to Clipboard Functionality**: Enables users to easily share or store the summarized content by copying it to their clipboard.

✔️ **Advanced RTK Query API Requests**: Utilizes the advanced capabilities of Redux Toolkit (RTK) Query for making API requests. These requests fire conditionally based on specific criteria, optimizing data fetching and management.

and many more, including code architecture and reusability 

## <a name="quick-start">👨‍💻 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/adrianhajdin/project_ai_summarizer.git
cd project_ai_summarizer
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_RAPID_API_ARTICLE_KEY=
```

Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on the [Rapid API website](https://rapidapi.com/apininjas/api/cars-by-api-ninjas).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.