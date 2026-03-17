# Watlow Thermal Loop - DevOps Practice Project

A recreation of the [Watlow "Solutions for the Complete Thermal Loop"](https://www.watlow.com/) landing page, built as a hands-on exercise for practicing core Git and DevOps workflows.

## What This Project Covers

| Skill | Where You'll Practice It |
|---|---|
| Cloning repositories | Step 1 — Clone this repo to your local machine |
| Creating feature branches | Steps 3–7 — One branch per page section |
| Committing changes | Every step — Small, descriptive commits |
| Opening pull requests | After each feature branch is complete |
| Branching strategies | Gitflow model documented below |
| Tagging and versioning | Semantic versioning after each milestone |
| Reviewing repo structure | The project layout itself |

---

## Project Structure

```
watlow-thermal-loop/
├── README.md                  ← You are here
├── CONTRIBUTING.md            ← Branching strategy & commit conventions
├── CHANGELOG.md               ← Version history
├── .gitignore
├── docs/
│   ├── BRANCHING_STRATEGY.md  ← Visual diagram of branch model
│   └── PR_TEMPLATE.md        ← Pull request template
├── src/
│   ├── index.html             ← Main page
│   ├── css/
│   │   └── styles.css         ← All styles
│   ├── js/
│   │   └── main.js            ← Interactivity
│   └── assets/                ← Images, icons, fonts
└── .github/
    └── pull_request_template.md
```

---

## Branching Strategy (Gitflow)

```
main ─────────────────────────────────────────────► (production releases)
  │
  └── develop ────────────────────────────────────► (integration branch)
        │        │        │        │        │
        │   feature/   feature/  feature/  feature/
        │   header     hero     products   footer
        │        │        │        │        │
        │        └───►────┘───►────┘───►────┘
        │                    ▼
        └──── release/v1.0.0 ──► tag: v1.0.0
```

### Branch Types

| Branch | Purpose | Naming Convention |
|---|---|---|
| `main` | Production-ready code | Always `main` |
| `develop` | Integration of completed features | Always `develop` |
| `feature/*` | New sections/components | `feature/header-nav` |
| `hotfix/*` | Emergency production fixes | `hotfix/broken-link` |
| `release/*` | Prep for a tagged release | `release/v1.0.0` |

---

## Step-by-Step Workflow

### Prerequisites
- Git installed (`git --version`)
- VS Code installed with GitLens extension (recommended)
- GitHub account with a repo created for this project

---

### Step 1: Initialize & Push the Repo

```bash
# Create the repo on GitHub first (empty, no README), then:
cd watlow-thermal-loop
git init
git add .
git commit -m "chore: initial project structure and documentation"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/watlow-thermal-loop.git
git push -u origin main
```

### Step 2: Create the Develop Branch

```bash
git checkout -b develop
git push -u origin develop
```

### Step 3: Feature Branch — Header & Navigation

```bash
git checkout develop
git checkout -b feature/header-nav

# Build the header section in src/index.html and src/css/styles.css
# Make small commits as you go:
git add src/index.html
git commit -m "feat(header): add HTML structure for navbar"

git add src/css/styles.css
git commit -m "style(header): add responsive nav styling"

git add src/js/main.js
git commit -m "feat(header): add mobile menu toggle"

# Push and open a Pull Request into develop
git push -u origin feature/header-nav
```

> **Open a PR** on GitHub: `feature/header-nav` → `develop`
> Use the PR template in `docs/PR_TEMPLATE.md`
> Review your own changes, then merge.

### Step 4: Feature Branch — Hero Section

```bash
git checkout develop
git pull origin develop
git checkout -b feature/hero-section

# Build the hero banner, tagline, and CTA
git add -A
git commit -m "feat(hero): add hero banner with tagline and CTA"

git push -u origin feature/hero-section
```

> **Open PR** → merge into develop

### Step 5: Feature Branch — Solutions Carousel

```bash
git checkout develop
git pull origin develop
git checkout -b feature/solutions-carousel

git add -A
git commit -m "feat(solutions): add thermal loop solutions card grid"

git push -u origin feature/solutions-carousel
```

> **Open PR** → merge into develop

### Step 6: Feature Branch — Industries & Stats

```bash
git checkout develop
git pull origin develop
git checkout -b feature/industries-stats

git add -A
git commit -m "feat(industries): add industry cards grid"

git add -A
git commit -m "feat(stats): add company stats counter section"

git push -u origin feature/industries-stats
```

> **Open PR** → merge into develop

### Step 7: Feature Branch — Footer & News

```bash
git checkout develop
git pull origin develop
git checkout -b feature/footer-news

git add -A
git commit -m "feat(news): add recent news section"

git add -A
git commit -m "feat(footer): add footer with links and copyright"

git push -u origin feature/footer-news
```

> **Open PR** → merge into develop

### Step 8: Release & Tag

```bash
git checkout develop
git pull origin develop
git checkout -b release/v1.0.0

# Final tweaks, update CHANGELOG.md
git add -A
git commit -m "chore(release): prepare v1.0.0"

# Merge into main
git checkout main
git merge release/v1.0.0
git tag -a v1.0.0 -m "v1.0.0 — Complete Thermal Loop landing page"
git push origin main --tags

# Also merge back into develop
git checkout develop
git merge release/v1.0.0
git push origin develop
```

---

## Commit Message Convention

Format: `type(scope): description`

| Type | Use |
|---|---|
| `feat` | New feature or section |
| `fix` | Bug fix |
| `style` | CSS/formatting (no logic change) |
| `chore` | Config, docs, tooling |
| `refactor` | Code restructure without behavior change |

Examples:
- `feat(hero): add hero banner with gradient overlay`
- `fix(nav): correct mobile menu z-index issue`
- `style(footer): adjust link spacing on tablet`
- `chore: update README with setup instructions`

---

## Versioning

This project uses [Semantic Versioning](https://semver.org/):

| Tag | Milestone |
|---|---|
| `v0.1.0` | Header + Hero complete |
| `v0.2.0` | Solutions + Industries added |
| `v1.0.0` | Full page complete and polished |

---

## Tech Stack

- HTML5
- CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript
- No frameworks — keeps focus on Git workflow, not tooling
