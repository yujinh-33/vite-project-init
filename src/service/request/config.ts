let baseUrl = ''

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://ipingan.org/dev'
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = 'http://ipingan.org/prod'
} else {
  baseUrl = 'http://ipingan.org/test'
}

export { baseUrl }
