// Return an element's offset wrt document element
// https://j11y.io/jquery/#v=git&fn=jQuery.fn.offset
export const offset = el => {
  if (isElement(el)) {
    if (!el.getClientRects().length) {
      return { top: 0, left: 0 }
    }
    const bcr = getBCR(el)
    const win = el.ownerDocument.defaultView
    return {
      top: bcr.top + win.pageYOffset,
      left: bcr.left + win.pageXOffset
    }
  }
}

// Return an element's offset wrt to it's offsetParent
// https://j11y.io/jquery/#v=git&fn=jQuery.fn.position
export const position = el => {
  if (!isElement(el)) {
    return
  }
  let parentOffset = { top: 0, left: 0 }
  let offsetSelf
  let offsetParent
  if (getCS(el).position === 'fixed') {
    offsetSelf = getBCR(el)
  } else {
    offsetSelf = offset(el)
    const doc = el.ownerDocument
    offsetParent = el.offsetParent || doc.documentElement
    while (offsetParent &&
                (offsetParent === doc.body || offsetParent === doc.documentElement) &&
                getCS(offsetParent).position === 'static') {
      offsetParent = offsetParent.parentNode
    }
    if (offsetParent && offsetParent !== el && offsetParent.nodeType === Node.ELEMENT_NODE) {
      parentOffset = offset(offsetParent)
      parentOffset.top += parseFloat(getCS(offsetParent).borderTopWidth)
      parentOffset.left += parseFloat(getCS(offsetParent).borderLeftWidth)
    }
  }
  return {
    top: offsetSelf.top - parentOffset.top - parseFloat(getCS(el).marginTop),
    left: offsetSelf.left - parentOffset.left - parseFloat(getCS(el).marginLeft)
  }
}

// Determine if an element is an HTML Element
export const isElement = el => {
  return el && el.nodeType === Node.ELEMENT_NODE
}

// Return the Bounding Client Rec of an element. Retruns null if not an element
export const getBCR = el => {
  return isElement(el) ? el.getBoundingClientRect() : null
}
