import mongoose from 'mongoose';

const ServiceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['website', 'saas', 'mobile', 'iot', 'seo', 'design', 'prototype', 'custom'],
  },
  features: [{
    type: String,
  }],
  deliveryTime: {
    type: Number, // in days
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Service || mongoose.model('Service', ServiceSchema);