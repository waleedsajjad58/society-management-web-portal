import { useState } from 'react';
import { useNavigate } from 'react-router';
import API from '../api'; 
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export function Signup() { // <--- Named export matches routes.js
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'member' // Changed from 'resident' to 'member' for backend compatibility
  });
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await API.post('/auth/register', formData);
      alert("Account created! Now you can login.");
      navigate('/login');
    } catch (err: any) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSignup} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Society Account</h2>
        
        <Input label="Full Name" onChange={(val) => setFormData({...formData, name: val})} required />
        <Input label="Email" type="email" onChange={(val) => setFormData({...formData, email: val})} required />
        <Input label="Password" type="password" onChange={(val) => setFormData({...formData, password: val})} required />
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Select Role</label>
          <select 
            className="mt-1 block w-full border rounded-md p-2 bg-white"
            value={formData.role}
            onChange={(e) => setFormData({...formData, role: e.target.value})}
          >
            <option value="member">Resident/Member</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <Button type="submit" variant="primary" className="w-full">Register</Button>
        
        <p className="mt-4 text-center text-sm">
          Already have an account? <span className="text-blue-500 cursor-pointer" onClick={() => navigate('/login')}>Login here</span>
        </p>
      </form>
    </div>
  );
}