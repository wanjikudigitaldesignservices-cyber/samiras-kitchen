document.addEventListener('DOMContentLoaded',()=>{
    const nb=document.getElementById('navbar');window.addEventListener('scroll',()=>nb.classList.toggle('scrolled',window.scrollY>50));
    const h=document.getElementById('hamburger'),l=document.getElementById('navLinks');
    h.addEventListener('click',()=>{h.classList.toggle('active');l.classList.toggle('active')});
    l.querySelectorAll('.nav-link').forEach(a=>a.addEventListener('click',()=>{h.classList.remove('active');l.classList.remove('active')}));
    
    document.getElementById('bookingForm').addEventListener('submit',e=>{
        e.preventDefault();const d=Object.fromEntries(new FormData(e.target));d.id=Date.now();d.submittedAt=new Date().toISOString();d.status='Pending Confirmation';
        const all=JSON.parse(localStorage.getItem('samiras_reservations')||'[]');all.push(d);localStorage.setItem('samiras_reservations',JSON.stringify(all));
        e.target.reset();showToast('RESERVATION REQUEST RECEIVED. WE WILL CONFIRM SHORTLY.');
    });
});
function switchMenu(t){
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.menu-content').forEach(c=>c.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById('menu-'+t).classList.add('active');
}
function showToast(m){const t=document.getElementById('toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),4000)}
window.switchMenu=switchMenu;
