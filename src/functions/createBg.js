export const createBg = (url) => ({
    background :`linear-gradient(0deg, rgba(0, 0, 0, 0.7) 30%, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 0) 80%, rgba(0, 0, 0, 0.7) 100%), url("${url}") no-repeat `,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
  })