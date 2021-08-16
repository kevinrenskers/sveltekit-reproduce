import cookie from 'cookie'

export async function handle({ request, resolve }) {
  const cookies = cookie.parse(request.headers.cookie || '')
  request.locals.user = JSON.parse(cookies.user || null)

  const response = await resolve(request)

  return response
}

export function getSession({ locals }) {
	return locals.user
}