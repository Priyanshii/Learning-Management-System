import { createSlice } from '@reduxjs/toolkit';
import axios from '../Api';

const initialState = {
  loading: false,
  error: { isError: false, message: '' },
  enrolledCourses: [],
  studentDetails: {},
}

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setEnrolledCoursesSuccess: (state, { payload }) => {
      state.loading = false;
      state.enrolledCourses = payload;
      state.error = { isError: false, message: '' };
    },
    setEnrolledCoursesFailure: (state, { payload }) => {
      state.loading = false;
      state.error = { isError: true, message: payload };
    },
    setStudentDetailsSuccess: (state, { payload }) => {
      state.loading = false;
      state.studentDetails = payload;
      state.error = { isError: false, message: '' };
    },
    setStudentDetailsFailure: (state, { payload }) => {
      state.loading = false;
      state.error = { isError: true, message: payload };
    },
  }
});

export const { setLoading, setEnrolledCoursesSuccess, setEnrolledCoursesFailure, setStudentDetailsSuccess, setStudentDetailsFailure } = studentSlice.actions;

export default studentSlice.reducer;

export const fetchStudentEnrolledCourses = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get(`/students/${id}`);
    console.log(response.data.courses);
    dispatch(setEnrolledCoursesSuccess(response.data.courses));
  } catch (error) {
    console.log(error.message);
    dispatch(setEnrolledCoursesFailure(error.message))
  }
}

export const fetchStudentDetails = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get(`/students/${id}`);
    console.log(response.data);
    dispatch(setStudentDetailsSuccess(response.data));
  } catch (error) {
    console.log(error.message);
    dispatch(setStudentDetailsFailure(error.message))
  }
}

export const setCourseStatusComplete = ({ studentId, courseId }) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.patch(`/students/${studentId}/courses/${courseId}`, { "progress_status": '100%' });
    console.log(response.data);
    dispatch(setEnrolledCoursesSuccess(response.data.student.courses));
  } catch (error) {
    console.log(error.message);
    dispatch(setEnrolledCoursesFailure(error.message))
  }
}