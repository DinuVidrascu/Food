function slides({container, slide, nextArrow, prevArrow, totalCounter, currentCounter}){
  
  const slides = document.querySelectorAll(slide),
        slider=document.querySelector(container),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        total = document.querySelector(totalCounter),
        current= document.querySelector(currentCounter);
  let slideIndex = 1;
  
  if(slides.length < 10) {
    total.textContent = `0${slides.length}`;
  }else{
    total.textContent = slides.length;
  }
  
  showSlides(slideIndex)
  
  function showSlides(n) {
    if(n > slides.length) {
      slideIndex = 1;
    }
    if(n < 1) {
      slideIndex = slides.length
    }
    if(slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
    
    slides.forEach(item => item.style.display= 'none');
    slides[slideIndex - 1].style.display = 'block';
  }
  
  slider.style.position = 'relative';
  const indicators = document.createElement('ol'),
    dots= [];
    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 15;
      display: flex;
      justify-content: center;
      margin-right: 15%;
      margin-left: 15%;
      list-style: none;
    `;
    
  slider.append(indicators);
  for(let i = 0; i< slides.length; i++){
    const dot =document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1)
    dot.style.cssText = `
      box-sizing: content-box;
      flex: 0 1 auto;
      width: 30px;
      height: 6px;
      margin-right: 3px;
      margin-left: 3px;
      cursor: pointer;
      background-color: #fff;
      background-clip: padding-box;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      opacity: .5;
      transition: opacity .6s ease;
    `;
    
    if( i==0){
      dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);
  }
  
  function plusSlides (n) {
    showSlides(slideIndex += n);
  }
  
  prev.addEventListener('click',()=>{
    plusSlides(-1);
    dots.forEach(dot => dot.style.obacity = '.5')
    dots[slideIndex - 1].style.opacity = 1;
  });
  next.addEventListener('click',()=>{
    plusSlides(1);
    dots.forEach(dot => dot.style.obacity = '.5')
    dots[slideIndex - 1].style.opacity = 1;
  });

}

export default slides