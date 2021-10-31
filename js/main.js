let imgs = document.querySelectorAll("img");
let txtParagraph = document.querySelectorAll("p");

function setSourceImg()
{
    for(let i = 0; i < imgs.length; i++)
    {
        imgs[i].src = "https://media.giphy.com/media/jaqvaWqpKfImQ/giphy.gif";
        imgs[i].style.marginBottom = "20px";
    }
}

setSourceImg();

function txtCapitalize()
{
    for(let i = 0; i < txtParagraph.length; i++)
    {
        let textArray = txtParagraph[i].textContent.split(" ");
        let txtAfterCap = " ";
        for(let j = 0; j < textArray.length; j++)
        {
            txtAfterCap += textArray[j].charAt(0).toUpperCase() + textArray[j].slice(1) + " ";
        }
        txtParagraph[i].textContent = txtAfterCap;
    }
}

let btn = document.querySelector("button");

btn.addEventListener('click', txtCapitalize);

// txtCapitalize();
