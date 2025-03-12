'use client';

import Tracker from '@openreplay/tracker';
import { useEffect } from 'react';

const tracker = new Tracker({
  projectKey:  '',
  ingestPoint: '',
});

const OpenReplay = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      tracker.start();
    }
  }, []);

  return null;
};

export default OpenReplay;
