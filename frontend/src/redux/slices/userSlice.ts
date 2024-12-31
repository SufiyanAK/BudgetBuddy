import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface UserProfile {
    id: string;
    name: string;
    email: string;
}

interface UserState {
    profile: UserProfile | null;
}

const initialState: UserState = {
    profile: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserProfile>) {
            state.profile = action.payload;
        },
        clearUser(state) {
            state.profile = null;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
export const userState = (state: RootState) => state.user;