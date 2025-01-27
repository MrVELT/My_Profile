import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Loại trừ các đường dẫn mặc định của Next.js (bao gồm static files, API, và trang 404)
  if (
    pathname.startsWith('/_next') || // Static files
    pathname.startsWith('/api') || // API routes
    pathname === '/404' || // Trang 404
    pathname === '/favicon.ico' // Favicon
  ) {
    return NextResponse.next();
  }

  // Danh sách các đường dẫn hợp lệ
  const validPaths = ['/']; // Thay thế bằng các đường dẫn trong ứng dụng của bạn

  // Chuyển hướng tới trang 404 nếu đường dẫn không hợp lệ
  if (!validPaths.includes(pathname)) {
    return NextResponse.redirect(new URL('/404', request.url));
  }

  // Tiếp tục xử lý nếu không chuyển hướng
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*', // Áp dụng middleware cho mọi đường dẫn
};
