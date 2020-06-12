function topeconomicalBowlers(deliveries,matches) {
  let result={};
  for(let i=2008;i<=2019;i++){
    let id=matches.filter(a=>(a.season)==Number(i)).map(a=>a.id);
    
    let ballerName;
    ballerName=(deliveries.filter(a=>(a.match_id)>=Number(id[0]) && (a.match_id)<=Number(id[id.length-1]))
    .map(a=>a.baller));
     
    let wideRuns;
    wideRuns=(deliveries.filter(a=>(a.match_id)>=Number(id[0]) && (a.match_id)<=Number(id[id.length-1]))
    .map(a=>a.wideRuns));

     
    let noBallRuns;
    noBallRuns=(deliveries.filter(a=>(a.match_id)>=Number(id[0]) && (a.match_id)<=Number(id[id.length-1]))
    .map(a=>a.noBallRuns));

    let totalRuns;
    totalRuns=(deliveries.filter(a=>(a.match_id)>=Number(id[0]) && (a.match_id)<=Number(id[id.length-1]))
    .map(a=>a.totalRuns));
    var uniqueArray = [...new Set(ballerName)]
  
   
  let r={};
  for(let j=0;j<uniqueArray.length;j++)
  {
       
    let run=0;
    let ball=0;
    for(let i=0;i<ballerName.length;i++)
    {
                  if(uniqueArray[j]===ballerName[i]){
                  if(noBallRuns[i]=="0" && wide_runs[i]=="0"){
                    ball++;
                  }
                  run=run+Number(totalRuns[i]);

              }
    }
    let economy=Number((6*(run/ball)).toFixed(2));
    r[uniqueArray[j]]=economy;
  }
  result[k]=r;
  }
  
    return result;
  }
    module.exports = topeconomicalBowlers;