import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { contactsReducer as rootReducer } from '../redux/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsApi } from './reducer';
import { authReducer } from './auth/slice';

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['contacts'],
// };

const persistConfig = {
  key: 'login',
  storage,
  whitelist: ['login'],
};

const rootReducer = combineReducers({
  contacts: contactsApi,
  login: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// const persistedReducer = persistReducer(persistConfig, contactsApi);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

export const persistor = persistStore(store);

// const loginPersistConfig = {
//   key: 'user',
//   storage,
//   whitelist: ['token'],
// };

// const persistedReducer = persistReducer(loginPersistConfig, contactsApi);

// export const store = configureStore({
//   reducer: {login: persistReducer(loginPersistConfig, authReducer), },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
