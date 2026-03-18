# Branching Strategy — Visual Reference

## Gitflow Overview

This project uses a **Gitflow** branching model. Here's the full picture:

```
TIME ──────────────────────────────────────────────────────────────────►

main        ●───────────────────────────────────────────●──── tag: v1.0.0
            │                                           ▲
            │                                           │ merge
            │                                           │
release     │                                     ●─────●  release/v1.0.0
            │                                     ▲
            │                                     │ branch from develop
            ▼                                     │
develop     ●────●────●────●────●────●────●───────●
                 ▲    ▲    ▲    ▲    ▲    ▲
                 │    │    │    │    │    │
features         │    │    │    │    │    │
                 │    │    │    │    │    └── feature/footer-news
                 │    │    │    │    └─────── feature/industries-stats
                 │    │    │    └──────────── feature/solutions-carousel
                 │    │    └───────────────── feature/hero-section
                 │    └────────────────────── feature/header-nav
                 └─────────────────────────── (initial setup)
```

## Why Gitflow?

| Benefit | Explanation |
|---|---|
| Parallel work | Multiple features can be developed simultaneously without stepping on each other |
| Clean history | `main` only contains released, working code |
| Safe integration | `develop` acts as a staging area — breaks stay here, not in production |
| Clear releases | Tags on `main` mark exactly what was shipped and when |

## When to Use Each Branch Type

### `feature/*`
Each page section gets its own feature branch.

### `hotfix/*`
Something is broken in production (`main`). Branch off `main`, fix it, merge back into both `main` and `develop`.

```
main     ●────────●────●
                  │    ▲
                  ▼    │
hotfix            ●────● hotfix/fix-broken-link
```

### `release/*`
All features for a version are merged into `develop`. Create a release branch for final polish and version bumps before merging into `main` and tagging.

## Common Mistakes to Avoid

1. **Branching from `main` instead of `develop`** — features should always branch from `develop`
2. **Giant feature branches** — if a branch has 50+ changed files, it's too big. Break it up.
3. **Merging without reviewing** — even solo, look at your own diff before clicking merge
4. **Forgetting to pull** — always `git pull origin develop` before creating a new branch
