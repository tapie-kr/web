'use client';

import { createContext } from 'react';

type ViewportDetectorContextType = { isInView: boolean };

export const ViewportDetectorContext = createContext({} as ViewportDetectorContextType);
