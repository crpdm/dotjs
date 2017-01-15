var s = document.createElement('script');
Element.prototype.prependChild = function(child) { this.insertBefore(child, this.firstChild); };
s.src = "https://localhost:3131/"+location.hostname.replace(/^www\./,'')+'.js';
(document.head||document.documentElement).prependChild(s);
