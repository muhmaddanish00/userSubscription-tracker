import User from '../models/user.model.js'
import mongoose from 'mongoose';

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json({ success: true, data: users });
  } catch (error) {
    next(error);
  }
}

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select('-password');

    if (!user) {
      const error = new Error('User not found');
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
}


// export const deleteUser = async (req, res, next) => {
//   try {
//     // ✅ Get user ID from middleware (req.user)
//     const userId = req.user._id; // because authorize attaches full user document

//     // ✅ Validate
//     if (!userId) {
//       return res.status(400).json({
//         success: false,
//         error: 'User ID missing in request',
//       });
//     }

//     // ✅ Check if the user exists in the database
//     const existingUser = await User.findById(userId);
//     if (!existingUser) {
//       return res.status(404).json({
//         success: false,
//         error: 'User not found',
//       });
//     }

//     // ✅ Delete user
//     await User.findByIdAndDelete(userId);

//     res.status(200).json({
//       success: true,
//       message: 'User deleted successfully',
//     });
//   } catch (error) {
//     console.error('🔥 DELETE USER ERROR:', error.message);
//     res.status(500).json({
//       success: false,
//       error: 'Internal Server Error',
//       details: error.message,
//     });
//   }
// };
