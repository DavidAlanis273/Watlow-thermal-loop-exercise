# Complete Step-by-Step Guide
# Watlow Thermal Loop — DevOps Practice Project

This guide walks you through every single command and action.
Follow it exactly in order.

---

## PREREQUISITES

Before starting, make sure you have:
- [ ] Git installed → run `git --version` in terminal to check
- [ ] VS Code installed
- [ ] A GitHub account
- [ ] Docker Desktop installed (for the Dockerfile step)

---

## PHASE 1: SETUP (5 minutes)

### Step 1.1 — Create a GitHub Repository

1. Go to https://github.com/new
2. Repository name: `watlow-thermal-loop`
3. Description: `Recreation of Watlow's homepage — DevOps workflow practice`
4. Set it to **Public**
5. Do NOT check "Add a README", "Add .gitignore", or "Choose a license"
6. Click **Create repository**
7. Copy the URL — it will look like: `https://github.com/YOUR_USERNAME/watlow-thermal-loop.git`

### Step 1.2 — Unzip the Project

1. Download the `watlow-thermal-loop.zip` file
2. Unzip it to a folder on your computer (e.g., Desktop)
3. Open VS Code
4. File → Open Folder → select the `watlow-thermal-loop` folder

### Step 1.3 — Initialize Git and Push

