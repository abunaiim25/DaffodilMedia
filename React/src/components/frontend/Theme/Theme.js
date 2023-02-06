import React from 'react'
import { useEffect } from 'react';
//import './assets/CSS/style.css' ->it's npt needed, becouse css page added on index.html

const Theme = () => {

  //=============== START JAVASCRIPT ===============

  //=============== PRIMARY COLOR ===============
  useEffect(() => {
    const colorPlatte = document.querySelectorAll('.choose-color span');
    const rootColor = document.querySelector(':root');

    //remove active class from all menu item
    const removeActive = () => {
      colorPlatte.forEach(item => {
        item.classList.remove('active');
      });
    }

    colorPlatte.forEach(color => {
      color.addEventListener('click', () => {
        let primaryHue;

        if (color.classList.contains('color-1')) {
          primaryHue = 252;//style.css
        }
        else if (color.classList.contains('color-2')) {
          primaryHue = 52;
        }
        else if (color.classList.contains('color-3')) {
          primaryHue = 352;
        }
        else if (color.classList.contains('color-4')) {
          primaryHue = 152;
        }
        else if (color.classList.contains('color-5')) {
          primaryHue = 202;
        }
        removeActive();
        color.classList.add('active');

        rootColor.style.setProperty('--primary-color-hue', primaryHue);
      });
    });
  }, []);

  //=============== BACKGROUND COLOR ===============
  useEffect(() => {//connected with style.css
  const root = document.querySelector(':root');
   /*===== BACKGROUND THEME ===== */
   const Bg1 = document.querySelector('.bg-1');
   const Bg2 = document.querySelector('.bg-2');
   const Bg3 = document.querySelector('.bg-3');

   let lightColorLightness;
   let whiteColorLightness;
   let darkColorLightness;
   //Background color from css page
   const chageBG = () => {
    
     root.style.setProperty('--light-color-lightness', lightColorLightness);
     root.style.setProperty('--white-color-lightness', whiteColorLightness);
     root.style.setProperty('--dark-color-lightness', darkColorLightness);
   }

   Bg1.addEventListener('click', () => {
     Bg1.classList.add('active');
     Bg2.classList.remove('active');
     Bg3.classList.remove('active');
     window.location.reload();
   });

   Bg2.addEventListener('click', () => {
     darkColorLightness = '95%';
     whiteColorLightness = '20%';
     lightColorLightness = '15%';

     Bg2.classList.add('active');
     Bg1.classList.remove('active');
     Bg3.classList.remove('active');
     chageBG();
   });

   Bg3.addEventListener('click', () => {
     darkColorLightness = '95%';
     whiteColorLightness = '10%';
     lightColorLightness = '0%';

     Bg3.classList.add('active');
     Bg1.classList.remove('active');
     Bg2.classList.remove('active');
     chageBG();
   });

  }, []);
//=============== END JAVASCRIPT ===============

  return (
    <>
      <div className="card-item">
        <h2>Custom your view</h2>
        <p className="text-muted">Manage your color, and background</p>


        <div className="color">
          <h4>Color</h4>
          <div className="choose-color">
            <span className="color-1 active"></span>
            <span className="color-2"></span>
            <span className="color-3"></span>
            <span className="color-4"></span>
            <span className="color-5"></span>
          </div>
        </div>

        <div className="background">
          <h4>Background</h4>
          <div className="choose-bg">
            <div className="bg-1 active">
              <span></span>
              <h5 for="bg-1">Light</h5>
            </div>
            <div className="bg-2">
              <span></span>
              <h5 for="bg-2">Dim</h5>
            </div>
            <div className="bg-3">
              <span></span>
              <h5 for="bg-3">Lights Out</h5>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Theme