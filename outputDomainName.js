/* Extract the domain name from a URL - CodeWars Kata */

const domainName = (url) => {
  let domain = url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "");
  console.log(domain)
  return domain.substr(0, (domain.indexOf(".")))
}



//I use this line to test in an HTML document, safely ignore
document.getElementById("primus").innerHTML = 
domainName("http://xakep.ru")
