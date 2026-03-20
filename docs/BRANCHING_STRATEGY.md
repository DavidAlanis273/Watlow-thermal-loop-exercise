# Branching Strategy


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
