'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('40da1551-c3db-4172-9b69-ba920d134585');
  }, []);

  return null;
};
