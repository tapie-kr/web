'use client';

import Tracker from '@openreplay/tracker';
import { useEffect } from 'react';

const tracker = new Tracker({
  projectKey:            'B7f9fQcoF6UR6cWd6bS9',
  __DISABLE_SECURE_MODE: true,
  network:               {
    capturePayload:     true,
    sessionTokenHeader: true,
    failuresOnly:       false,
    ignoreHeaders:      [],
    captureInIframes:   false,
  },
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
