import styles from './Login.module.css';
import React from 'react';
import Layout from '~/components/Layout';

const LoginContainer = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Layout showHeader={false}>
      <div className='bg-white w-full dark:bg-gray-900'>
        <div className='flex justify-center h-screen'>
          <div
            className={`hidden lg:block lg:w-2/3 ${styles.backgroundImage} h-auto`}
          >
            <div className='flex items-center h-full px-20 bg-gray-900 bg-opacity-40'>
              <div>
                <h2 className='text-4xl font-bold text-white'>DoIt</h2>

                <p className='max-w-xl mt-3 text-gray-300'>
                  This time for do something
                </p>
              </div>
            </div>
          </div>

          <div className={styles.loginForm}>
            <div className='flex-1'>
              <div className='text-center'>
                <h2 className='text-4xl font-bold text-center text-gray-700 dark:text-white'>
                  Sign In
                </h2>

                <p className='mt-3 text-gray-500 dark:text-gray-300'>
                  Sign in to access your account
                </p>
              </div>

              <div className='mt-8'>
                <form onSubmit={onSubmit}>
                  <div>
                    <label
                      htmlFor='email'
                      className='block mb-2 text-sm text-gray-600 dark:text-gray-200'
                    >
                      Email Address
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      placeholder='example@example.com'
                      className={`${styles.inputEmail} dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 
                      dark:border-gray-700 dark:focus:border-blue-400`}
                      autoComplete='username'
                    />
                  </div>

                  <div className='mt-6'>
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
                      type='password'
                      name='password'
                      id='password'
                      placeholder='Your Password'
                      className={`${styles.inputPassword} dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 
                      dark:border-gray-700  dark:focus:border-blue-400`}
                      autoComplete='current-password'
                    />
                  </div>

                  <div className='mt-6'>
                    <button className={styles.signInButton}>Sign in</button>
                  </div>
                </form>

                <p className='mt-6 text-sm text-center text-gray-400'>
                  Don&#x27;t have an account yet?{' '}
                  <a
                    href='http://localhost:3000/register'
                    className='text-blue-500 focus:outline-none focus:underline hover:underline'
                  >
                    Register
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
