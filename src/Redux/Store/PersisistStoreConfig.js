// import { createStore } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// // Import your reducers
// import rootReducer from './reducers';

// // Create the persist config
// const persistConfig = {
//   key: 'root',
//   storage,
// };

// // Create the persisted reducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // Create the store
// const store = createStore(persistedReducer);
// const persistor = persistStore(store);

// export { store, persistor };
// ```

// 3. Wrap your root component with the `PersistGate` component from redux-persist and provide the persistor.

// ```javascript
// import React from 'react';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

// // Import the store and persistor
// import { store, persistor } from './store';

// // Import your root component
// import App from './App';

// // Wrap the App component with Provider and PersistGate
// const Root = () => {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <App />
//       </PersistGate>
//     </Provider>
//   );
// };

// export default Root;