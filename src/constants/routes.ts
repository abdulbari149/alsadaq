export const publicRoutes = [
  '/images',
  '/_next/static',
  '/api',
  '/quiz',
  '/boycott',
  '/donation',
]

export const protectedRoutes = [
  { route: '/dashboard', exact: true },
  { route: '/dashboard/boycott/products', exact: false },
]
