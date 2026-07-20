export const config = {
  matcher: '/:path*',
};

export default function middleware(request) {
  const auth = request.headers.get('authorization');
  const expected = 'Basic ' + btoa(`${process.env.SITE_USER}:${process.env.SITE_PASS}`);

  if (auth !== expected) {
    return new Response('Auth required', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' },
    });
  }
}
