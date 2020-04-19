import getImageFromShowcase from './showcase'

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Handles a request.
 * @param {Request} request
 */
async function handleRequest(request) {
  let response
  if (request.method === 'GET') {
    response = await getImageFromShowcase()
  } else {
    response = new Response('Expected GET', { status: 405 })
  }
  return response
}
