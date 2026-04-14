import React from 'react';
import { LogIn, LogOut, User } from 'lucide-react';

// Mock auth for now until Firebase is ready
export default function AuthButton() {
  const [user, setUser] = React.useState<any>(null);

  const login = () => {
    setUser({ name: 'Traveler', email: 'traveler@example.com' });
  };

  const logout = () => {
    setUser(null);
  };

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-beige text-[11px] uppercase tracking-wider">
          <User size={14} /> {user.name}
        </div>
        <button 
          onClick={logout}
          className="frosted-glass p-2 rounded-full text-gold hover:bg-white/10 transition-colors"
          title="Logout"
        >
          <LogOut size={16} />
        </button>
      </div>
    );
  }

  return (
    <button 
      onClick={login}
      className="frosted-glass px-4 py-2 rounded-full flex items-center gap-2 text-gold hover:bg-white/10 transition-colors text-[11px] uppercase tracking-wider"
    >
      <LogIn size={14} /> Login
    </button>
  );
}
