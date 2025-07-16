function select(element, selector) {
  if (!element) element = document;
  return element.querySelector(selector);
}

function selectAll(element, selector) {
  if (!element) element = document;
  return element.querySelectorAll(selector);
}

function listen(element, event, callback) {
  element.addEventListener(event, callback);
}

function unlisten(element, event, callback) {
  element.removeEventListener(event, callback);
}

function classify(element, cssClass) {
  element.classList.add(cssClass);
}

function unclassify(element, cssClass) {
  element.classList.remove(cssClass);
}

function attribute(element, attribute, value) {
  element.setAttribute(attribute, value);
}

function unattribute(element, attribute) {
  element.removeAttribute(attribute);
}

function elementCreate(tag) {
  return document.createElement(tag);
}

function elementRemove(element) {
  element.remove();
}

function beforeEnd(parent, child) {
  parent.append(child);
}

function afterBegin(parent, child) {
  parent.prepend(child);
}

function beforeBegin(baseElement, newElement) {
  baseElement.insertAdjacentElement("beforebegin", newElement);
}

function afterEnd(baseElement, newElement) {
  baseElement.insertAdjacentElement("afterend", newElement);
}
