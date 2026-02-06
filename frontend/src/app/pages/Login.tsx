import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Navbar } from '../components/Navbar';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock login logic - in real app would authenticate
    if (email.includes('admin')) {
      navigate('/admin/dashboard');
    } else {
      navigate('/member/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar variant="public" />
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to access your portal</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <form onSubmit={handleSubmit}>
              <Input
                label="Email Address"
                type="email"
                value={email}
                onChange={setEmail}
                placeholder="Enter your email"
                required
              />
              
              <Input
                label="Password"
                type="password"
                value={password}
                onChange={setPassword}
                placeholder="Enter your password"
                required
              />
              
              <div className="mt-6">
                <Button type="submit" variant="primary" size="lg">
                  <span className="w-full text-center block">Sign In</span>
                </Button>
              </div>
            </form>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm font-medium text-gray-700 mb-3">Demo Credentials:</p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-medium text-gray-700">Member Access</p>
                  <p>member@society.com</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-medium text-gray-700">Admin Access</p>
                  <p>admin@society.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}