Open the VS Code terminal (Ctrl + ` or Terminal → New Terminal) and run:

```bash
git init
git add .
git commit -m "chore: initial project structure with docs and DevOps config"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/watlow-thermal-loop.git
git push -u origin main
```

✅ Go to GitHub — you should see all your files in the `main` branch.

### Step 1.4 — Create the Develop Branch

```bash
git checkout -b develop
git push -u origin develop
```

✅ You now have two branches on GitHub: `main` and `develop`.

---

## PHASE 2: FEATURE BRANCHES (the main practice)

Each feature branch = one section of the page.
The code is already written — your job is to practice the Git workflow.

We'll "simulate" building the page section by section by moving files
through feature branches. Here's what we'll do:

- Start with an empty index.html
- Each feature branch adds one section
- Each branch gets committed, pushed, and merged via PR

### Step 2.0 — Create a Blank Starting Point

```bash
git checkout develop
```

Now open `src/index.html` in VS Code and replace ALL the content with just this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Solutions for the Complete Thermal Loop | Watlow</title>
  <link rel="stylesheet" href="css/styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
</head>
<body>

  <!-- Sections will be added via feature branches -->

  <script src="js/main.js"></script>
</body>
</html>
```

Save it, then:

```bash
git add src/index.html
git commit -m "chore: create blank HTML shell for incremental feature development"
git push origin develop
```

---

### Step 2.1 — Feature Branch: Header & Navigation

```bash
git checkout develop
git checkout -b feature/header-nav
```

Open `src/index.html`. Replace `<!-- Sections will be added via feature branches -->` with:

```html
  <!-- HEADER & NAVIGATION -->
  <header class="header" id="header">
    <div class="header__inner">
      <a href="#" class="header__logo">
        <img src="https://www.watlow.com/Assets/Project/Corporate/Images/Watlow Logo_color rev.png" alt="Watlow" class="logo-img">
      </a>
      <nav class="header__nav" id="mainNav">
        <ul class="nav__list">
          <li class="nav__item"><a href="#solutions" class="nav__link">Products</a></li>
          <li class="nav__item"><a href="#industries" class="nav__link">Industries</a></li>
          <li class="nav__item"><a href="#about" class="nav__link">About Us</a></li>
          <li class="nav__item"><a href="#resources" class="nav__link">Resources</a></li>
          <li class="nav__item"><a href="#careers" class="nav__link">Careers</a></li>
        </ul>
      </nav>
      <div class="header__actions">
        <button class="header__search" aria-label="Search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </button>
        <a href="#contact" class="btn btn--header">Contact Us</a>
        <button class="header__hamburger" id="menuToggle" aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>

  <!-- MORE SECTIONS COMING VIA FEATURE BRANCHES -->
```

Save, then commit and push:

```bash
git add src/index.html
git commit -m "feat(header): add responsive navigation bar with logo"
git push -u origin feature/header-nav
```

**Now open a Pull Request on GitHub:**
1. Go to your repo on GitHub
2. You'll see a banner: "feature/header-nav had recent pushes" → click **Compare & pull request**
3. Set: base = `develop`, compare = `feature/header-nav`
4. Title: `feat(header): add responsive navigation bar`
5. Fill in the PR template checklist
6. Click **Create pull request**
7. Review the "Files changed" tab — look at your own diff
8. Click **Merge pull request** → **Confirm merge**
9. Click **Delete branch**

Back in your terminal:

```bash
git checkout develop
git pull origin develop
```

✅ Header merged into develop.

---

### Step 2.2 — Feature Branch: Hero Section

```bash
git checkout -b feature/hero-section
```

Open `src/index.html`. Replace `<!-- MORE SECTIONS COMING VIA FEATURE BRANCHES -->` with:

```html
  <!-- HERO SECTION -->
  <section class="hero" id="hero">
    <div class="hero__bg">
      <div class="hero__gradient"></div>
      <div class="hero__pattern"></div>
    </div>
    <div class="hero__content">
      <p class="hero__eyebrow">Since 1922</p>
      <h1 class="hero__title">Wherever Thermal<br><span class="hero__title--accent">is Critical</span></h1>
      <p class="hero__subtitle">100 years of solving the world's most demanding thermal problems</p>
      <div class="hero__cta">
        <a href="#solutions" class="btn btn--primary">Industry Solutions</a>
        <a href="#products" class="btn btn--outline">Explore Products</a>
      </div>
    </div>
    <div class="hero__scroll-indicator">
      <span>Scroll</span>
      <div class="hero__scroll-line"></div>
    </div>
  </section>

  <!-- MORE SECTIONS COMING VIA FEATURE BRANCHES -->
```

```bash
git add src/index.html
git commit -m "feat(hero): add hero banner with background image and CTA buttons"
git push -u origin feature/hero-section
```

**Open PR on GitHub** → base: `develop` → Merge → Delete branch

```bash
git checkout develop
git pull origin develop
```

✅ Hero section merged.

---

### Step 2.3 — Feature Branch: Solutions Cards

```bash
git checkout -b feature/solutions-carousel
```

Replace `<!-- MORE SECTIONS COMING VIA FEATURE BRANCHES -->` with the full solutions section + tagline + thermal loop explainer from the final `index.html` file.

Make TWO commits to practice granular committing:

```bash
git add src/index.html
git commit -m "feat(solutions): add thermal loop solution cards with product images"

# (the tagline and loop explainer are already included)
git commit --allow-empty -m "feat(solutions): add tagline and thermal loop explainer diagram"
```

```bash
git push -u origin feature/solutions-carousel
```

**Open PR** → Merge → Delete branch → pull develop

---

### Step 2.4 — Feature Branch: Industries & Stats

```bash
git checkout develop
git pull origin develop
git checkout -b feature/industries-stats
```

Replace `<!-- MORE SECTIONS COMING VIA FEATURE BRANCHES -->` with the industries grid, stats section, and manufacturing map from the final `index.html`.

```bash
git add src/index.html
git commit -m "feat(industries): add industry cards grid with images"

git add src/index.html
git commit -m "feat(stats): add company stats with icons and manufacturing map"

git push -u origin feature/industries-stats
```

**Open PR** → Merge → Delete branch → pull develop

---

### Step 2.5 — Feature Branch: News & Footer

```bash
git checkout develop
git pull origin develop
git checkout -b feature/footer-news
```

Replace `<!-- MORE SECTIONS COMING VIA FEATURE BRANCHES -->` with the news section and footer from the final `index.html`.

```bash
git add src/index.html
git commit -m "feat(news): add recent news section with join our team image"

git add src/index.html
git commit -m "feat(footer): add footer with links columns and legal info"

git push -u origin feature/footer-news
```

**Open PR** → Merge → Delete branch → pull develop

---

### Step 2.6 — Feature Branch: DevOps — CI/CD Pipeline

```bash
git checkout develop
git pull origin develop
git checkout -b feature/cicd-pipeline
```

The CI/CD files are already in `.github/workflows/`. Just commit them:

```bash
git add .github/workflows/
git commit -m "ci: add GitHub Actions workflow for HTML validation and deployment"

git add Dockerfile nginx.conf
git commit -m "ci: add Dockerfile and nginx config for containerized deployment"

git push -u origin feature/cicd-pipeline
```

**Open PR** → Merge → Delete branch → pull develop

---

## PHASE 3: TAG A RELEASE (v0.1.0)

```bash
git checkout develop
git pull origin develop
git checkout -b release/v1.0.0
```

Open `CHANGELOG.md` and update the `[v1.0.0]` date to today's date.

```bash
git add CHANGELOG.md
git commit -m "chore(release): prepare v1.0.0 release"
```

Merge into main and tag:

```bash
git checkout main
git pull origin main
git merge release/v1.0.0
git tag -a v1.0.0 -m "v1.0.0 — Complete Watlow thermal loop homepage with CI/CD pipeline"
git push origin main --tags
```

Merge back into develop:

```bash
git checkout develop
git merge release/v1.0.0
git push origin develop
```

Delete the release branch:

```bash
git branch -d release/v1.0.0
```

✅ Go to GitHub → your repo → Releases. You'll see v1.0.0 tagged.

---

## PHASE 4: ENABLE GITHUB PAGES

1. Go to your repo on GitHub
2. Settings → Pages
3. Source: **GitHub Actions** (it will auto-detect the workflow)
4. Wait 1–2 minutes
5. Your site will be live at: `https://YOUR_USERNAME.github.io/watlow-thermal-loop/`

---

## PHASE 5: SET UP BRANCH PROTECTION (optional but impressive)

1. GitHub → your repo → Settings → Branches
2. Click **Add branch protection rule**
3. Branch name pattern: `main`
4. Check: ✅ Require a pull request before merging
5. Check: ✅ Require status checks to pass before merging
6. Click **Create**
7. Repeat for `develop`

This means nobody (not even you) can push directly to `main` or `develop`.
Everything has to go through a PR. That's real-world governance.

---

## WHAT YOU CAN SHOW YOUR SUPERIORS

After completing this guide, your GitHub repo will demonstrate:

| Skill | Evidence |
|---|---|
| Cloning repositories | The repo can be cloned by anyone |
| Creating feature branches | 6+ feature branches in the PR history |
| Committing changes | 15+ commits with proper `type(scope): message` format |
| Opening pull requests | 6+ merged PRs with descriptions and checklists |
| Branching strategies | Gitflow model: main → develop → feature branches |
| Tagging and versioning | v1.0.0 tag on main with semantic versioning |
| Reviewing repo structure | Clean folder layout, README, CONTRIBUTING, CHANGELOG |
| CI/CD pipeline | GitHub Actions running on every push |
| Containerization | Dockerfile ready for deployment |
| Live deployment | Site running on GitHub Pages |
| Branch protection | Governance rules on main and develop |

---

## COMMIT HISTORY WILL LOOK LIKE THIS

```
* chore(release): prepare v1.0.0 release
* ci: add Dockerfile and nginx config
* ci: add GitHub Actions workflow for HTML validation and deployment
* feat(footer): add footer with links columns and legal info
* feat(news): add recent news section with join our team image
* feat(stats): add company stats with icons and manufacturing map
* feat(industries): add industry cards grid with images
* feat(solutions): add tagline and thermal loop explainer diagram
* feat(solutions): add thermal loop solution cards with product images
* feat(hero): add hero banner with background image and CTA buttons
* feat(header): add responsive navigation bar with logo
* chore: create blank HTML shell for incremental feature development
* chore: initial project structure with docs and DevOps config
```

That tells a story. Every commit is intentional. Every branch served a purpose.
