const URL = "http://makeup-api.herokuapp.com/api/v1/products.json";

async function beautyweb() {
    try {
        const response = await fetch(URL);
        const data = await response.json();

        console.log(data); // Checking the fetched data

        const container = document.getElementById("items");

        data.forEach((element) => {
            console.log(element);

            let item = document.createElement("div");
            item.innerHTML = `
                <div class="card mt-5 shadow" style="width: 22rem; margin-left: 120px;">
                    <img src="${element.image_link}" class="card-img-top" alt="${element.name}"/>
                    <div class="card-body">
                        <h4>${element.brand}</h4>
                        <div class="card-title">${element.name}</div>
                        <div class="d-flex">
                            <h4 class="card-text">${element.price ? "$" + element.price : "Price Not Available"}</h4>
                        </div>
                        <a href="#" class="btn btn-primary mt-3">Buy now</a>
                    </div>
                </div>
            `;

            container.appendChild(item);
        });

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

beautyweb();
