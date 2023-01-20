# ComplaiNUS (Ruby on Rail API)
Name: Craigton Lian Ee John

Matriculation No.: A0258986B

This is the backend repo of a Computing for Voluntary Welfare Organizations (CVWO) project undertaken by Craigton in AY22/23 Winter.

The CVWO project consists of two separate repositories for the [frontend](https://github.com/craigtonlian/complainus-frontend) and [backend](https://github.com/craigtonlian/complainus-backend).

This Ruby on Rails API is deployed on [https://complainus-backend.herokuapp.com](https://complainus-backend.herokuapp.com).

## Getting Started
1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository) this repo.
2. [Clone](https://docs.github.com/en/get-started/quickstart/fork-a-repo#cloning-your-forked-repository) **your** forked repo.
3. Open your terminal and navigate to the directory containing your cloned project.
4. Install dependencies for the project by entering this command:

```bash
bundle install
```
5. Configure your local PostgreSQL username and password in config/database.yml:

```bash
development:
  <<: *default
  database: <your-database-name>
  host: localhost
  port: 5432
  user: <your-username>
  password: <your-password>
```

6. Run the app in development mode by entering this command:

```bash
rails s
```

7. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
8. Since this is a Rails API, you should see an empty blank page.

