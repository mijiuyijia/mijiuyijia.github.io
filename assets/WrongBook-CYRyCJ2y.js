import{u as v,r as p,j as e}from"./index-CkmrfrZo.js";import{u as x}from"./useWrongBookStore-3-WsgK06.js";import{S as m}from"./subjects-CdBGKZrg.js";import{s as t}from"./student.module-CAeZnmNr.js";const b={all:"全部原因",concept:"概念不清",misread:"审题错误",careless:"粗心",gap:"知识点漏洞"};function k(){const o=v(),d=x(s=>s.wrongList),h=x(s=>s.getActiveList),r=x(s=>s.getStats()),[l,g]=p.useState("all"),[c,f]=p.useState("all"),[u,j]=p.useState(!1),n=p.useMemo(()=>{let s=h();return l!=="all"&&(s=s.filter(a=>a.subjectId===l)),c!=="all"&&(s=s.filter(a=>a.errorCause===c)),s},[d,l,c,h]);return e.jsxs("div",{className:t.page,children:[e.jsx("h2",{className:t.sectionTitle,children:"📝 错题本"}),r.total>0&&e.jsxs("div",{className:t.wrongStats,children:[e.jsxs("div",{className:t.wrongStatItem,children:[e.jsx("strong",{children:r.total}),e.jsx("span",{children:"总错题"})]}),e.jsxs("div",{className:t.wrongStatItem,children:[e.jsx("strong",{children:d.filter(s=>s.removed).length}),e.jsx("span",{children:"已掌握"})]}),e.jsxs("div",{className:t.wrongStatItem,children:[e.jsx("strong",{children:r.total-Object.values(r.bySubject).filter(s=>s>0).length*0+Object.keys(r.bySubject).length}),e.jsx("span",{children:"涉及学科"})]})]}),e.jsxs("div",{className:t.filterBar,children:[e.jsxs("select",{className:t.filterSelect,value:l,onChange:s=>g(s.target.value),children:[e.jsx("option",{value:"all",children:"全部学科"}),m.map(s=>e.jsxs("option",{value:s.id,children:[s.icon," ",s.name]},s.id))]}),e.jsx("select",{className:t.filterSelect,value:c,onChange:s=>f(s.target.value),children:Object.entries(b).map(([s,a])=>e.jsx("option",{value:s,children:a},s))})]}),n.length===0?e.jsxs("div",{className:t.placeholder,children:[e.jsx("span",{className:t.placeholderIcon,children:"🎉"}),e.jsxs("h3",{children:["太棒了！",l==="all"&&c==="all"?"没有错题":"没有符合条件的错题"]}),e.jsx("p",{children:"继续保持，你做得很好"}),r.total>0&&l!=="all"&&e.jsx("button",{className:t.backBtn,onClick:()=>g("all"),children:"查看全部错题"})]}):e.jsx("div",{className:t.wrongList,children:n.map(s=>{const a=m.find(i=>i.id===s.subjectId);return e.jsxs("div",{className:t.wrongCard,children:[e.jsxs("div",{className:t.wrongCardHeader,children:[e.jsxs("span",{className:t.wrongSubject,style:{background:(a==null?void 0:a.color)||"#ccc"},children:[a==null?void 0:a.icon," ",a==null?void 0:a.name]}),e.jsxs("span",{className:t.wrongCount,children:["错",s.errorCount,"次"]})]}),e.jsxs("div",{className:t.wrongQuestion,children:[s.question.slice(0,80),s.question.length>80?"...":""]}),e.jsxs("div",{className:t.wrongCardFooter,children:[e.jsx("span",{className:t.wrongCause,children:b[s.errorCause]||s.errorCause}),e.jsxs("span",{className:t.wrongStreak,children:["连续正确：",s.correctStreak,"/3"]}),e.jsx("button",{className:t.redoBtn,onClick:()=>o(`/wrong-book/redo?qid=${s.id}`),children:"再做一次"})]})]},s.id)})}),n.length>0&&e.jsxs("div",{className:t.wrongActions,children:[e.jsxs("button",{className:t.completeBtn,style:{background:"var(--color-primary)"},onClick:()=>o("/wrong-book/redo"),children:["🔄 错题重做（",n.length,"题）"]}),e.jsx("button",{className:t.completeBtn,style:{background:"var(--color-secondary)"},onClick:()=>j(!u),children:"🖨 导出错题"})]}),u&&e.jsxs("div",{className:t.exportPanel,children:[e.jsx("h4",{children:"导出错题清单"}),e.jsx("p",{children:"选择导出范围后将生成打印友好的错题清单。"}),e.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"12px"},children:[e.jsxs("button",{className:t.backBtn,onClick:()=>{const a=N(n),i=window.open("","_blank");i&&(i.document.write(a),i.document.close())},children:["📄 导出当前筛选 (",n.length,"题)"]}),e.jsx("button",{className:t.backBtn,onClick:()=>j(!1),children:"取消"})]})]})]})}function N(o){const d={chinese:"语文",math:"数学",english:"英语",moral:"道法",history:"历史",geography:"地理",biology:"生物"},h={concept:"概念不清",misread:"审题错误",careless:"粗心",gap:"知识点漏洞"},r=o.map((l,g)=>`
    <tr>
      <td>${g+1}</td>
      <td>${d[l.subjectId]||l.subjectId}</td>
      <td>${l.question}</td>
      <td>${l.userAnswer}</td>
      <td>${l.correctAnswer}</td>
      <td>${l.analysis}</td>
      <td>${h[l.errorCause]||l.errorCause}</td>
      <td>${l.errorCount}次</td>
    </tr>
  `).join("");return`<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8">
<title>玖玖的学习小屋 - 错题清单</title>
<style>
  body { font-family: "Microsoft YaHei",sans-serif; padding: 20px; color: #333; }
  h1 { text-align: center; color: #5aad82; }
  table { width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 13px; }
  th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
  th { background: #f0f7f4; }
  @media print { body { padding: 0; } }
</style></head><body>
<h1>📝 玖玖的学习小屋 · 错题清单</h1>
<p>导出日期：${new Date().toLocaleDateString("zh-CN")} | 共 ${o.length} 题</p>
<table><thead><tr>
  <th>#</th><th>学科</th><th>题目</th><th>我的答案</th><th>正确答案</th><th>解析</th><th>错误原因</th><th>错误次数</th>
</tr></thead><tbody>${r}</tbody></table>
</body></html>`}export{k as default};
