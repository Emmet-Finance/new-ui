import { configureStore } from '@reduxjs/toolkit';
import swapSliceReducer from './swapSlice';
import bridgeSlice from './bridgeSlice';
import explorerReducer from './explorerSlice';

export const store = configureStore({
    reducer:{
        bridge: bridgeSlice,
        swap: swapSliceReducer,
        explorer: explorerReducer,
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;