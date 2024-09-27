FE+BE Product List Hackathon Project
This is my product list with full back end and front end implementation, and you will need several programs and dependencies to run these properly.

1. This Project is run

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/lesavantdon/product-list.git
   CD to FE+BE
   CD FE npm start to run front end
   CD BE node server.js to run back end
   make sure data is seeded into the mongo database with node scripts/seed.js

   ```

## Dependencies

### Front-End

{
"name": "fe",
"version": "1.0.0",
"description": "Frontend for the application",
"main": "index.js",
"scripts": {
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject"
},
"dependencies": {
"@redux-devtools/extension": "^3.3.0",
"axios": "^1.4.0",
"bootstrap": "^5.3.0",
"postcss": "^8.4.41",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-redux": "^8.0.5",
"react-router-dom": "^6.14.0",
"redux": "^5.0.1",
"redux-devtools-extension": "^2.13.9",
"redux-thunk": "^3.1.0",
"resolve-url-loader": "^5.0.0",
"svgo": "^3.3.2"
},
"devDependencies": {
"react-scripts": "^5.0.1"
},
"eslintConfig": {
"extends": [
"react-app",
"react-app/jest"
]
},
"browserslist": {
"production": [
">0.2%",
"not dead",
"not op_mini all"
],
"development": [
"last 1 chrome version",
"last 1 firefox version",
"last 1 safari version"
]
}
}

### Back-End

{
"name": "be",
"version": "1.0.0",
"description": "be server",
"main": "server.js",
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"start": "node server.js"
},
"repository": {
"type": "git",
"url": "git+https://github.com/lesavantdon/product-list.git"
},
"author": "",
"license": "ISC",
"bugs": {
"url": "https://github.com/lesavantdon/product-list/issues"
},
"homepage": "https://github.com/lesavantdon/product-list#readme",
"dependencies": {
"cors": "^2.8.5",
"express": "^4.19.2",
"mongoose": "^8.5.3"
}
}
