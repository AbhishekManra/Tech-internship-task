let content_container = document.getElementsByClassName('content')[0];

document.getElementsByTagName('button')[0].addEventListener('click', async (event) => { // get trendings
    event.preventDefault();
    fetch('http://localhost:8000/whatshappening', {
        method: 'GET'
    }).then(async data => {
        let res = await data.json();
        console.log(res);
        res = res.arr;

        content_container.innerText = "";

        for (let i = 0; i < res.length; i++) {
            let new_div = document.createElement('div');
            new_div.classList.add('child_divs')
            
            new_div.innerText = `Trending #${i + 1} -> ${res[i]}`;
            new_div.style.backgroundColor = "#282828";
            new_div.style.color = "#f5f5f5";
            new_div.style.padding = "10px";
            new_div.style.margin = "5px 0";
            new_div.style.borderRadius = "5px";
            new_div.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
            new_div.style.fontFamily = "Arial, sans-serif";

            content_container.appendChild(new_div);
        }
    });
});


//clear trendings
content_container.removeChild