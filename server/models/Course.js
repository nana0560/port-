import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  instructor: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  duration: String,
  lessons: Number,
  level: String,
  semester: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Semester'
  },
  enrolledStudents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
}, { timestamps: true });

export default mongoose.model('Course', courseSchema);