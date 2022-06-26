import styles from './Register.module.css';
import React from 'react';
import Layout from '~/components/Layout';

const RegisterContainer = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Layout showHeader={false}>
      <div className='bg-white w-full dark:bg-gray-900'>
        <div className='flex justify-center h-screen'>
          <div
            className={`hidden bg-cover lg:block lg:w-2/3 ${styles.backgroundImage}`}
          ></div>
          <div className='flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6'>
            <div className='flex-1'>
              <div className='text-center'>
                <h2 className='text-4xl font-bold text-center text-gray-700 dark:text-white'>
                  REGISTER
                </h2>

                <p className='mt-3 text-gray-500 dark:text-gray-300'>
                  Enter your information to Register
                </p>
              </div>

              <div className='mt-8'>
                <form onSubmit={onSubmit}>
                  <div className=' flex flex-row '>
                    <div className=' pr-5'>
                      <label
                        htmlFor='firstName'
                        className='block mb-2 text-sm text-gray-600 dark:text-gray-200'
                      >
                        First name
                      </label>
                      <input
                        type='text'
                        id='firstName'
                        placeholder='Dang'
                        className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                      />
                    </div>

                    <div>
                      <label
                        htmlFor='lastName'
                        className='block mb-2 text-sm text-gray-600 dark:text-gray-200'
                      >
                        Last name
                      </label>
                      <input
                        type='text'
                        id='lastName'
                        placeholder='Anh Tu'
                        className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                      />
                    </div>
                  </div>

                  <div className=' mt-6'>
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
                      className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
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
                    </div>

                    <input
                      type='password'
                      name='password'
                      id='password'
                      placeholder='********'
                      className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                    />
                  </div>

                  <div className='mt-6'>
                    <button className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50'>
                      REGISTER NOW
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterContainer;
