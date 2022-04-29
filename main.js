;(function(){

    // let inviseBlock = document.querySelector('.invise-back');

    // document.addEventListener('mousemove', (evt) => {
    //     inviseBlock.style.clipPath = `circle(250px at ${evt.x}px ${evt.y}px)`;
    //   });

    var box=document.querySelectorAll('.works__item');
    var btn=document.querySelector('.add-more-call');
    for (let i=3;i<box.length;i++) {
        box[i].style.display = "none";
    }
    var countD = 3;
    btn.addEventListener("click", function() {
        box.forEach(function(item){
            item.style.display = 'block';
        })
        btn.style.display = 'none';
    })


    let faqBtn = document.querySelectorAll('.faq__btn');
    let i;

    for (i = 0; i < faqBtn.length; i++) {
        faqBtn[i].addEventListener('click', function(e){
            e.preventDefault();
            if (!this.classList.contains('active-faq')){
                let activeFaqs = document.querySelectorAll('.active-faq');
                activeFaqs.forEach(function(item){
                    item.click();
            })
            }
            this.classList.toggle('active-faq');
            let currentSublist = this.nextElementSibling;

            if (currentSublist.style.maxHeight) {
                currentSublist.style.maxHeight = null;
                currentSublist.classList.remove('active');
            } else {
                currentSublist.style.maxHeight = '1000px';
                currentSublist.classList.add('active');
            }
        })
    }

    $('.comp-count').ionRangeSlider({
        min: 0,
        max: 100,
        from: 10,
    });
    $('.serv-count').ionRangeSlider({
        min: 0,
        max: 20,
        from: 1,
    });
}());