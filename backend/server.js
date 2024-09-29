const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
app.use('/api/auth', authRoutes);

app.use('/api/products', productRoutes);
const cartRoutes = require('./routes/cart');

app.use('/api/cart', cartRoutes);
