'use client';

import React, { Suspense } from 'react';
import ConfirmPassword from './confirm-password';

const ConfirmPasswordPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConfirmPassword />
    </Suspense>
  );
};

export default ConfirmPasswordPage;
