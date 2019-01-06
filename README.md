1 - Create a new react app with [Create React App](https://github.com/facebook/create-react-app) (also automatically creates the first git commit):
```
yarn create react-app el-backo-frontend
```

2 - Run the app inside the `el-backo-frontend` folder (can then access the app at http://localhost:3000):
```
yarn start
```

3 - Add [React Router](https://reacttraining.com/react-router/web/guides/quick-start) package with:
```
yarn add react-router-dom
```

4 - Configure React Router in `App.js` with one `Index` route and add `Index` component.

5 - Add `/singleplayer/new` route and `SingleplayerNew` component

6 - Add `Link` in `Index` component to `/singleplayer/new` route

7 - Add `SingleplayerPlayerNames` that asks for player names for a new game; also accepts and renders `playersCount` variable from the url

8 - Add [lodash](https://lodash.com) that will be needed for utility operations:
```
yarn add lodash
```

9 - Add router links for player counts to the `SingleplayerNew` component; map it using lodash
