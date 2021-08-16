import cookie from 'cookie'
import { v4 as uuid } from '@lukeed/uuid'

export async function post(request) {
  console.log(request.body)
  const body = {
    uid: uuid(),
    name: 'Mr Me',
  }
  const userCookie = cookie.serialize('user', JSON.stringify(body), {
    maxAge: 86400,    // 1 day
    httpOnly: true,   // no client access
    // secure: true,  // should be set for production
  })

  return {
    headers: {
      'Set-Cookie': userCookie
    },
    body,
  }
}

export async function del({}) {
  const jwtCookie = cookie.serialize('user', '', {
    maxAge: -1,       // expire it to delete
    httpOnly: true,   // no client access
    // secure: true,  // should be set for production
  })

  return {
    headers: {
      'Set-Cookie': jwtCookie
    },
  }
}