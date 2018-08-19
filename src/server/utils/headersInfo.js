const getHeadersInfo = (target, context) => {
  switch (target) {
    //HOME URLS
    case '/':
      return {
        title: '',
        description: '',
        url: '',
        baseUrl: '/',
      }
    default:
      return {
        title: '',
        description: '',
        url: '',
        baseUrl: target,
      }
  }
}

export default getHeadersInfo;
