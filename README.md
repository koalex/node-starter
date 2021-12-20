# App Name

### The project uses:

-   [`ESLint`](https://eslint.org/) для линтинга кода, используется свой styleguide основанный на [`airbnb`](https://github.com/airbnb/javascript) стандарте.
-   [`prettier`](https://prettier.io/) для форматирования кода.
-   [`husky`](https://github.com/typicode/husky) для запуска `git`-хуков.
-   [`mocha`](https://jestjs.io/) для написания тестов.
-   [`Conventional Commits`](https://www.conventionalcommits.org) Styleguide для коммитов.
-   [`Release It`](https://github.com/release-it/release-it) для выпуска релизов и автогенерации `CHANGELOG.md`

### Scripts

Start nodemon with `NODE_ENV=development`:
```bash
npm start
```

Alias of `npm start`:
```bash
npm run dev
```

Run `eslint` & `prettier` with `--fix` (only for staged files):
```bash
npm run lint-staged
```

Run tests:
```bash
npm test
```

Create commit based on `Conventional Commits`:
```bash
npm run commit
```

Create a release.<br>In [.env](.env)-file **required** to setup `GITHUB_TOKEN` with your github token.
[More about this](https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/about-releases)
```bash
release:patch` `release:minor` `release:major
```

### Recommended reading:
[Components naming conventional](https://medium.com/@wittydeveloper/react-components-naming-convention-%EF%B8%8F-b50303551505)

<hr/>

This project using [SemVer](http://semver.org) for versioning. For the versions available, see the [tags on this repository](https://github.com/koalex/koa-json-rpc/tags).

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
