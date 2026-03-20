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

---
### Step 1: Initialize & Push the Repo

```bash
# Create the repo on GitHub first.
cd watlow-thermal-loop
git init
git add .
git commit -m "chore: initial project structure and documentation"
git branch -M main
git remote add origin https://github.com/USERNAME/watlow-thermal-loop.git
git push -u origin main
```

### Step 2: Create the Develop Branch

```bash
git checkout -b develop
git push -u origin develop
```

### Step 3: Feature Branch — Header & Navigation (IS THE SAME PROCESS FOR OTHER BRANCHES)

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
> Review own changes, then merge.

