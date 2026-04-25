/* PTA適正化推進委員会 — site.js v3 */
const SITE_INDEX=[
  {title:'トップページ',url:'index.html',desc:'サイト全体の入口。今何が起きているか、立場別ガイド。'},
  {title:'保護者の方へ',url:'guide-parent.html',desc:'入会・会費・個人情報。絵で直感的に理解できるガイド。'},
  {title:'PTA役員の方へ',url:'guide-pta.html',desc:'就任直後の確認・適正化ロードマップ・PDF雛形。'},
  {title:'教育委員会・学校の方へ',url:'guide-board.html',desc:'職務専念義務・渉外業務・覚書問題。'},
  {title:'研究者・記者の方へ',url:'guide-research.html',desc:'全国データ・判例・一次資料へのアクセス。'},
  {title:'教育委員会の回答',url:'board-responses.html',desc:'全国の教育委員会への照会結果・地図。'},
  {title:'全国資料館',url:'national-archive.html',desc:'開示請求で収集した全国のPTA関連公文書。'},
  {title:'論考・調査報告',url:'journal.html',desc:'法律論考・調査報告・行政動向の分析。'},
  {title:'監査システム',url:'audit/index.html',desc:'5軸・3立場でPTA運営のリスクを自動診断。'},
  {title:'入会手続・オプトアウト',url:'membership.html',desc:'みなし加入・オプトアウト方式の法的無効性。'},
  {title:'個人情報提供',url:'privacy.html',desc:'学校からPTAへの名簿提供の違法性。'},
  {title:'会費徴収',url:'fee-collection.html',desc:'学校徴収金との混在・無権代理・不当利得。'},
  {title:'教職員関与・職務専念義務',url:'personnel.html',desc:'地公法35条・PTA事務への恒常的従事の問題。'},
  {title:'施設利用',url:'facilities.html',desc:'学校教育法137条・公私境界の整理。'},
  {title:'法制度マップ',url:'law-map.html',desc:'憲法・民法・個人情報保護法・地公法の論点別整理。'},
  {title:'判例整理',url:'cases.html',desc:'PTA関連の裁判例・学説の整理。'},
  {title:'行政資料整理',url:'administrative-materials.html',desc:'文科省通知・教委回答・行政実例の整理。'},
  {title:'総合分析レポート',url:'report.html',desc:'全国調査に基づく構造分析・提言。'},
];
function initSearch(){
  document.querySelectorAll('.search-input').forEach(input=>{
    const dd=input.closest('.header-search')?.querySelector('.search-results-dropdown');
    if(!dd)return;
    input.addEventListener('input',()=>{
      const q=input.value.trim().toLowerCase();
      if(q.length<2){dd.classList.remove('is-open');return;}
      const hits=SITE_INDEX.filter(p=>p.title.toLowerCase().includes(q)||p.desc.toLowerCase().includes(q)).slice(0,6);
      dd.innerHTML=hits.length?hits.map(p=>`<a href="${p.url}" class="srd-item"><div class="srd-item-title">${p.title}</div><div class="srd-item-desc">${p.desc}</div></a>`).join(''):`<div class="srd-empty">「${input.value}」に一致するページが見つかりません</div>`;
      dd.classList.add('is-open');
    });
    document.addEventListener('click',e=>{if(!input.closest('.header-search').contains(e.target))dd.classList.remove('is-open');});
    input.addEventListener('keydown',e=>{if(e.key==='Escape')dd.classList.remove('is-open');});
  });
}
function initHamburger(){
  const btn=document.getElementById('hamburger'),ol=document.getElementById('mobileOverlay'),cl=document.getElementById('closeOverlay');
  if(!btn||!ol)return;
  btn.addEventListener('click',()=>{ol.classList.add('is-open');btn.setAttribute('aria-expanded','true');});
  cl?.addEventListener('click',()=>{ol.classList.remove('is-open');btn.setAttribute('aria-expanded','false');});
}
function initMegaMenu(){
  document.querySelectorAll('.nav-item.has-dropdown>.nav-link').forEach(link=>{
    link.addEventListener('click',e=>{
      const item=link.closest('.nav-item');
      if(window.innerWidth>860){e.preventDefault();item.classList.toggle('is-open');document.querySelectorAll('.nav-item.is-open').forEach(i=>{if(i!==item)i.classList.remove('is-open');});}
    });
  });
  document.addEventListener('click',e=>{if(!e.target.closest('.nav-item'))document.querySelectorAll('.nav-item.is-open').forEach(i=>i.classList.remove('is-open'));});
}
function initFAQ(){
  document.querySelectorAll('.faq-item').forEach(item=>{
    const q=item.querySelector('.faq-q');
    if(!q)return;
    q.addEventListener('click',()=>{const o=item.classList.toggle('is-open');const t=item.querySelector('.faq-toggle');if(t)t.textContent=o?'▲':'▼';});
  });
}
function initChecklist(){
  document.querySelectorAll('.check-box').forEach(box=>{
    box.addEventListener('click',()=>{box.classList.toggle('checked');box.textContent=box.classList.contains('checked')?'✓':'';});
  });
}
document.addEventListener('DOMContentLoaded',()=>{initSearch();initHamburger();initMegaMenu();initFAQ();initChecklist();});
