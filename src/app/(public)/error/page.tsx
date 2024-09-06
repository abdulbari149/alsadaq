import React from 'react';
import Link from 'next/link';

const ErrorPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>An Error Occurred</h1>
      <p>Oops! Something went wrong.</p>
      <Link href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        Go back to Home
      </Link>
    </div>
  );
}


export default ErrorPage;
