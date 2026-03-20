
## Branching Strategy

This project follows a simplified **Gitflow** model.

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

## Pull Request Process

1. Fill out the PR template (title, description, checklist)
2. Assign yourself as reviewer (since this is a solo practice project)
3. Review the "Files Changed" tab — look at your own diff
4. Check that the page renders correctly in a browser
5. Merge using **"Squash and merge"** or **"Create a merge commit"**
6. Delete the branch after merge

