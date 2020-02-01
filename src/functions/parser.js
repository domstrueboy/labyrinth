String.prototype.replaceAll = function(search, replace){
  return this.split(search).join(replace);
}

export default function parser(htmlString) {
  return htmlString
    .replaceAll('</div><div>', ';')
    .replaceAll('<div>', ';')
    .replaceAll('</div>', ';')
    .replaceAll('<br>', 'delimeter');
}
