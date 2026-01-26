import { cookies } from 'next/headers';
import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const baseURL = process.env.NODE_ENV === 'production' ? 'https://api.tapie.kr' : 'http://localhost:9876/api';

  // URLSearchParams를 사용하여 올바른 쿼리 문자열 생성
  const apiSearchParams = new URLSearchParams();
  searchParams.forEach((value, key) => {
    apiSearchParams.append(key, value);
  });

  const apiURL = `${baseURL}/v1/auth/google/callback?${apiSearchParams.toString()}`;

  const res = await fetch(apiURL);
  const service = request.nextUrl.searchParams.get('service');

  if (res.ok) {
    const { data } = await res.json();
    const cookieStore = await cookies();

    const cookieOptions = {
      httpOnly: true,
      secure:   true,
      sameSite: 'lax' as const,
      domain:   process.env.NODE_ENV === 'production' ? '.tapie.kr' : 'localhost',
      path:     '/',
    };

    cookieStore.set('accessToken', data.accessToken, cookieOptions);

    cookieStore.set('refreshToken', data.refreshToken, cookieOptions);

    if (process.env.NODE_ENV === 'production') {
      if (service === 'form') {
        return Response.redirect('https://tapie.kr/apply');
      } else if (service === 'website') {
        return Response.redirect('https://tapie.kr');
      }

      return Response.redirect('https://tapie.kr');
    }

    return Response.json({ success: true });
  }

  // 에러 응답의 body를 읽어서 더 자세한 정보 확인
  let errorMessage = 'Failed to authenticate';
  try {
    const errorData = await res.json();
    errorMessage = errorData.message || errorData.error || errorMessage;
    console.error('API Error:', errorData);
  } catch {
    const errorText = await res.text();
    console.error('API Error Response:', errorText);
  }

  console.error('Response status:', res.status, res.statusText);
  console.error('Request URL:', apiURL);

  throw new Error(errorMessage);
}
