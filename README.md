# OJT-FINAL-PROJECT

## Source base structure

- **`assets/`**: Store static assets like images, fonts, or videos here.
- **`components/`**: Place reusable UI components such as buttons, inputs, or form elements.
- **`hooks/`**: Store custom React hooks here that can be shared across different components.
- **`pages/`**: Components that represent whole pages or views in your application (e.g., Home, Login).
- **`services/`**: Contains API service logic, business logic, or third-party services (e.g., authentication).
- **`store/`**: If you’re using state management like Redux, MobX, or Zustand, this folder would contain those files.
- **`styles/`**: Global styles, CSS, or Tailwind configuration files.
- **`types/`**: TypeScript types and interfaces.
- **`utils/`**: Helper functions, utility files, or anything that provides common functionality throughout the application.
- **`App.tsx`**: The root component of your application.
- **`index.tsx`**: This is where the React app is rendered into the DOM.

## Commit convention

```js
<type>(<scope>): <message>
```

- **Adding a new feature**:

```js
git commit -m "feat[OJT-XX]: add user authentication module"
```

- Fixing a bug

```js
git commit -m "fix[OJT-XX]: resolve issue with login form validation"
```

- **Improving a feature**

```js
git commit -m "perf[OJT-XX]: optimize image loading in gallery"
```

- Documentation changes

```js
git commit -m "docs[OJT-XX]: update README with setup instructions"
```

- Refactoring code

```js
git commit -m "refactor[OJT-XX]: simplify login logic"
```

- Chore (updating build scripts, etc.)

```js
git commit -m "chore[OJT-XX]: update build pipeline configuration"
```

- Reverting changes

```js
git commit -m "revert[OJT-XX]: undo changes in login feature"
```

- Breaking change

```js
git commit -m "BREAKING CHANGE[OJT-XX]: update API endpoint for user data"
```
