const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    role: { 
        type: String, 
        enum: ['admin', 'member'], 
        default: 'member' 
    }
}, { timestamps: true });

/**
 * PASSWORD HASHING MIDDLEWARE
 * We use an async function without the 'next' parameter.
 * Mongoose will automatically proceed once the function completes.
 */
userSchema.pre('save', async function() {
    // If password hasn't changed (e.g., updating user name), skip hashing
    if (!this.isModified('password')) {
        return;
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

/**
 * METHOD TO COMPARE PASSWORDS
 * Used during login to check if entered password matches the DB hash
 */
userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);