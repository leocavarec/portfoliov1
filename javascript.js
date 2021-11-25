
const toggle=document.getElementById('toggle');  
const sidebar=document.getElementById('sidebar')
const logo=document.getElementById('logo');  

const design=document.getElementById('Design');
const designhid=document.getElementById('Designhid'); 

const design1=document.getElementById('Design1');  
const designhid1=document.getElementById('Designhid1') 

const dev=document.getElementById('Development');
const devhid=document.getElementById('Developmenthid'); 

const dev2=document.getElementById('Development2');
const devhid2=document.getElementById('Developmenthid2'); 

const brand=document.getElementById('Branding');
const brandhid=document.getElementById('Brandinghid'); 

const brand3=document.getElementById('Branding3');
const brandhid3=document.getElementById('Brandinghid3');  

const cp=document.getElementById('cp');  
const cpB=document.getElementById('cpB'); 
const cpB2=document.getElementById('cpB2');
const cpD=document.getElementById('cpD'); 
const cpD2=document.getElementById('cpD2');  
const cpDesi=document.getElementById('cpDesi');
  

const tout=document.getElementById('tout');
const tout1=document.getElementById('tout1');
const land=document.getElementById('landing');
const landinglogo=document.getElementById('landing-logo');


var delayInMilliseconds = 5000; 
var delayInMillisecond = 1000; 


setTimeout(function() { 

landinglogo.style.opacity="1";  

}, delayInMillisecond);

setTimeout(function() {
  //your code to be executed after 1 second 
  land.style.display="none"; 
  tout.style.display="block"; 
  tout1.style.display="block";

}, delayInMilliseconds);





design.onclick=function(){
	designhid.classList.toggle('active'); 
}  
design1.onclick=function(){
	designhid1.classList.toggle('active'); 
} 

dev.onclick=function(){
	devhid.classList.toggle('active'); 
} 

dev2.onclick=function(){
	devhid2.classList.toggle('active'); 
} 

brand.onclick=function(){
	brandhid.classList.toggle('active'); 
}
brand3.onclick=function(){
	brandhid3.classList.toggle('active'); 
} 

cp.onclick=function(){ 
	devhid.classList.remove('active');
} 
cpB.onclick=function(){ 
	brandhid.classList.remove('active');
} 
cpB2.onclick=function(){ 
	brandhid3.classList.remove('active');
}   
cpD.onclick=function(){ 
	designhid.classList.remove('active');
} 
cpDesi.onclick=function(){ 
	designhid1.classList.remove('active');
}
cpD2.onclick=function(){ 
	devhid2.classList.remove('active');
} 



document.onclick = function(e){ 
	 
	if(e.target.id !== 'sidebar' && e.target.id !== 'toggle')
	{ 
		toggle.classList.remove('active'); 
		sidebar.classList.remove('active');  
		logo.classList.remove('active');  
		
	}  
	
}


toggle.onclick=function() {
	toggle.classList.toggle('active'); 
	sidebar.classList.toggle('active'); 
	logo.classList.toggle('active'); 
} 