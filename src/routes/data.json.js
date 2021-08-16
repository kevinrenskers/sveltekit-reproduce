export function get() {
  const body = [
    { id: 'welcome', title: 'Welcome', content: `Welcome to the site ${new Date().toISOString()}` },
    { id: 'about', title: 'About', content: 'About the site' },
    { id: 'contact', title: 'Contact', content: 'Contact the site' },
  ]

  return {
    body,
  }
}