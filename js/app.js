
const meshullar=document.getElementById("meshullar")
function addmehs(){
    data.map(item => {
        meshullar.innerHTML+=`
    



<div class="max-w-xs mt-4 p-2 flex items-center flex-col justify-center rounded-md border border-[gray]">
	 <img src="${item.image}" class="w-[30%] object-cover mx-auto" alt="${item.category}">
	<div class="mt-6 mb-2">
		<span class="mx-2 text-xs font-medium tracking-widest uppercase dark:text-violet-600">${item.title}</span>
		<h2 class="text-xl mx-2 font-semibold tracking-wide">${item.description.slice(0,50)}s</h2>
	</div>
<button onclick="addcart('${item.image}', '${item.title}', ${item.price}, ${item.id})" class="bg-[green] mx-2 text-white font-bold w-[35%] rounded-md">${item.price} AZN</button>

</div>


`
    })
}
addmehs()

function axtariset() {
    const search = document.getElementById('search');
    meshullar.innerHTML = ''; 

    data.map((item, index) => {
        if (item.title.toLowerCase().startsWith(search.value.toLowerCase())) {
            meshullar.innerHTML += `
            <div class="max-w-xs  mt-4 p-2 rounded-md border border-[gray]">
	 <img src="${item.image}" class="w-[30%] object-cover mx-auto" alt="${item.category}">
	<div class="mt-6 mb-2">
		<span class="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">${item.title}</span>
		<h2 class="text-xl font-semibold tracking-wide">${item.description.slice(0,50)}s</h2>
    <button onclick="addcart('${item.image}', '${item.title}', ${item.price}, ${item.id})" class="bg-[green] mx-2 text-white font-bold w-[35%] rounded-md">${item.price} AZN</button>
	</div>
	
</div>
            `;
        }
    });
}
function openSidebar() {
  const opembar = document.getElementById('opembar');
  opembar.classList.toggle('right-0'); 
  opembar.classList.toggle('right-[-300px]'); 
}
function searchProduct() {



  let searchInp = search.value;
  cards.innerHTML = "";
  if (searchInp.trim() == "") getFullCards(data);
  else {
    let filtered = data.filter((item) =>
      item.title.toLocaleLowerCase().startsWith(searchInp.toLocaleLowerCase())
    );
    getFullCards(filtered);
  }
}
let sebeteat = []; 

function addcart(image, title, price, id) {
    const sebet = document.getElementById('sebet');

    let datam = { image, title, price, id, count: 1 }; 

   
    let meshul = sebeteat.find((item) => item.id === datam.id);
    
    if (meshul) {
   
        meshul.count++;
    } else {
       
        sebeteat.push(datam);
    }

   
    sebet.innerHTML = ''; 

 
    sebeteat.map(item => {
        sebet.innerHTML += `
            <div class="max-w-xs mt-4 p-2 w-full flex items-center flex-col justify-center rounded-md border border-[gray]">
                <img src="${item.image}" class="w-[20%] object-cover mx-2" alt="${item.title}">
                <div class="mt-6 mb-2 flex items-center justify-center w-[100%]">
                    <span class="mx-2 text-xs font-medium tracking-widest uppercase dark:text-violet-600">${item.title.slice(0, 10)}</span>
                </div>
                <span class="bg-[green] mx-2 text-white text-center w-[20%] font-bold rounded-md">${item.price} AZN</span>
                <span class="mx-2 text-xs font-medium">${item.count} ədəd</span> <!-- Məhsul sayını göstərin -->
            </div>
        `;
    });
}

function odego() {
  const odemepage = document.getElementById('odemepage');
  const meshullar = document.getElementById('meshullar'); 
  const opembar = document.getElementById('opembar'); 
  const hero = document.getElementById('hero'); 

  if (odemepage.style.display === 'none' || odemepage.style.display === '') {
      odemepage.style.display = 'flex';
      meshullar.style.display = 'none';
      opembar.style.display = 'none';
  } else {
      odemepage.style.display = 'none';
      meshullar.style.display = 'flex';
      opembar.style.display = 'flex';
  }
}
function odemesec() {
  const odememethod = document.getElementById('odememethod');
  const kartodeme = document.getElementById('kartodeme'); 
  const creditCardForm = document.querySelector('.credit-card-form'); 
  const odemepage = document.getElementById('odemepage'); 

  if (odememethod.value === 'cart') {
    
      kartodeme.style.display = 'none'; 
      odemepage.style.display = 'none'; 
  } else {
  
      kartodeme.style.display = 'none'; 
      odemepage.style.display = 'none'; 
  }

  if(kartodeme.style.display === 'none'){
    kartodeme.style.display = 'block'
  }else{
    kartodeme.style.display = 'none'
  }
  if(hero.style.display === 'block'){
    hero.style.display = 'none'
  }else{
    hero.style.display = 'block'
  }
}



