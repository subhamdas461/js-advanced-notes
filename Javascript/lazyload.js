

const callback = (entries) => {
    let count =0
    
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Element is visible!', count);
      let img = document.createElement("img")
      img.src = "https://picsum.photos/200"
     
      if(count==10) return;
      let main = document.querySelector(".main")
      main.appendChild(img)
    }else{
        // observer.unobserve(entry.target);
        console.log("Gone");
        // alert("Gone")
    }
    
  });
};

const options = {
  root: null, // viewport
  rootMargin: '0px',
  threshold: 0 // 50% visible
};

const observer = new IntersectionObserver(callback, options);
observer.observe(document.querySelector('footer'));
