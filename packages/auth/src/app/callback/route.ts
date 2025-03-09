import { cookies } from 'next/headers';
import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams.entries().toArray();
  const baseURL = process.env.NODE_ENV === 'production' ? 'https://api.tapie.kr' : 'http://localhost:9876/api';

  const apiURL =
    `${baseURL}/v1/auth/google/callback?` +
    searchParams
      .map(([key, value]) => `&${key}=${decodeURI(value.replaceAll(' ', '+'))}`)
      .join('');

  const res = await fetch(apiURL);
  const service = request.nextUrl.searchParams.get('service');

  if (res.ok) {
    const { data } = await res.json();
    const cookieStore = await cookies();

    const cookieOptions = {
      httpOnly: true,
      secure:   true,
      sameSite: 'lax' as const,
      domain:   '.tapie.kr',
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

  console.log(res);

  throw new Error('Failed to authenticate');
}
