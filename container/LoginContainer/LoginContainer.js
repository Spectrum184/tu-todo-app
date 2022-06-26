import styles from './Login.module.css';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Layout from '~/components/Layout';

const LoginContainer = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const router = useRouter();
  const { username, password } = loginData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'password') {
      if (value.length < 4 || value.length > 50) {
        setError(
          'Password must be more than 4 character and less than 50 character!'
        );
      } else {
        setError('');
      }
    }
    setLoginData({ ...loginData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (error) return;

    const res = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });

    if (res.error) toast.error(res.error);
    router.push('/');
  };

  return (
    <Layout showHeader={false}>
      <div className={`${styles.wrapper} dark:bg-gray-900`}>
        <div className='flex justify-center h-screen'>
          <div className={`hidden lg:block lg:w-2/3 ${styles.backgroundImage}`}>
            <div className='flex items-center h-full px-20 bg-gray-900 bg-opacity-40'>
              <div>
                <h2 className='text-4xl font-bold text-white'>Brand</h2>
                <p className='max-w-xl mt-3 text-gray-300'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                  autem ipsa, nulla laboriosam dolores, repellendus perferendis
                  libero suscipit nam temporibus molestiae
                </p>
              </div>
            </div>
          </div>

          <div className={styles.loginForm}>
            <div className='flex-1'>
              <div className='text-center'>
                <h2 className='text-4xl font-bold text-center text-gray-700 dark:text-white'>
                  Brand
                </h2>

                <p className='mt-3 text-gray-500 dark:text-gray-300'>
                  Sign in to access your account
                </p>
              </div>

              <div className='mt-8'>
                <form onSubmit={onSubmit}>
                  <div>
                    <label
                      htmlFor='username'
                      className='block mb-2 text-sm text-gray-600 dark:text-gray-200'
                    >
                      Email or Username
                    </label>
                    <input
                      value={username}
                      onChange={handleChange}
                      type='text'
                      name='username'
                      id='username'
                      placeholder='example@example.com or username'
                      className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                      autoComplete='username'
                    />
                  </div>

                  <div className='mt-6 mb-10 relative'>
                    <div className='flex justify-between mb-2'>
                      <label
                        htmlFor='password'
                        className='text-sm text-gray-600 dark:text-gray-200'
                      >
                        Password
                      </label>
                      <a
                        href='#'
                        className='text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline'
                      >
                        Forgot password?
                      </a>
                    </div>
                    <input
                      value={password}
                      onChange={handleChange}
                      type='password'
                      name='password'
                      id='password'
                      placeholder='Your Password'
                      className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                      autoComplete='current-password'
                    />
                    {error && (
                      <small className='text-red-500 italic absolute'>
                        {error}
                      </small>
                    )}
                  </div>

                  <div className='mt-6'>
                    <button
                      type='submit'
                      className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md active:bg-blue-300'
                    >
                      Sign in
                    </button>
                  </div>
                </form>

                <p className='mt-6 text-sm text-center text-gray-400'>
                  Don&#x27;t have an account yet?{' '}
                  <a
                    href='#'
                    className='text-blue-500 focus:outline-none focus:underline hover:underline'
                  >
                    Sign up
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginContainer;
