# Promptly

Promptly is a Next.js application built with Tailwind CSS that lets you share and discover prompts across various industries like Career, Marketing, and Content. The app offers a modern UI with dark mode support, componentized navigation, and a dynamic prompt selection system powered by JSON files.

## Project Structure

- **/app/**  
  Contains the application code including:
  - `page.tsx`: The main page that renders the header, sidebar, and prompt content.
  - `/components/`: Contains reusable components like Navigation and Sidebar.
  - `/globals.css`: Global styling using Tailwind CSS.
  - `/layout.tsx`: The layout configuration for Next.js.

- **/database/**  
  Holds the prompt data organized into subfolders by category:
  - **Career**: Contains JSON files (e.g., `jobDescription.json`, `interviewPreparation.json`, `resumeTips.json`).
  - **Marketing**: Contains JSON files (e.g., `adCopy.json`, `seoSuggestions.json`).
  - **Content**: Contains JSON files (e.g., `blogOutlines.json`, `socialMediaPosts.json`).

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/JoshHargreaves/Promptly.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd c:/Projects/Promptly
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Usage

- **Prompt Selection:**  
  Use the sidebar to select a prompt by industry. On selection, the main content area updates to display a card with the prompt title and prompt data.

- **Dark Mode:**  
  Toggle dark mode using the button in the header.

- **GitHub Repository:**  
  A GitHub icon in the header links to the repository for more details or contributions.

## Customization

- **Prompt Data:**  
  Add or update prompt JSON files in the appropriate folder under `/database`. Each file should include a `title` and `promptData` field.

- **Styling:**  
  Modify styles in `/app/globals.css` using Tailwind CSS classes.

- **Components:**  
  Update the Navigation or Sidebar components in `/app/components` to customize the UI.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

[MIT](LICENSE)
