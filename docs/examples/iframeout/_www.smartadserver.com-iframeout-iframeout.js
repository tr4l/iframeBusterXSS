function sas_topmost_iframe(){
	var i,ifcnt=window.parent.frames.length;
	for(i=0;i<ifcnt;i++){
		try{
			if(window.parent.frames[i]==window.self){
				ifound=i;break;
			}
		}catch(e){}
	}
	if(window.frameElement){
		for(i=0;i<ifcnt;i++){
			try{
				if(window.parent.frames[ifound].frameElement===parent.document.getElementsByTagName('IFRAME')[i]){
					ifound=i;break;
				}
			}catch(e){
			}
		}
	}

	return parent.document.getElementsByTagName('IFRAME')[ifound]
}

function sas_create_div (parentObj,html,visibility,width,height,zIndex) {
	var theDiv=null;
	if (parentObj!=null) try {
		theDiv=parentObj.ownerDocument.createElement("DIV");
		parentObj.insertBefore(theDiv,parentObj.firstChild);
		theDiv.innerHTML=html;
		var s=theDiv.style;
		s.visibility=visibility;
		s.position='absolute';
		s.width=width;
		s.height=height;
		s.zIndex=zIndex;
	}catch(e){}
	return theDiv;
}

function sas_script_include () {
	var qstr=document.location.search;
	var pos=qstr.indexOf("sas_script_url=");
	if(pos!=-1) {
		pos+=15;
		sas_script_url=unescape(qstr.substr(pos));
		sas_in_iframe_popout=true;
		document.write("<scr" + "ipt src='" + sas_script_url + "'></scr" + "ipt>");
	}
}

var sas_in_iframe_popout=false;
sas_script_include();