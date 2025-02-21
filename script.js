        const img1 = document.querySelector('.img1');
        const img2 = document.querySelector('.img2');
        const img3 = document.querySelector('.img3');
        const imgTexts = document.querySelectorAll('.img-text');
        const vtrText = document.querySelectorAll('.vtr-text');

        
        img1.querySelector('.img-text').style.opacity = '1';

        function expandImage(expandImg) {
            img1.style.width = '20%'; 
            img2.style.width = '20%'; 
            img3.style.width = '20%'; 
            
            expandImg.style.width = '55%';

            imgTexts.forEach(text => text.style.opacity = '0');

            expandImg.querySelector('.img-text').style.opacity = '1';
            
        }

        function resetImages() {
            img1.style.width = '55%'; 
            img2.style.width = '20%'; 
            img3.style.width = '20%'; 

            imgTexts.forEach(text => text.style.opacity = '0');
            
            if (img1.style.width === '55%') {
                img1.querySelector('.img-text').style.opacity = '1';
            }
            
        }

        // img1 
        img1.addEventListener('mouseover', () => expandImage(img1));
        img1.addEventListener('mouseout', resetImages);

        //img2
        img2.addEventListener('mouseover', () => {
            
            const vtrText = img2.querySelector('.vtr-text');
            if (vtrText) vtrText.style.opacity = '0';

            expandImage(img2);
        });
        
        img2.addEventListener('mouseout', () => {
            const vtrText = img2.querySelector('.vtr-text');
            if (vtrText) vtrText.style.opacity = '1';

            resetImages();
        });
        

        // img3
        img3.addEventListener('mouseover', () => {
            const vtrText = img3.querySelector('.vtr-text');
            if (vtrText) vtrText.style.opacity = '0';

            expandImage(img3);
        });
        
        img3.addEventListener('mouseout', () => {
            const vtrText = img3.querySelector('.vtr-text');
            if (vtrText) vtrText.style.opacity = '1';

            resetImages();
        });
        
    
        
        //video play/pause button control

        const video = document.querySelector(".video");
        const playButton = document.querySelector(".play-button");
        const pauseButton = document.querySelector(".pause-button");

        function playVideo(){
            video.play();
            playButton.style.display = 'none'; // Hide play button
            pauseButton.style.display = 'block'; // Show pause button
        }

        function pauseVideo() {
            video.pause();
            playButton.style.display = 'block'; // For Show play button
            pauseButton.style.display = 'none'; // For Hide pause button
        }

        playButton.addEventListener("click", playVideo);
        pauseButton.addEventListener("click", pauseVideo);


        const wrappers = document.querySelectorAll('.customer-cmts');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        let scrollAmount = 0;
        const scrollStep = 1200;
        
        nextBtn.addEventListener('click', () => {
            if (scrollAmount < scrollStep) {
                scrollAmount += scrollStep;
                wrappers.forEach(wrapper => {
                wrapper.style.right = `${scrollAmount}px`;
                })
            }
        });

        prevBtn.addEventListener('click', () => { 
            if (scrollAmount > 0) {
                scrollAmount -= scrollStep;
                wrappers.forEach(wrapper => {
                wrapper.style.right = `${scrollAmount}px`;
                })
            }
        });


        // Popup visibility
        const openBtn = document.querySelector('.trial-btn');
        const popup = document.querySelector('.popup-con');
        const closeBtn = document.querySelector('.xmark');


        openBtn.addEventListener('click', (event) =>{
            event.preventDefault();
            popup.style.visibility = 'visible';

        })
        
        closeBtn.addEventListener('click', () =>{
            popup.style.visibility = 'hidden';
        })
