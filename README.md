# Florian Escribano - Personal Website

An Eleventy version of the "Identity" theme by [HTML5 UP](https://html5up.net/), migrated from Jekyll.

![Identity Theme](assets/images/identity.jpg "Identity Theme")

## Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js)

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

This installs Eleventy, Sass compiler, and other required packages.

### 2. Build the Site

**Full build (CSS + Eleventy):**
```bash
npm run build
```

**Build only CSS:**
```bash
npm run build:css
```

**Build only Eleventy:**
```bash
npm run build:eleventy
```

### 3. Development Server

Start the development server with live reload:

```bash
npm start
```

The site will be available at http://localhost:8080 and automatically rebuild when files change.

### 4. Available Commands

- `npm run build` - Build CSS and Eleventy site
- `npm start` - Start development server with live reload
- `npm run build:css` - Compile Sass to CSS
- `npm run watch:css` - Watch and compile Sass changes
- `npm run build:eleventy` - Build Eleventy site only
- `npm run watch:eleventy` - Watch and rebuild Eleventy site

## Configuration

Site configuration is stored in `_data/site.json`. Edit this file to update:

- Site title and description
- Personal information
- Social media links
- Contact information

### Example Configuration

```json
{
  "title": "Your Name - Title",
  "your_name": "Your Name",
  "your_title": "Your Professional Title",
  "skills": "Your Skills",
  "github_url": "https://github.com/yourusername",
  "instagram_url": "https://instagram.com/yourusername",
  "linkedin_url": "https://linkedin.com/in/yourusername",
  "xing_url": "https://xing.com/profile/yourusername"
}
```

## Deployment

The built site is in the `_site/` directory. Deploy to any static hosting service:

- **Netlify**: Connect your Git repository
- **Vercel**: Import your Git repository  
- **GitHub Pages**: Deploy the `_site/` directory
- **Any static host**: Upload the contents of `_site/`

## Project Structure

```
├── _data/
│   └── site.json          # Site configuration
├── _includes/             # Reusable components
│   ├── head.html
│   ├── header.html
│   └── footer.html
├── _layouts/              # Page templates
│   └── default.html
├── _posts/                # Blog posts
├── _sass/                 # Sass stylesheets
├── assets/                # Static assets (CSS, JS, images)
├── .eleventy.js           # Eleventy configuration
├── package.json           # Node.js dependencies
└── index.md               # Homepage
```

## Creating Content

### Blog Posts

Create new posts in `_posts/` with the format: `YYYY-MM-DD-title.markdown`

```markdown
---
layout: default
title: "Your Post Title"
date: 2025-12-30
categories: blog update
---

Your content here...
```

### Code Syntax Highlighting

Use markdown code fences with language specification:

\`\`\`javascript
function hello() {
  console.log("Hello, World!");
}
\`\`\`

## Troubleshooting

**Node.js not found?**  
Install Node.js from [nodejs.org](https://nodejs.org/) or use a version manager like [nvm](https://github.com/nvm-sh/nvm).

**Build errors?**  
Delete `node_modules/` and `package-lock.json`, then run `npm install` again.

**Port already in use?**  
Eleventy runs on port 8080 by default. Check for other processes using this port.

# Issues

If you would like to report a bug, ask a question, or request a feature, feel free to open an issue on this repository.

## Migration from Jekyll

This site was originally built with Jekyll and has been migrated to Eleventy. See [MIGRATION.md](MIGRATION.md) for details about the migration process.

## Added Features

* **Eleventy powered** - Fast, modern static site generator
* **Live reload** - Automatic browser refresh during development
* **Sass compilation** - Modern CSS preprocessing
* **Social profiles** - Easily configured in `_data/site.json`
* **Syntax highlighting** - Built-in code highlighting support

## Technology Stack

- [Eleventy](https://www.11ty.dev/) - Static site generator
- [Sass](https://sass-lang.com/) - CSS preprocessor
- [Prism.js](https://prismjs.com/) - Syntax highlighting (via Eleventy plugin)
- HTML5 UP Identity theme

# Configuration Options

You can use the following custom parameters in `_data/site.json`:

# Configuration Options

You can use the following custom parameters in `_data/site.json`:

## Identity
- `your_name` - Your name
- `your_title` - Your professional title
- `skills` - Your skills/specializations

## Social Settings
- `github_url`
- `instagram_url`
- `linkedin_url`
- `xing_url`
- `facebook_url` (supported)
- `twitter_url` (supported)
- `pinterest_url` (supported)

## Site Information
- `title` - Site title
- `email` - Your email
- `description` - Site description
- `url` - Your site URL

# Credits

Original README from HTML5 UP:

```
Identity by HTML5 UP
html5up.net | @ajlkn
Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)


Just a fun little profile/card-style template I whipped up during a break between major
projects. Minimal, responsive, and powered by Skel + Sass. Enjoy :)

Demo images* courtesy of Unsplash, a radtastic collection of CC0 (public domain) images
you can use for pretty much whatever.

(* = not included)

AJ
aj@lkn.io | @ajlkn


Credits:

	Demo Images:
		Unsplash (unsplash.com)

	Icons:
		Font Awesome (fortawesome.github.com/Font-Awesome)

	Other:
		html5shiv.js (@afarkas @jdalton @jon_neal @rem)
		CSS3 Pie (css3pie.com)
		Respond.js (j.mp/respondjs)
		Skel (skel.io)
```

Repository [Jekyll logo](https://github.com/jekyll/brand) icon licensed under a [Creative Commons Attribution 4.0 International License](http://choosealicense.com/licenses/cc-by-4.0/).
