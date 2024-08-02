function selecttemplate1()
{
    let select = document.getElementById("select");
    select.style.display = "block";
}
function selecttemplate2()
{
    let select = document.getElementById("select");
    select.style.display = "none";
}

function usetemplate1()
{
    let use1 = document.getElementById("use1");
    use1.style.display = "block";

}
function usetemplate2()
{
    let use1 = document.getElementById("use1");
    use1.style.display = "none";

}
function usetemplate3()
{
    let use2 = document.getElementById("use2");
    use2.style.display = "block";
}
function usetemplate4()
{
  
    let use2 = document.getElementById("use2");
    use2.style.display = "none";
}
ScrollReveal({ reset: true ,
    distance: '80px',
    delay: 20,
    duration: 1000
});

ScrollReveal().reveal('#d5', { delay: 200,origin:'top' });

ScrollReveal().reveal('#d6', { delay: 200,origin:'bottom' });

ScrollReveal().reveal('#d7', { delay: 200,origin:'top' });

ScrollReveal().reveal('#d8', { delay: 200,origin:'bottom' });
ScrollReveal().reveal('#d9', { delay: 200,origin:'top' });
ScrollReveal().reveal('#d10', { delay: 200,origin:'bottom' });
ScrollReveal().reveal('#d21', { delay: 200,origin:'left' });