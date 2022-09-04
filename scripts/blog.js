const blogData = [
    { id: 1, question: "Differences between var, let, and const", answer: "var	let	const The scope of a var variable is functional scope.	The scope of a let variable is block scope.	The scope of a const variable is block scope.It can be updated and re-declared into the scope.	It can be updated but cannot be re-declared into the scope.	It cannot be updated or re-declared into the scope.It can be declared without initialization.	It can be declared without initialization.	It cannot be declared without initialization.It can be accessed without initialization as its default value is “undefined”.	It cannot be accessed without initialization otherwise it will give ‘referenceError’.	It cannot be accessed without initialization, as it cannot be declared without initialization.hoisting done , with initializing as ‘default’ value	Hoisting is done , but not initialized (this is the reason for error when we access the let variable before declaration/initialization	Hoisting is done, but not initialized (this is the reason for error when we access the const variable before declaration/initializationNote: Sometimes, users face the problem while working with the var variable as they change the value of it in the particular block. So, users should use the let and const keyword to declare a variable in JavaScript. " },
    {
        id: 2, question: "Difference between arrow function and normal function.", answer: "", requirement: [
        "Syntax",
        "Arguments binding",
        "Use of this keyword",
        "Using new keyword",
        "No duplicate named parameters"]},
    {
        id: 2, question: "What's the difference between Foreach() Filter() Map()?", answer: "", requirement: [
            "forEach:forEach(), is used to execute the same code on every element in an array but does not change the array and it returns undefined.",
            
            "map:map() executes the same code on every element in array and returns a new array with the updated elements.",

            "filter():.filter() checks every element in an array to see if it meets a certain criteria and returns a new array with the elements that return truthy for the criteria."    ]}
]




const blogBtn = document.querySelector("#blog-section");

const blogsContainer = document.querySelector(".blog_container");


console.log(blogBtn,blogsContainer)

const blogState = blogBtn.addEventListener("click", () => {
    console.log(blogData)

    blogData?.forEach((blog , index)=> {

        const div = document.createElement("div")
        div.className = 'mt-5 '
        div.innerHTML = `
        <p class="font-bold text-slate-900">0${index + 1}. ${blog.question}</p>
        <p class="text-slate-600 mt-3">${blog.answer}</p>
        `
        
        if (blog?.requirement) {
            blog?.requirement.forEach((element,index )=> {
                const requirementDiv = document.createElement("div")
                requirementDiv.className = 'pl-5'
                
                requirementDiv.innerHTML = `
            <p class="mt-2">0${index + 1}. ${element}</p>
        `
        div.appendChild(requirementDiv)
            });
        
        }
        

        newsContainer.innerHTML = ``;
        blogsContainer.appendChild(div)
    })

    
}  )




