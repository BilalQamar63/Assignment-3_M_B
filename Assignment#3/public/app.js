const samsung = [
    {
        brand: "Samsung",
        model: "SamsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
]
const vivo = [
    {
        brand: "Vivo",
        model: "VivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom : "64gb",
        
    },
]
const motorola = [
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom : "32gb",
        
    },
]
const iphone = [
    {
        brand: "Iphone",
        model: "Iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Iphone",
        model: "Iphone13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Iphone",
        model: "IphoneX",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    
]

const render_mobile_data = document.getElementById("mobile_data");

function renderMobileData(mobileArray) {
    mobileArray.map((currentObject) => {
        const { brand, model, price, camera, ram, rom } = currentObject;

        render_mobile_data.innerHTML += `<ul>
            <li>Brand: ${brand}</li>
            <li>Model: ${model}</li>
            <li>Price: ${price}</li>
            <li>Camera: ${camera}</li>
            <li>Ram: ${ram}</li>
            <li>Rom: ${rom}</li>
        </ul>`;
    });
}

function search() {
    const inputvalue = document.getElementById("searchValue").value;
    console.log("searchValue:", inputvalue);

    if (inputvalue.toLowerCase() === "samsung") {
        renderMobileData(samsung);
    } else if (inputvalue.toLowerCase() === "vivo") {
        renderMobileData(vivo);
    } else if (inputvalue.toLowerCase() === "motorola") {
        renderMobileData(motorola);
    } else if (inputvalue.toLowerCase() === "iphone") {
        renderMobileData(iphone);
    } else {
        console.log("Brand not found");
    }
}

search()