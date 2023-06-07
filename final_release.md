# Final Release
![UML Diagram](SE577_UML.png)
### Step 1
Install all dependencies
```
npm install
```
### Step 2
Create .env file with REACT_APP_GITHUB_ACCESS_TOKEN
```
REACT_APP_GITHUB_ACCESS_TOKEN={Token Goes Here}
```
### Step 3
```
node server/server.js
```
### Step 4
```
npm start
```
### Final release feature
1. Go to the RepoDetails page by clicking "RepoDetails" Button
2. Click on "Show Repositories" Button to display the Repository for user: akshaykapoor772

### Architectural Description
1.	Client-side Architecture:
*	The client-side code is organized into multiple components, such as Gist, About, Gistview, Home, Login, RepoDetails, and Repos.
*	The main entry point of the client-side application is the App.js file, where the React Router is used to define routes for different pages.
*	Each component represents a specific page or functionality of the application and is responsible for rendering the UI and handling user interactions.
*	Components such as Gist and Gistview fetch data from the GitHub API using the axios library and display the fetched data.
*	The RepoList component is responsible for rendering a list of repositories received as props.
*	The client-side code also includes CSS files (Gist.css, Home.css) for styling the UI.
2.	Server-side Architecture:
*	The server-side code is organized into a single file named server.js.
*	The server is created using Express.js, a web application framework for Node.js.
*	The server listens on port 5002 for incoming HTTP requests.
*	It uses the cors middleware to enable Cross-Origin Resource Sharing.
*	The /repos route handles a GET request to fetch repository data from the GitHub API. It requires an access token provided through the REACT_APP_GITHUB_ACCESS_TOKEN environment variable.
*	The /get-repo-list route handles a GET request to retrieve repository data from a YAML file named test.yml.
*	The server uses the fs module to read the YAML file and the js-yaml library to parse its contents.
*	The server responds with the fetched data as a JSON response.
3.	Environment Variables:
*	The project uses environment variables to store sensitive information like the GitHub access token.
*	The access token is stored in a .env file, and the dotenv library is used to load the environment variables into the server-side code.

### Quality Attributes
1.	Modularity and Reusability: The project follows a component-based architecture, promoting modularity and reusability. Components like Repos, RepoDetails, and Gist can be easily reused across different pages or sections of the application.
2.	Scalability: The project's architecture allows for easy scalability by separating concerns between the front-end and back-end. Additional features and components can be added to the React App, and new API endpoints can be implemented in the Express API as the application grows.
3.	Maintainability: The project follows best practices for code organization, including separating components into their own files and folders. This promotes code maintainability and allows for easier debugging, testing, and future enhancements.
4.	Performance: The React App employs efficient data fetching techniques, such as using asynchronous requests with axios and managing state updates using hooks. Caching strategies and pagination can be implemented to optimize the retrieval of large datasets from the GitHub API.
5.	Security: The application ensures security by using an access token to authenticate requests to the GitHub API. The access token should be kept securely on the server-side and not exposed to the client-side. Additionally, the Express API acts as a proxy for API calls to GitHub, dispatching local API calls while protecting the GitHub credentials and tokens. This design helps to secure the GitHub credentials and tokens from being exposed to the client-side.
