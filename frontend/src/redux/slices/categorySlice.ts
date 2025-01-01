import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface Category {
    id: string;
    name: string;
}

interface CategoryState {
    categories: Category[];
}

const initialState: CategoryState = {
    categories: [],
};

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addCategory(state, action: PayloadAction<Category>) {
            state.categories.push(action.payload);
        },
        removeCategory(state, action: PayloadAction<string>) {
            state.categories = state.categories.filter(c => c.id !== action.payload);
        },
    },
});

export const { addCategory, removeCategory } = categorySlice.actions;
export default categorySlice.reducer;
export const categoryState = (state: RootState) => state.categories;
