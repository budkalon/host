function perandom(a,t){return Math.floor(Math.random()*(t-a+1))+a}function pengacakan(a){var t,l,e=a?.length;if(0===e)return!1;for(;--e;)t=Math.floor(Math.random()*(e+1)),l=a[e],a[e]=a[t],a[t]=l;return a}function animate_scroll(a,t){$("html, body").stop().animate({scrollTop:$(a).offset().top-t},1e3)}function isEmpty(a){return!$.trim(a.html())}function replyTo(a){var t=$("#comment-editor").attr("src").split("&"),l=$("#a-undo"),e=$("#b-undo"),r=$("#comment-editor"),s=$("#bud-comment-form"),n=$("#comup"+a),c=(a?$("#c"+a):$("#bud-comments"),$("#commentin")),i=t,o=i[0]+"&"+i[1]+"&"+i[2]+"&"+i[3],m=o+"&parentID="+a;l.css("display",0==a?"none":"inline-block"),e.css("display",0==a?"none":"block"),r.css("visibility","hidden"),r.attr("src",a?m:o),s.insertAfter(a?n:c),$("html, body").animate({scrollTop:r.offset().top-300},1e3),r.on("load",(function(){$(this).css("visibility","visible")}))}var pumanjang=$("#papanjang").val();function onSubmit(a){$("#budkontak-form").submit()}fetch("https://api-ssl.bitly.com/v4/shorten",{method:"POST",headers:{Authorization:"Bearer 0cfdbf7f35dd3347c9544014e683abfb2deee58f","Content-Type":"application/json"},body:JSON.stringify({long_url:pumanjang,domain:"bit.ly"})}).then((a=>a.json())).then((a=>{var t=a.id;console.log(t),$("#budpendekan").html("https://"+t)}));var vidsal=$("#asalvid").html(),vidcon=$("#video-place");vidcon.html(vidsal),vidsal.remove();const titipe=$("#tumipe").val();var al={gl:{lc:window.location.href,ad:"https://budkanote.blogspot.com",mpt:":empty",ckc:":checked",ktn:"https://placekitten.com/g/"},rl:{rf:$("span#bud-kerelated"),rfatr:"data-relatedan",kn:$("#posnya-relatedan"),tm:[100,100],mx:5,num:140},ps:{pb:$(".post-body"),wc:$(".etan"),tc:$(".etam"),wpm:230,wrd:[" kata","kurang dari semenit","sekitar semenit"," menit","konten kosong!"],fID:"catfoot",ft:$(".catkaki"),pft:"ref",pff:"cat",clc:"footklik",skf:$('<hr><ol id="'+this.fID+'"></ol>')},sr:{t0:$("#r-car-0"),rc:$("input[data-usul='r']"),rcp:'input[data-usul="r"]',cb:"#carimana :checkbox",scfr:$("#bud-searchform"),bsc:$("#bud-search-input"),bcr:$("#carivalue"),lbn:"label:note",lbt:"label%3A",nvms:$(".mss .search-query"),rgxlbl:"/((slabel:w*)|(label:w*))/g"},cmn:{bd:$(".comment-body"),bdp:".comment-body",rkm:"div.refkom",cff:"comref-footer",kcp:["Waduh, kayaknya komentar ini mengandung link/tautan... jadi komentarnya disembunyikan."],spm:"komenspam",trf:"toref",cls:"closeref",cfr:"comreflink",rpcls:"repcomclosed",rpc:"repcom",hdr:"hiddenrep",imgsz:800}};titipe&&function(a){for(var t=al.ps.pb.text().split(" "),l=0;l<t.length;l++)for(;""===t[l];)t.splice(l,1);al.ps.wc.text(t.length.toString().replace(RegExp(/\B(?=(\d{3})+(?!\d))/g),".")+al.ps.wrd[0]);var e=al.ps.pb.text().trim().split(/\s+/g).length,r=Math.round(e/al.ps.wpm);0!=e?al.ps.tc.html(r<1?al.ps.wrd[1]:r<1?al.ps.wrd[2]:r+" "+al.ps.wrd[3]):al.ps.tc.html(al.ps.wrd[4]);var s=a('<ol id="'+al.ps.fID+'"></ol>');al.ps.pb.append(s),al.ps.ft.each((function(t){var l=t+1,e=al.ps.pff+l,r=al.ps.pft+l,n=a(this).text().replace(RegExp(/\—/g),""),c=a('<li><a class="'+al.ps.clc+'" href="#'+r+'" id="'+e+'">'+n+"</a></li>");s.append(c),a(this).html('<a class="'+al.ps.clc+'" href="#'+e+'" id="'+r+'">['+l+"]</a>")})),a("<hr>").insertBefore(s),a("a."+al.ps.clc).on("click",(function(){var t=a(this).attr("href");a(this).attr("id");animate_scroll(t,110),a(t).addClass("infoc"),a("a."+al.ps.clc).not(a(t)).removeClass("infoc")})),a("#"+al.ps.fID).is(":empty")&&a("#"+al.ps.fID).prev().remove(),a.ajax({url:al.gl.ad+"/feeds/posts/summary/-/"+al.rl.rf.attr(al.rl.rfatr)+"?alt=json-in-script&max-results="+al.rl.mx,type:"get",dataType:"jsonp",success:function(t){a.ajax({url:al.gl.ad+"/feeds/posts/summary/-/"+al.rl.rf.attr(al.rl.rfatr)+"?alt=json-in-script&start-index=1&max-results="+al.rl.mx,type:"get",dataType:"jsonp",success:function(a){var t,l,e,r=pengacakan(a.feed.entry),s="",n=al.gl.lc.split("#")[0].split("?");if(void 0!==r){s='<h4><i class="fa-solid fa-layer-group"></i> Pos sejenis</h4><ul class="bitter">';for(var c=0;c<r.length;c++){for(var i=0;i<r[c].link.length;i++)"alternate"==r[c].link[i].rel&&(t=r[c].link[i].href);e="media$thumbnail"in r[c]?'<img alt="" src="'+r[c].media$thumbnail.url.replace(/\/s[0-9]+\-c/,"/w"+al.rl.tm[0]+"-h"+al.rl.tm[1]+"-p")+'" width="'+al.rl.tm[0]+'" height="'+al.rl.tm[1]+'">':'<img alt="" src="'+al.gl.ktn+al.rl.tm[1]+"/"+al.rl.tm[0]+'" width="'+al.rl.tm[0]+'">',l=(l="summary"in r[c]?r[c].summary.$t.replace(/<br ?\/?>/gi," ").replace(/<.*?>/g,"").replace(/[<>]/g,""):"").length>al.rl.num?l.substring(0,al.rl.num)+"&hellip;":l,t.includes(n[0])||(s+='<li class="bitter"><a href="'+t+'" title="'+r[c].title.$t+'"><div class="relaimg">'+e+'</div><div class="relasum"><div class="relajud">'+r[c].title.$t+'</div><div class="summary">'+l+"</div></div></a></li>")}s+="</ul>",al.rl.kn.html(s)}else al.rl.kn.html('<div>Tidak ada pos terkait kategori "'+al.rl.rf.attr(al.rl.rfatr)+'".</div>')},error:function(){al.rl.kn.html("")}})},error:function(){al.rl.kn.html("")}})}(jQuery),$((function(){$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not(".allow").not(".footklik").click((function(a){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);(t=t.length?t:$("[name="+this.hash.slice(1)+"]")).length&&(a.preventDefault(),$("html, body").animate({scrollTop:t.offset().top},1e3,(function(){var a=$(t);if(a.focus(),a.is(":focus"))return!1;a.attr("tabindex","-1"),a.focus()})))}})),al.sr.t0.click((function(){al.sr.rc.prop("checked",$(this).prop("checked"))})),al.sr.rc.click((function(){$(this).prop("checked")||al.sr.t0.prop("checked",!1),0==$(al.sr.rcp+":not(:checked)").length&&al.sr.t0.prop("checked",!0)})),al.sr.scfr.submit((function(){var a=al.sr.bsc,t=al.sr.bcr;if(0==$(al.sr.cb+":not(:checked)").length)var l=al.sr.lbn;else if(0==$(al.sr.cb+":checked").length)l=al.sr.lbn;else{var e=[];$.each($(al.sr.rcp+":checked"),(function(){e.push($(this).val())}));l=e.join("|")}a.attr("name",""),t.attr("name","q");var r=a.val().replace(RegExp(al.sr.rgxlbl),"")+" "+l;t.val(""==a.val()?"":r)}));var a=al.gl.lc.split("label%3A"),t=[],l="";for(let l=1;l<a.length;l++){var e=a[l].split("&")[0].split("%7C"),r=decodeURI(e[0]);t.push(r)}for(let a=0;a<t.length;a++){var s=a<t.length-1?a<t.length-2?", ":2==t.length?" dan ":", dan ":"";l+=t[a]+s}var n=!!al.sr.nvms.text().includes("label:note"),c='<span class="idom">'+al.sr.nvms.text().replace(RegExp(/((\slabel:\w*)|(label:\w*))/g),"").replace(RegExp(/\|*/g),"").replace(RegExp(/\+*/g),"")+"</span>"+(n?"":" dalam kategori "+l.replace("dll","lainnya"));al.sr.nvms.html(c),al.cmn.bd.each((function(){var a=$(this).html().replace(/\[tawut\](.*?)\[\/tawut\]/gi,"<a target='_blank' href='$1' title='tautan' rel='nofollow' data-allow='true'>$1</a>");a=(a=(a=(a=(a=(a=(a=(a=(a=a.replace(/\[toref\](.*?)\[\/toref\]/gi,"<a data-href='$1' title='Referensi komentar' rel='nofollow' data-allow='true' class='"+al.cmn.trf+"'>$1</a>")).replace(/\_\_(.*?)\_\_/gi,"<strong>$1</strong>")).replace(/\*\*(.*?)\*\*/gi,"<em>$1</em>")).replace(/\[img\](.*?)\[\/img\]/gi,"<span style='text-align:center;'><a href='$1' data-allow='true' class='allow' target='_blank' rel='nofollow'><img title='Gambar referensi' class='cm-image' src='$1' alt='Memuat...' /></a></span>")).replace(/\[youtube\](.*?)\[\/youtube\]/gi,"<span class='cm-youtube'><iframe frameborder='0' allow='autoplay; encrypted-media' allowfullscreen src='http://www.youtube.com/embed/$1'></iframe></span>")).replace(/\/((w|s|h)[0-9]+\-(c|p|cc)|(w|s|h)[0-9]+(|\-(c|p|cc)))/gi,"/s"+al.cmn.imgsz+"-c")).replace(/\[h\](.*?)\[\/h\]/gi,"<strong class='comh comh1'>$1</strong>")).replace(/\[hh\](.*?)\[\/hh\]/gi,"<strong class='comh comh2'>$1</strong>")).replace(/\[hhh\](.*?)\[\/hhh\]/gi,"<strong class='comh comh3'>$1</strong>"),$(this).html(a),$(this).has("a."+al.cmn.trf)&&$(this).append('<div class="refkom"></div><div style="display:none" class="'+al.cmn.cff+' bitter"><div class="'+al.cmn.cls+' bit-6"><i class="fa-regular fa-rectangle-xmark"></i></div></div>'),$(this).children(".comh").each((function(a){var t=a+1,l=$(this).parent().parent().attr("id");$(this).html().split(" ");$(this).attr("id",l+"-h-"+t)}))})),$(al.cmn.bdp+':has(a:not([data-allow="true"]))').each((function(){$(this).parent().parent().addClass(al.cmn.spm),$(this).html(al.cmn.kcp[0])})),$(al.cmn.bdp+" a.toref").on("click",(function(){$(this).toggleClass("torefopen");var a=$(this).attr("data-href"),t=(a.includes(al.gl.ad)?"":al.gl.ad)+a,l=a.split("#"),e=$(this).parent().find(al.cmn.rkm),r=$(this).parent().find("div."+al.cmn.cff).children("."+al.cmn.cfr);return e.empty(),e.next().css("display","none"),r.remove(),isEmpty(e)&&($.get(t,{},(function(t){e.html($(t).find("#"+l[1]+" .comup").html()),$(al.cmn.rkm+" .comment-footer").remove(),$(al.cmn.rkm+" a."+al.cmn.trf).unwrap(),e.next().css("display","block"),e.next().append('<div class="'+al.cmn.cfr+' bit-6"><a target="_blank" href="'+a+'" data-allow="true"><i class="fa-solid fa-up-right-from-square"></i></a></div>'),$(al.cmn.rkm+" "+al.cmn.bdp).each((function(){var a=$(this).html().replace(/\[tawut\](.*?)\[\/tawut\]/gi,"<em>$1</em>");a=(a=(a=(a=(a=(a=(a=(a=a.replace(/\[toref\](.*?)\[\/toref\]/gi,"<em>$1</em>")).replace(/\_\_(.*?)\_\_/gi,"<strong>$1</strong>")).replace(/\[img\](.*?)\[\/img\]/gi,"<span style='text-align:center;'><a data-allow='true' href='$1' class='allow' target='_blank' rel='nofollow'><img title='Gambar referensi' class='cm-image' src='$1' alt='Memuat...' /></a></span>")).replace(/\[youtube\](.*?)\[\/youtube\]/gi,"<span class='cm-youtube'><iframe frameborder='0' allow='autoplay; encrypted-media' allowfullscreen src='http://www.youtube.com/embed/$1'></iframe></span>")).replace(/\/((w|s|h)[0-9]+\-(c|p|cc)|(w|s|h)[0-9]+(|\-(c|p|cc)))/gi,"/s"+al.cmn.imgsz+"-c")).replace(/\[h\](.*?)\[\/h\]/gi,"<strong class='comh1'>$1</strong>")).replace(/\[hh\](.*?)\[\/hh\]/gi,"<strong class='comh2'>$1</strong>")).replace(/\[hhh\](.*?)\[\/hhh\]/gi,"<strong class='comh3'>$1</strong>"),$(this).html(a)})),$(al.cmn.rkm+" "+al.cmn.bdp+':has(a:not([data-allow="true"]))').each((function(){$(this).parent().addClass(al.cmn.spm),$(this).html(al.cmn.kcp[0])}))}),"html"),e.html('<div class="comref-loading"><i class="fa-solid fa-sync fa-spin"></i></div>')),!1})),$("."+al.cmn.cls).each((function(){$(this).on("click",(function(){return $(this).parent().parent().find(al.cmn.rkm).empty(),$(this).parent().css("display","none"),$(this).next().remove(),!1}))})),$("."+al.cmn.rpc).on("click",(function(){var a=$(this).attr("data-trigger"),t=$("#"+a);return $(this).toggleClass(al.cmn.rpcls),t.slideToggle(500),t.next().fadeToggle(500),t.prev().toggleClass(al.cmn.rpcls),!1})),$("."+al.cmn.hdr).on("click",(function(){return $(this).prev().slideToggle(500),$(this).fadeToggle(500),$(this).prev().prev().toggleClass(al.cmn.rpcls),!1})),$("."+al.cmn.rpc).hover((function(){var a=$(this).attr("data-trigger");return $("#"+a).toggleClass("humover",500),!1}))}));