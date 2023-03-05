const testimonialPromise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'https://api.npoint.io/4c8bc977373a57bc13b8', true)

    xhr.onload = function () {
        // 200 : Ok
        if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response))
        } else {
            reject('Error loading data!')
        }
    }
    xhr.onerror = function () {
        reject("Network Error !")
    }
    xhr.send()
})

async function getAllTestimonials() {
    const response = await testimonialPromise
    console.log(response)

    let testimonialHTML = ''
    response.forEach((item) => {
        testimonialHTML += `<div class="testimonial">
        <img src="${item.image}" class="profile-testimonial" />
        <p class="quote">"${item.quote}"</p>
        <p class="author">- ${item.author}</p>
        <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
    </div>`
    })

    document.getElementById('testimonials').innerHTML = testimonialHTML;
}

getAllTestimonials()

async function getFilteredTestimonials(rating) {
    const responseFilter = await testimonialPromise

    let testimonialHTML = '';

    const testimonialFitered = responseFilter.filter((item) => {
        return item.rating === rating
    })

    if (testimonialFitered.length === 0) {
        testimonialHTML = `<h1> Data not found! </h1>`
    } else {
        testimonialFitered.forEach((item) => {
            testimonialHTML += `<div class="testimonial">
                <img src="${item.image}" class="profile-testimonial" />
                <p class="quote">"${item.quote}"</p>
                <p class="author">- ${item.author}</p>
                <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
            </div>`
        })
    }

    document.getElementById('testimonials').innerHTML = testimonialHTML
}