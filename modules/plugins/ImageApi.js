let supportsWebP = false
export default async function (ctx, inject) {


  await (async (inject) => {
    if(await supportsWebp()) // check if supports webp
      supportsWebP = true
  })()

  inject('CBDImage', {
    getFromServer: getFromServer,
    getFromClient: getFromClient,
    get:get
  })

  //============================================================
  //
  //============================================================
  function get(name, width, height) {
    if(ctx.isServer) return getFromServer(name, width, height)
    if(ctx.isClient) return getFromClient(name, width, height)
  }

  //============================================================
  //
  //============================================================
  function getFromServer(name, width, height) {

    if(!ctx.isServer) throw new Error('GetImageServer being called from client')
    if(!name || !width) throw new Error('GetImageServer Lazy load image request must have a name and width.')

    if(!height) height = width

    return `http://cbddocumentsimages-imagebucket-emyy2umszkrb.s3-website-us-east-1.amazonaws.com/${width}x${height}/${name}`
  }

  //============================================================
  //
  //============================================================
  function getFromClient(name, width, height) {
    if(!ctx.isClient) throw new Error('GetImageClient being called from client')
    if(!name || !width) throw new Error('GetImageClient Lazy load image request must have a name and width.')

    if(!height) height = width

    if(supportsWebP  && !~name.indexOf('.webp')){

      name = addWebP(name)
      return `http://cbddocumentsimages-imagebucket-emyy2umszkrb.s3-website-us-east-1.amazonaws.com/${width}x${height}/${name}`
    }

    return `http://cbddocumentsimages-imagebucket-emyy2umszkrb.s3-website-us-east-1.amazonaws.com/${width}x${height}/${name}`
  }

  //============================================================
  //
  //============================================================
  async function supportsWebp() {
    if (ctx.isServer || !self.createImageBitmap) return false;

    const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
    const blob = await fetch(webpData).then(r => r.blob());
    return createImageBitmap(blob).then(() => true, () => false);
  }
}

function addWebP(filename) {
  let lastIndex = filename.lastIndexOf(".")
  return filename.slice(0,lastIndex)+'.webp';
}
