import { withTAPIEWebConfig } from '@tapie-kr/web-shared/configs/nextjs.mjs';

export default withTAPIEWebConfig({ env: { NEXT_PUBLIC_API_URL:
      process.env.NEXT_PUBLIC_API_URL || 'https://test.kr' } });
