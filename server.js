const express = require('express');
const cors = require('cors');
const http = require('http');
const fs = require('fs');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const port = 5000;

app.use(express.json({ limit: "10mb" }));
app.use(cors());

//Read mock data from db.json
function readMockData(callback) {
  fs.readFile('./db.json', 'utf8', (error, data) => {
    if (error) {
      callback(error, null);
    } else {
      const mockData = JSON.parse(data);
      const { courses, students } = mockData;
      callback(null, { courses, students });
    }
  });
}


app.get('/courses', (req, res) => {
  readMockData((error, data) => {
    if (error) {
      return res.status(500).json({ message: 'Error reading data' });
    }
    const { courses } = data;
    res.json(courses);
  })
});

app.get('/students', (req, res) => {
  readMockData((error, data) => {
    if (error) {
      return res.status(500).json({ message: 'Error reading data' });
    }
    const { students } = data;
    res.json(students);
  })
});

app.get('/students/:studentId', (req, res) => {
  readMockData((error, data) => {
    if (error) {
      return res.status(500).json({ message: 'Error reading data' });
    }
    const { students } = data;
    const studentId = req.params.studentId;
    const student = students.find((student) => student.id === parseInt(studentId));
    if (!student) {
      res.status(404).json({ message: 'Student not found' });
      return;
    }
    res.status(200).json(student);
  })
});

app.get('/courses/:courseId', (req, res) => {
  readMockData((error, data) => {
    if (error) {
      return res.status(500).json({ message: 'Error reading data' });
    }
    const { courses } = data;
    const courseId = req.params.courseId;
    const course = courses.find((course) => course.id === parseInt(courseId));
    if (!course) {
      res.status(404).json({ message: 'Course not found' });
      return;
    }
    res.status(200).json(course);
  })
});

app.patch('/students/:studentId/courses/:courseId', (req, res) => {

  readMockData((error, data) => {
    if (error) {
      return res.status(500).json({ message: 'Error reading data' });
    }
    const { students, courses } = data;
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
    fs.writeFile('./db.json', JSON.stringify(data, null, 2), (error) => {
      if (error) {
        return res.status(500).json({ message: 'Error saving data' });
      }
      res.json({ student });
    });
  })
});

// WebSocket event handling
io.on('connection', (socket) => {
  console.log('A user connected');

  fs.watchFile('./db.json', (curr, prev) => {
    const updatedData = JSON.parse(fs.readFileSync('./db.json', 'utf8'));
    socket.emit('dbUpdated', updatedData.courses);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(port, () => {
  console.log(`Mock API server is running on port ${port}`);
});