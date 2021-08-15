import cookie from "cookie";

export const handle = async ({ request, resolve }) => {
  const cookies = cookie.parse(request.headers.cookie || "");
  request.locals.jwt = cookies.jwt;
  return await resolve(request);
};

export function getSession({ locals }) {
  return {
    jwt: locals.jwt,
  };
}
