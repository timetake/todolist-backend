import mongoose from 'mongoose';

interface User extends mongoose.Document {
  title: string;
  isComplete: Boolean;
}

const TodoSchema: mongoose.Schema = new mongoose.Schema({
  title: String,
  isComplete: Boolean,
});

const TodoModel = mongoose.model<User>('todos', TodoSchema);

export default TodoModel;
