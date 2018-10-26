export default   {
        getItem:getItem,
        setItem:setItem
    }
    //============================================================
    //
    //============================================================
      function getRawCookie(req) {
        let cookie = null;
        if (typeof window === 'undefined' && req)
            cookie = req.headers.cookie;
        else if(!req)
            cookie = document.cookie;
        return cookie;
      }
    //============================================================
    //
    //============================================================
      function getItem(sKey,req) {
        let cookie = getRawCookie(req);

        if(!cookie) return false;
        let val = decodeURIComponent(cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
        if(val==='false') return false
        else return val;
      }

      //============================================================
      //
      //============================================================
      function setItem(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        if(typeof window === 'undefined') return;

        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
        var sExpires = "";
        if (vEnd) {
          switch (vEnd.constructor) {
            case Number:
              sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
              break;
            case String:
              sExpires = "; expires=" + vEnd;
              break;
            case Date:
              sExpires = "; expires=" + vEnd.toUTCString();
              break;
          }
        }
        document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
        return true;
      }

      //============================================================
      //
      //============================================================
      function removeItem(sKey, sPath, sDomain) {
        if(typeof window === 'undefined') return;
        if (!sKey || !this.hasItem(sKey)) { return false; }
        document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + ( sDomain ? "; domain=" + sDomain : "") + ( sPath ? "; path=" + sPath : "");
        return true;
      }

      //============================================================
      //
      //============================================================
      function hasItem (sKey) {
        let cookie = getRawCookie(req);
        if(!cookie) return false;
        return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(cookie);
      }

      //============================================================
      //
      //============================================================
      function keys() {
        let cookie = getRawCookie(req);
        if(!cookie) return false;
        var aKeys = cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
        for (var nIdx = 0; nIdx < aKeys.length; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
        return aKeys;
      }

