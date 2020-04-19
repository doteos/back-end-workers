const fetch = require('node-fetch')
const url = 'https://raw.githubusercontent.com/doteos/artist-showcase-images/master/'
const dbUri = 'db.json'

/**
 * Return a random image URL from artist showcase.
 * @returns {Promise<Response>}
 */
async function getImageFromShowcase() {
  let response
  try {
    const raw = await fetch(`${url}${dbUri}`).then(res => res.json())
    const artist = raw['data'][Math.floor(Math.random() * Math.floor(raw['data'].length))]
    const artwork = artist['portfolio'][Math.floor(Math.random() * Math.floor(artist['portfolio'].length))]
    const responseBody = {
      artistName: artist['name'],
      clickUrl: artist['link'],
      imageName: artwork['name'],
      imageUrl: `${url}${artist['folder']}/${artwork['filename']}`,
    }
    response = new Response(JSON.stringify(responseBody), { status: 200 })
  } catch (e) {
    response = new Response(e.toString(), { status: 500 })
  }
  return response
}

export default getImageFromShowcase
