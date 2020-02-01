String.prototype.replaceAll = function(search, replace){
  return this.split(search).join(replace);
}

export default function parser(htmlString) {
  return htmlString
    .replaceAll(/&nbsp;/gi, '')
    .replaceAll('</div><div>', ';')
    .replaceAll('<div>', ';')
    .replaceAll('</div>', '')
    .replaceAll('<br>', 'delimeter')
    .trim()
    .split(';')
    .map(el => el.trim())
    .filter(el => el !== '');
}
