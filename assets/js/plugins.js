/*
 * Spoofs HTML5 Placeholders
 * Author: Dan Bentley (github.com/danbentley)
 */
(function($){if("placeholder"in document.createElement("input"))return;$(document).ready(function(){$(':input[placeholder]').each(function(){setupPlaceholder($(this));});$('form').submit(function(e){clearPlaceholdersBeforeSubmit($(this));});});function setupPlaceholder(input){var placeholderText=input.attr('placeholder');if(input.val()==='')input.val(placeholderText);input.bind({focus:function(e){if(input.val()===placeholderText)input.val('');},blur:function(e){if(input.val()==='')input.val(placeholderText);}});}
function clearPlaceholdersBeforeSubmit(form){form.find(':input[placeholder]').each(function(){var el=$(this);if(el.val()===el.attr('placeholder'))el.val('');});}})(jQuery);

/*
 * innerShiv
 * Author: JDBarlett (http://jdbartlett.github.com/innershiv)
 */
window.innerShiv=function(){function i(c,e,b){return g.test(b)?c:e+"></"+b+">"}function f(d,f){if(!c){c=document.createElement("div");var b=c.cloneNode(!1);b.innerHTML="<nav></nav>";if(e=b.childNodes.length!==1)c.style.display="none"}d=d.replace(/^\s\s*/,"").replace(/\s\s*$/,"").replace(j,"").replace(k,i);(b=d.match(l))&&(d="<table>"+d+"</table>");e&&document.body.appendChild(c);c.innerHTML=d;e&&document.body.removeChild(c);b=b?c.getElementsByTagName(b[1])[0].parentNode:c;if(f===!1)return b.childNodes;for(var h=document.createDocumentFragment(),g=b.childNodes.length;g--;)h.appendChild(b.firstChild);return h}var c,e,l=/^<(tbody|tr|td|col|colgroup|thead|tfoot)/i,k=/(<([\w:]+)[^>]*?)\/>/g,g=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,j=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;f.b=!0;return f}();