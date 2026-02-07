import { useState } from 'react';
import { useNavigate } from 'react-router';
import API from '../api'; 
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await API.post('/auth/login', { email, password });
      
      /**
       * SUCCESS: Save the entire data object as 'userInfo'
       * This includes name, email, role, and token.
       * This is what the ProtectedRoute component looks for.
       */
      localStorage.setItem('userInfo', JSON.stringify(data));

      // Redirect based on the role returned from backend
      if (data.role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/member/dashboard');
      }
    } catch (err: any) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Society Portal Sign in
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow rounded-lg sm:px-10">
          <form onSubmit={handleLogin} className="space-y-6">
            <Input 
              label="Email Address" 
              value={email} 
              onChange={setEmail} 
              type="email" 
              required 
            />
            <Input 
              label="Password" 
              value={password} 
              onChange={setPassword} 
              type="password" 
              required 
            />
            
            <div className="pt-2">
              <Button type="submit" variant="primary" className="w-full">
                Sign In
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              New to the society?{' '}
              <button 
                onClick={() => navigate('/signup')} 
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Create an account
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}