import { createSlice } from '@reduxjs/toolkit';
import axios from '../Api';

const initialState = {
  loading: false,
  error: { isError: false, message: '' },
  coursesList: [],
  courseDetails: {},
  searchedCourses: [],
}

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setCoursesSuccess: (state, { payload }) => {
      state.loading = false;
      state.coursesList = payload;
      state.error = { isError: false, message: '' };
    },
    setCoursesFailure: (state, { payload }) => {
      state.loading = false;
      state.error = { isError: true, message: payload };
    },
    setCoursesDetailsSuccess: (state, { payload }) => {
      state.loading = false;
      state.courseDetails = payload;
      state.error = { isError: false, message: '' };
    },
    setCoursesDetailsFailure: (state, { payload }) => {
      state.loading = false;
      state.error = { isError: true, message: payload };
    },
    setSearchedCoursesSuccess: (state, { payload }) => {
      state.loading = false;
      state.searchedCourses = payload;
      state.error = { isError: true, message: payload };
    },
    setSearchedCoursesFailure: (state, { payload }) => {
      state.loading = false;
      state.error = { isError: true, message: payload };
    },
  }
});

export const { setLoading, setCoursesSuccess, setCoursesFailure, setCoursesDetailsSuccess, setCoursesDetailsFailure, setSearchedCoursesSuccess, setSearchedCoursesFailure } = coursesSlice.actions;

export default coursesSlice.reducer;

export const fetchCourses = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get(`/courses`);
    console.log(response.data);
    dispatch(setCoursesSuccess(response.data));
  } catch (error) {
    console.log(error.message);
    dispatch(setCoursesFailure(error.message));
  }
}

export const fetchCourseDetails = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get(`/courses/${id}`);
    console.log(response.data);
    dispatch(setCoursesDetailsSuccess(response.data));
  } catch (error) {
    console.log(error.message);
    dispatch(setCoursesDetailsFailure(error.message));
  }
}

export const getSearchedCourses = ({ coursesList, searchInput }) => async (dispatch) => {
  searchInput = String(searchInput).toLowerCase();
  const keysToSearch = ['name', 'description', 'instructor'];
  const searchedData = coursesList.filter((course) => {
    return (
      keysToSearch.some((key) => course[key].toString().toLowerCase().includes(searchInput))
    )
  })
  dispatch(setSearchedCoursesSuccess(searchedData));
}