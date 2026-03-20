## FEATURE BRANCHES

Each feature branch = one section of the page.

- Each feature branch adds one section
- Each branch gets committed, pushed, and merged via PR

### Step 1 — Feature Branch: Header & Navigation

```bash
git checkout develop
git checkout -b feature/header-nav
```

Open `src/index.html`.
Save, then commit and push:

```bash
git add src/index.html
git commit -m "feat(header): add responsive navigation bar with logo"
git push -u origin feature/header-nav
```

**Now open a Pull Request on GitHub:**
1. Go to the repo on GitHub
2. click **Compare & pull request**
3. Set: base = `develop`, compare = `feature/header-nav`
4. Title: `feat(header): add responsive navigation bar`
5. Fill in the PR template checklist
6. Click **Create pull request**
7. Review the "Files changed" tab — look at  the diff
8. Click **Merge pull request** → **Confirm merge**
9. Click **Delete branch**

Back in your terminal:

```bash
git checkout develop
git pull origin develop
```

Header merged into develop.
---
