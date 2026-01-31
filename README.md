# Kirk's Site

This repository contains Kirk's site, which is currently being migrated from a static Webflow export to a modern Next.js application.

## Project Structure

- **`app/`** - Next.js 16+ application using the App Router with TypeScript
- **`legacy/`** - Original Webflow export (HTML, CSS, JS, images, fonts)

## Running the Next.js App Locally

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kwasham/Kirks-site.git
cd Kirks-site
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page will auto-update as you edit files in the `app/` directory.

### Building for Production

Build the application:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Starting Production Server

After building, start the production server:

```bash
npm run start
# or
yarn start
# or
pnpm start
```

### Linting

Run ESLint to check for code quality issues:

```bash
npm run lint
# or
yarn lint
# or
pnpm lint
```

## Legacy Site

The original Webflow export is preserved in the `legacy/` directory. To view the legacy site:

1. Navigate to the `legacy/` directory
2. Open `index.html` in a web browser, or
3. Serve the directory with a local web server:
   ```bash
   cd legacy
   npx serve
   ```

## Migration Status

🚧 **In Progress** - The site is currently being migrated to Next.js. The legacy Webflow export remains available in the `legacy/` folder.

## Technology Stack

- **Framework**: Next.js 16+
- **Language**: TypeScript
- **Runtime**: Node.js 20+
- **Package Manager**: npm

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [TypeScript](https://www.typescriptlang.org/)
