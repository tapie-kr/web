import { cookies } from 'next/headers';
import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams.entries().toArray();
  const apiURL = process.env.NEXT_PUBLIC_API_URL + '/auth/google/callback?' + searchParams.map(([key, value]) => `&${key}=${decodeURI(value.replaceAll(' ', '+'))}`).join('');
  const res = await fetch(apiURL);

  if (res.ok) {
    const { data } = await res.json();
    const cookieStore = await cookies();

    cookieStore.set('accessToken', data.accessToken);

    cookieStore.set('refreshToken', data.refreshToken);

    return Response.json({ success: true });
  }

  throw new Error('Failed to authenticate');
}
