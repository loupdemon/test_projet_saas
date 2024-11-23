import mongoose from 'mongoose';
import { Schema, models, model } from 'mongoose';

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  company: String,
  phone: String,
  preferredPaymentMethod: {
    type: String,
    enum: ['credit_card', 'bank_transfer', 'paypal'],
  },
  budget: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const User = models.User || model('User', UserSchema);
export default User;