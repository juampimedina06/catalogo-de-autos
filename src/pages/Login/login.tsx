import React, { useState, FormEvent } from 'react';
import styles from "./login.module.css"; 
import { supabase } from '../../services/supabase-config'; 
import { useAuth } from '../../context/AuthContext';

const LoginForm: React.FC = () => { 
  const [email, setEmail] = useState<string>(''); 
  const [password, setPassword] = useState<string>(''); 
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();


  const handleLogin = async (e: FormEvent) => { 
    e.preventDefault();
    setError(null); 

    const { data, error } = await supabase.auth.signInWithPassword({ email, password});

    if(error){
      let errorMsg = "Error";
      switch(error.message){
        case 'Invalid login credentials':
          errorMsg = "Datos incorrectos";
          break;
        case 'Email not confirmed':
          errorMsg = "No esta confirmado el mail";
          break;
        default:
          errorMsg = error.message;
      }
      setError(errorMsg);
      return
    }

    setEmail('');
    setPassword('');
    setError(null);
  };
  return (
    <form onSubmit={handleLogin} className={styles.form}>
      <h2 className={styles.h2}>Iniciar Sesión</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className={styles.input_email}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
        required
        className={styles.input_password}
      />
      <button type="submit" className={styles.button_login}>
        Iniciar Sesión
      </button>
      {error && <p className={styles.login_error}>{error}</p>}
      {user ? (<p>Su registro fue exitoso</p>): (<>Complete los campos</>)}
    </form>
  );
}

export default LoginForm;