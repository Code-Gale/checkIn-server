const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  // Hash the password
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    await user.save();
    const payload = {
        userId : user._id
    }
    const secretKey = process.env.SECRET_KEY;
    const options = {
        expiresIn : '3h'
    }
    const token = jwt.sign(payload, secretKey, options);
    res.status(201).json({ token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(401).json({ message: 'User Not Found' });

  const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
  if (!isPasswordValid) return res.status(401).json({ message: 'Invalid credentials' });

  const payload = {
        userId : user._id
    }
  const secretKey = process.env.SECRET_KEY;
  const options = {
        expiresIn : '3h'
    }
  const token = jwt.sign(payload, secretKey, options);
  res.json({ token });
};

exports.checkIn = async (req, res) => {
  const user = await User.findById(req.userId);
  user.checkedIn = true;
  user.checkInTime = new Date();
  await user.save();
  res.json({ message: 'Checked in successfully' });
};

exports.checkOut = async (req, res) => {
  const user = await User.findById(req.userId);
  user.checkedIn = false;
  user.checkOutTime = new Date();
  await user.save();
  res.json({ message: 'Checked out successfully' });
};