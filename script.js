let bt = document.getElementById("bt");
let box= document.getElementById("box");
let input = document.getElementById("search");
let imagebox = document.getElementById("imagebox")
const maindbt= document.getElementById("maindbt")
const next=document.getElementById("next")
next.style.display="none";
let keyword = "";
let page = 1;
bt.addEventListener("click",()=>{
    
    seachimage();
    
})

async function seachimage(){
     keyword=input.value;
    console.log(keyword)
    url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=qBjtFtAdFTmrrtxJxUeutD7ZfHohA6W7sVMCrjnuywo`;
    const api=await fetch(url);
    console.log(keyword);
    console.log(api)
    
    const data = await api.json();
    console.log(data)
    const results = data.results;
    results.map((result)=>{
        const image = document.createElement("img");
        const a = document.createElement("a")
        image.style.borderRadius="10px";
        IMAGE = image.style;
        IMAGE.border="5px solid black"
        IMAGE.borderShadow=" 5px 5px 5px black";
        IMAGE.margin="10px"
        image.src=result.urls.small;
        a.href= result.links.html;
        a.appendChild(image)
        imagebox.appendChild(a);
        
        box.style.height="100%"
        const divofdbt = document.createElement('div');
        
        divofdbt.style.margin="5px 0px 0px 12px" 
        const dbt = document.createElement("button");
        dbt.innerHTML="DOWNLOAD"
        DBT = dbt.style;
        DBT.height="30px"
        DBT.width="400px"
        DBT.color="red";
        DBT.borderRadius="5px"
        DBT.padding="6px"
        DBT.backgroundColor="skyblue"
        DBT.margin="5px 0px"
        DBT.backgroundColor="blue"
        DBT.border="2px dashed yellow"
        const adbt = document.createElement('a')
        adbt.href=result.links.download;
        adbt.target="_blank"
        adbt.download="";
        adbt.appendChild(dbt)
        divofdbt.appendChild(adbt)
        imagebox.appendChild(divofdbt)

next.style.display=""

        
        
    })    
}
next.addEventListener("click",()=>{
    page=2;
    seachimage();
    })