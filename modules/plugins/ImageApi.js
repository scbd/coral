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
    width= defaultWidth(width)

    if(process.server) return getFromServer(name, width, height)
    if(process.client) return getFromClient(name, width, height)
  }

  //============================================================
  //
  //============================================================
  function defaultWidth (width) {
    if (width) return width
    let $breakpoints = ctx.app.$breakpoints

    if($breakpoints.isDesktopHD)
      width = 2000
    if($breakpoints.isDesktopWS)
      width = 1407

    if($breakpoints.isDesktop)
      width = 1215

    if($breakpoints.isTablet)
      width = 1023

    if($breakpoints.isMobile)
      width = 767

    return width
  }
  //============================================================
  //
  //============================================================
  function getFromServer(name, width, height) {

    if(!process.server) throw new Error('GetImageServer being called from client')
    if(!name || !width) throw new Error('GetImageServer Lazy load image request must have a name and width.')

    if(!height) height = width

    return `https://attachments.cbd.int/${width}x${height}/${name}`
  }

  //============================================================
  //
  //============================================================
  function getFromClient(name, width, height) {
    if(!process.client) throw new Error('GetImageClient being called from client')
    if(!name || !width) throw new Error('GetImageClient Lazy load image request must have a name and width.')

    if(!height) height = width

    if(supportsWebP  && !~name.indexOf('.webp') && !~name.indexOf('.png')){

      name = addWebP(name)
      return `https://attachments.cbd.int/${width}x${height}/${name}`
    }

    return `https://attachments.cbd.int/${width}x${height}/${name}`
  }

  //============================================================
  //
  //============================================================
  async function supportsWebp() {
    if (process.server || !self.createImageBitmap) return false;

    const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
    const blob = await fetch(webpData).then(r => r.blob());
    return createImageBitmap(blob).then(() => true, () => false);
  }
}

function addWebP(filename) {
  let lastIndex = filename.lastIndexOf(".")
  return filename.slice(0,lastIndex)+'.webp';
}
