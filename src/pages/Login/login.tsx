import React, { useState, FormEvent } from 'react';
import styles from "./login.module.css"; 
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { FirebaseError } from 'firebase/app'; 
import { auth } from '../../services/firebase-config'; 
import { useAuth } from '../../context/AuthContext';

const LoginForm: React.FC = () => { 
  const [email, setEmail] = useState<string>(''); 
  const [password, setPassword] = useState<string>(''); 
  const [error, setError] = useState<string | null>(null);
  const {user, logout} = useAuth();
  console.log(user)
  const handleLogin = async (e: FormEvent) => { 
    e.preventDefault();
    setError(null); 

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Usuario logueado con éxito!');
      setEmail(''); 
      setPassword('');
    } catch (err: any) { 
      let errorMessage = "Ocurrió un error desconocido.";
      if (err instanceof FirebaseError) {

        switch (err.code) {
          case 'auth/user-not-found':
            errorMessage = "No se encontró ningún usuario con ese email.";
            break;
          case 'auth/wrong-password':
            errorMessage = "Contraseña incorrecta. Por favor, inténtalo de nuevo.";
            break;
          case 'auth/invalid-email':
            errorMessage = "El formato del email es inválido.";
            break;

          default:
            errorMessage = err.message;
            break;
        }
      } else if (err instanceof Error) {

          errorMessage = err.message;
      }
      setError(errorMessage);
      console.error("Error al iniciar sesión:", err);
    }
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