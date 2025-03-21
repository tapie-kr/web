'use client';

import Tracker from '@openreplay/tracker';
import { useEffect } from 'react';

export const tracker = new Tracker({
  projectKey:            'tpTmMUZMMAzsNvbX4d8U',
  __DISABLE_SECURE_MODE: true,
  network:               {
    capturePayload:     true,
    sessionTokenHeader: true,
    failuresOnly:       false,
    ignoreHeaders:      [],
    captureInIframes:   false,
  },
  ingestPoint: 'https://openreplay.vport.dev/ingest',
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
