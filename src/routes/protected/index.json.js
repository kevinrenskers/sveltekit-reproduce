export const get = async (request) => {
  console.log("RECEIVED CONTENT REQUEST");
  return { body: new Date().toISOString() };
}; 