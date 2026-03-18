# Contributing Guide

## Branching Strategy

This project follows a simplified **Gitflow** model.

### Rules

1. **Never commit directly to `main` or `develop`.**
   All changes go through feature branches and pull requests.

2. **One feature branch per logical section of the page.**
   Keep branches small and focused — easier to review, easier to merge.

3. **Always pull the latest `develop` before creating a new branch.**
   This avoids merge conflicts down the road.

4. **Delete feature branches after merging.**
   Keeps the repo clean. GitHub has a button for this on merged PRs.

### Branch Lifecycle

```
1. git checkout develop
2. git pull origin develop
3. git checkout -b feature/your-feature-name
4. ... make changes, commit often ...
5. git push -u origin feature/your-feature-name
6. Open PR on GitHub: feature/your-feature-name → develop
7. Review → Approve → Merge
8. Delete the feature branch
```

## Commit Guidelines

- Commit **early and often** — don't wait until everything is done
- Each commit should represent one logical change
- Write messages in **imperative mood**: "add header" not "added header"
- Use the `type(scope): message` format from the README

### Good Commits

```
feat(header): add responsive navigation bar
fix(header): correct logo alignment on mobile
```

### Bad Commits

```
update stuff
WIP
fixed it
asdfasdf
```

## Pull Request Process

1. Fill out the PR template (title, description, checklist)
2. Assign yourself as reviewer (since this is a solo practice project)
3. Review the "Files Changed" tab — look at your own diff
4. Check that the page renders correctly in a browser
5. Merge using **"Squash and merge"** or **"Create a merge commit"**
6. Delete the branch after merge

## Code Review Checklist

Even on a solo project, review your own code:

- [ ] HTML is semantic (correct tags for content)
- [ ] CSS uses variables for colors/fonts (no magic values)
- [ ] No leftover console.logs or commented-out code
- [ ] Page looks right at mobile, tablet, and desktop widths
- [ ] Commit messages follow the convention
