const express = require('express');
const cors = require('cors');
const http = require('http');
const fs = require('fs');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const port = 5000;
const mockData = require('./db.json');
const { courses, students } = mockData;

app.use(express.json({ limit: "10mb" }));
app.use(cors());

app.get('/courses', (req, res) => {
  res.json(courses);
});

app.get('/students', (req, res) => {
  res.json(students);
});

app.get('/students/:studentId', (req, res) => {
  const studentId = req.params.studentId;
  const student = students.find((student) => student.id === parseInt(studentId));
  if (!student) {
    res.status(404).json({ message: 'Student not found' });
    return;
  }
  res.json(student);
});

app.get('/courses/:courseId', (req, res) => {
  const courseId = req.params.courseId;
  const course = courses.find((course) => course.id === parseInt(courseId));
  if (!course) {
    res.status(404).json({ message: 'Course not found' });
    return;
  }
  res.json(course);
});

app.patch('/students/:studentId/courses/:courseId', (req, res) => {
  const studentId = req.params.studentId;
  const courseId = req.params.courseId;
  const progressStatus = req.body.progress_status;
  const student = students.find((student) => student.id === parseInt(studentId));

  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }

  const course = student.courses.find((enrolledCourse) => enrolledCourse.id === parseInt(courseId));

  if (!course) {
    return res.status(404).json({ message: 'Course not found for the student' });
  }

  course.progress_status = progressStatus;
  fs.writeFile('./db.json', JSON.stringify(mockData, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error saving data' });
    }
    res.json({ student });
  });
});

app.listen(port, () => {
  console.log(`Mock API server is running on port ${port}`);
});