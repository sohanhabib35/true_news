const categoryUrl = "https://openapi.programming-hero.com/api/news/categories";

const categoryContainer = document.querySelector(".category");

const newsContainer = document.querySelector(".news-container");

let newsCounter = document.querySelector("#news-counter");

let dynamicModal = document.querySelector('.dynamic_modal');



// load category data 
const loadData = (url)=> {
    fetch(url)
    .then(res => res.json())
    .then(data => linkdata(data.data.news_category))
    .catch(err => console.log(err))
}

loadData(categoryUrl)


// set data to the nav 
const linkdata = (data) => {
    data.forEach((element,index) => {
        let li = document.createElement("li")

        li.className = `list-none cursor-pointer text-slate-900`;

        li.innerHTML = `${element.category_name}`;

        li.addEventListener('click', () => {
            newsContainer.textContent = '';

            loadNewsCategory(element.category_id, element.category_name);
        })
          
    categoryContainer.appendChild(li)
    });
}




// load all news according to category
const  loadNewsCategory = (id,name)=> {
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then(res => res.json())
    .then(data =>  setNewsCategory(data.data,name))
    .catch(err => console.log(err))
}

loadNewsCategory ('01',"Breaking News")



const setNewsCategory = (data, name) => {
    const sortedData = data.sort((a, b) => b.total_view - a.total_view)

    newsCounter.textContent=`${data.length} items found for category ${name}`

    

    if (sortedData) {
        sortedData.forEach(element => {
            const div = document.createElement('div')
            
            div.innerHTML = `
            <label onclick="setDynamicModalData('${element._id}')" for="my-modal-3" class="cursor-pointer">
            <div class ="gap-8 mt-10 flex items-center flex-col justify-center md:flex-row text-start text-slate-900 bg-white p-4 rounded-md min-h-[400px]">
    
             <div class="md:w-[25%]">
                <img width="244px"  class="rounded-md mw-[244px]" src=${element.thumbnail_url} alt="">
             </div>
    
             <div class="md:w-[75%]">
                <h2 class="text-2xl text-bold">${element.title}</h2>
                <p class="text-gray-400 mt-4 md:truncate ..." >${element.details}</p>
                <div class="flex items-center justify-between flex-wrap mt-16">
                        <div class="flex items-center justify-center gap-3">
                            <img width="40px" class="rounded-full"  src="${element.author.img}"  alt="">
                            <div>
                            <p class="font-bold">${element.author.name}</p>
                            <p class="text-gray-400">${element.author.published_date}</p>
                            </div>
                        </div>
    
                        <div class="flex items-center gap-2">
                            <i class="fa-solid fa-eye"></i>
                            <p>${element.total_view
                            }K</p>
                        </div>
               
                        <div>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                    
                        <div>
                            <button class="btn inline-block"> <i class="fa-solid fa-arrow-right-long"></i></button>
                        </div>
             
                </div>
              </div>
            </div>
       </label>
            `
            newsContainer.appendChild(div)
        })
    } else {
        newsContainer.innerHTML = `<h2 class="text-white text-3xl >No news available</h2>`
  }

}



function setDynamicModalData(_id) {
    const modalUrl = `https://openapi.programming-hero.com/api/news/${_id}`

    fetch(modalUrl)
    .then(res => res.json())
        .then(data => setModal(data.data[0]))    
}



function setModal(element) {
    dynamicModal.innerHTML = `
    <div class ="gap-8 mt-10 flex items-center flex-col justify-center  text-start text-white">
    <div class="md:w-[25%]">
    <img width="244px"  class="rounded-md mw-[244px]" src=${element.thumbnail_url} alt="">
    </div>

    <div class="md:w-[75%]">
       <h2 class="text-2xl text-bold">${element.title}</h2>
       <p class="text-gray-400 mt-4">${element.details}</p>
       <div class="flex items-center justify-between flex-wrap mt-16">
         
               <div class="flex items-center justify-center gap-3">
                   <img width="40px" class="rounded-full"  src="${element.author.img}"  alt="">
                   <div>
                   <p class="font-bold">${element.author.name}</p>
                   <p class="text-gray-400">${element.author.published_date}</p>
                   </div>
               </div>
               <div class="flex items-center gap-2">
                   <i class="fa-solid fa-eye"></i>
                   <p>${element.total_view
                   }K</p>
               </div>
      
               <div>
                   <i class="fa-solid fa-star"></i>
                   <i class="fa-regular fa-star"></i>
                   <i class="fa-regular fa-star"></i>
                   <i class="fa-regular fa-star"></i>
                   <i class="fa-regular fa-star"></i>
               </div>
           
               <div>
                   <button class="btn inline-block"> <i class="fa-solid fa-arrow-right-long"></i></button>
               </div>
    
       </div>
     </div>
   </div>
   
    `
}

const blogSection = document.getElementById("blog-section");
console.log(blogSection)

const blogState = blogSection.addEventListener(onclick, blogSection.setAttribute("class", ""))









