import React, { useEffect } from 'react'
import profile from '../assets/images/profile-1.jpg'
import profile2 from '../assets/images/profile-2.jpg'
import profile3 from '../assets/images/profile-3.jpg'
import profile4 from '../assets/images/profile-4.jpg'
import profile5 from '../assets/images/profile-5.jpg'
import profile6 from '../assets/images/profile-6.jpg'
import n4 from '../assets/images/n4.jpeg'
import feed from '../assets/images/feed-1.jpg'
import feed2 from '../assets/images/feed-2.jpg'
import feed3 from '../assets/images/feed-3.jpg'
import jQuery from 'jquery';
//import VideoPlayer from 'react-video-js-player';//video
import videoFeed from '../assets/video/test.mp4'


const Feeds = () => {

  //VideoPlayer
  const videoSrc = videoFeed;
  const poster = "http://www.example.com/path/to/video_poster.jpg";

  //=============== START JQUERY ===============
  //also index.js -> read more, read less
  //=============== JQUERY (read more, read less)===============
  jQuery(function ($) {
    function AddReadMore() {
      var carLmt = 150;
      var readMoreTxt = " ...read more";
      var readLessTxt = " read less";

      //Traverse all selectors with this class and manupulate HTML part to show Read More
      $(".add-read-more").each(function () {
        if ($(this).find(".first-section").length)
          return;

        var allstr = $(this).text();
        if (allstr.length > carLmt) {
          var firstSet = allstr.substring(0, carLmt);
          var secdHalf = allstr.substring(carLmt, allstr.length);
          var strtoadd = firstSet + "<span class='second-section'>" + secdHalf + "</span><span class='read-more'  title='Click to Show More'>" + readMoreTxt + "</span><span class='read-less' title='Click to Show Less'>" + readLessTxt + "</span>";
          $(this).html(strtoadd);
        }
      });

      //Read More and Read Less Click Event binding
      $(document).on("click", ".read-more,.read-less", function () {
        $(this).closest(".add-read-more").toggleClass("show-less-content show-more-content");
      });
    }

    AddReadMore();
  });

  /** poll */
  useEffect(() => {
    const options = document.querySelectorAll("label");
    for (let i = 0; i < options.length; i++) {
      options[i].addEventListener("click", () => {
        for (let j = 0; j < options.length; j++) {
          if (options[j].classList.contains("selected")) {
            options[j].classList.remove("selected");
          }
        }

        options[i].classList.add("selected");
        for (let k = 0; k < options.length; k++) {
          options[k].classList.add("selectall");
        }

        let forVal = options[i].getAttribute("for");
        let selectInput = document.querySelector("#" + forVal);
        let getAtt = selectInput.getAttribute("type");
        if (getAtt == "checkbox") {
          selectInput.setAttribute("type", "radio");
        } else if (selectInput.checked == true) {
          options[i].classList.remove("selected");
          selectInput.setAttribute("type", "checkbox");
        }

        let array = [];
        for (let l = 0; l < options.length; l++) {
          if (options[l].classList.contains("selected")) {
            array.push(l);
          }
        }
        if (array.length == 0) {
          for (let m = 0; m < options.length; m++) {
            options[m].removeAttribute("class");
          }
        }
      });
    }

  }, []);
  //=============== END JQUERY ===============


  return (
    <>
      <div className="feeds">



        <div className="feed">
          <div className="head">
            <div className="user">
              <div className="profile-photo">
                <img src={profile6} alt="" />
              </div>
              <div className="info">
                <h4>Lana Rose</h4>
                <small>Dubai, 15 MINUTES AGO</small>
              </div>
            </div>
            <span className="edit">
              <i className="uil uil-ellipsis-h"></i>
            </span>
          </div>

          <div className='desc-text'>
            <p className='add-read-more show-less-content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod veniam impedit porro necessitatibus, cupiditate quaerat praesentium aspernatur est aliquid hic amet iste nulla expedita aperiam. Voluptatem consectetur provident vero temporibus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora nulla enim doloremque voluptatum optio, voluptate, tenetur fugiat nihil accusantium quis quisquam quasi vel repudiandae aliquam cum! Itaque ullam voluptatem nihil?</p>
          </div>

          <div className="photo">
            <img src={n4} alt="" />
          </div>

          <div className="action-button">
            <div className="interaction-buttons">
              <span><i className="uil uil-heart"></i></span>
              <span><i className="uil uil-comment-dots"></i></span>
              <span><i className="uil uil-share-alt"></i></span>
            </div>
            <div className="bookmark">
              <span><i className="uil uil-bookmark-full"></i></span>
            </div>
          </div>
          <div className="liked-by">
            <span>  <img src={profile2} alt="" /> </span>
            <span>  <img src={profile4} alt="" /> </span>
            <span>  <img src={profile5} alt="" /> </span>
            <p>Linked by <b>Ernest Achiever</b> and 2,323 others</p>
          </div>
          <div className="text-muted comments">View all 299 comments</div>
        </div>


        <div className="feed">
          <div className="head">
            <div className="user">
              <div className="profile-photo">
                <img src={profile5} alt="" />
              </div>

              <div className="info">
                <h4>Lana Rose</h4>
                <small>Dubai, 15 MINUTES AGO</small>
              </div>
            </div>

            <span className="edit">
              <i className="uil uil-ellipsis-h"></i>
            </span>
          </div>

          <div className='desc-text'>
            <p className='add-read-more show-less-content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod veniam impedit porro necessitatibus, cupiditate quaerat praesentium aspernatur est aliquid hic amet iste nulla expedita aperiam. Voluptatem consectetur provident vero temporibus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora nulla enim doloremque voluptatum optio, voluptate, tenetur fugiat nihil accusantium quis quisquam quasi vel repudiandae aliquam cum! Itaque ullam voluptatem nihil?</p>
          </div>


          <div className="create_poll">
            <div className="wrapper">
              <div className="poll-area">
                <header>Choose your poll option</header>
                <br />
                <input type="checkbox" name="poll" id="opt-1" />
                <input type="checkbox" name="poll" id="opt-2" />
                <input type="checkbox" name="poll" id="opt-3" />
                <input type="checkbox" name="poll" id="opt-4" />

                <div className="label_poll">
                  <label className="opt-1" >
                    <div className="row">
                      <div className="space_between">
                        <div className="column">
                          <span className="circle"></span>
                          <span className="text"> ipsum dolor, Lo</span>
                        </div>
                      </div>
                    </div>
                    <div className="progress_full">
                      <div className="progress" style={{ width: "25%" }}><p>25%</p></div>
                    </div>
                  </label>

                  <label className="opt-2">
                    <div className="row">
                      <div className="space_between">
                        <div className="column">
                          <span className="circle"></span>
                          <span className="text">Java</span>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="progress" style={{ width: "100%" }}><p>100%</p></div>
                    </div>
                  </label>

                  <label className="">
                    <div className="row">
                      <div className="space_between">
                        <div className="column">
                          <span className="circle"></span>
                          <span className="text">PHP</span>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="progress" style={{ width: "10%" }}><p>0%</p></div>
                    </div>
                  </label>

                  <label className="opt-3">
                    <div className="row">
                      <div className="space_between">
                        <div className="column">
                          <span className="circle"></span>
                          <span className="text">Python</span>
                        </div>
                      </div>
                    </div>
                    <div class="">
                      <div class="progress" style={{ width: "40%" }}><p>40%</p></div>
                    </div>
                  </label>

                  <label className="opt-4">
                    <div className="row">
                      <div className="space_between">
                        <div className="column">
                          <span className="circle"></span>
                          <span className="text">jQuery</span>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="progress" style={{ width: "90%" }}><p>90%</p></div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>


          <div className="action-button">
            <div className="interaction-buttons">
              <span><i className="uil uil-heart"></i></span>
              <span><i className="uil uil-comment-dots"></i></span>
              <span><i className="uil uil-share-alt"></i></span>
            </div>

            <div className="bookmark">
              <span><i className="uil uil-bookmark-full"></i></span>
            </div>
          </div>

          <div className="liked-by">
            <span>  <img src={profile2} alt="" /> </span>
            <span>  <img src={profile4} alt="" /> </span>
            <span>  <img src={profile5} alt="" /> </span>
            <p>Linked by <b>Ernest Achiever</b> and 2,323 others</p>
          </div>
          <div className="text-muted comments">View all 299 comments</div>
        </div>


        <div className="feed">
          <div className="head">
            <div className="user">
              <div className="profile-photo">
                <img src={profile6} alt="" />
              </div>

              <div className="info">
                <h4>Lana Rose</h4>
                <small>Dubai, 15 MINUTES AGO</small>
              </div>
            </div>

            <span className="edit">
              <i className="uil uil-ellipsis-h"></i>
            </span>
          </div>

          <div className='desc-text'>
            <p className='add-read-more show-less-content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod veniam impedit porro necessitatibus, cupiditate quaerat praesentium aspernatur est aliquid hic amet iste nulla expedita aperiam. Voluptatem consectetur provident vero temporibus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora nulla enim doloremque voluptatum optio, voluptate, tenetur fugiat nihil accusantium quis quisquam quasi vel repudiandae aliquam cum! Itaque ullam voluptatem nihil?</p>
          </div>

          <div className="action-button">
            <div className="interaction-buttons">
              <span><i className="uil uil-heart"></i></span>
              <span><i className="uil uil-comment-dots"></i></span>
              <span><i className="uil uil-share-alt"></i></span>
            </div>

            <div className="bookmark">
              <span><i className="uil uil-bookmark-full"></i></span>
            </div>
          </div>

          <div className="liked-by">
            <span>  <img src={profile2} alt="" /> </span>
            <span>  <img src={profile4} alt="" /> </span>
            <span>  <img src={profile5} alt="" /> </span>
            <p>Linked by <b>Ernest Achiever</b> and 2,323 others</p>
          </div>
          <div className="text-muted comments">View all 299 comments</div>
        </div>


        <div className="feed">
          <div className="head">
            <div className="user">
              <div className="profile-photo">
                <img src={profile5} alt="" />
              </div>

              <div className="info">
                <h4>Lana Rose</h4>
                <small>Dubai, 15 MINUTES AGO</small>
              </div>
            </div>

            <span className="edit">
              <i className="uil uil-ellipsis-h"></i>
            </span>
          </div>

          <div className='desc-text'>
            <p className='add-read-more show-less-content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod veniam impedit porro necessitatibus, cupiditate quaerat praesentium aspernatur est aliquid hic amet iste nulla expedita aperiam. Voluptatem consectetur provident vero temporibus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora nulla enim doloremque voluptatum optio, voluptate, tenetur fugiat nihil accusantium quis quisquam quasi vel repudiandae aliquam cum! Itaque ullam voluptatem nihil?</p>
          </div>

          <div className="photo">
            <img src={feed3} alt="" />
          </div>



          <div className="create_poll">
            <div className="wrapper">
              <div className="poll-area">
                <header>Choose your poll option</header>
                <br />
                <input type="checkbox" name="poll" id="opt-1" />
                <input type="checkbox" name="poll" id="opt-2" />
                <input type="checkbox" name="poll" id="opt-3" />
                <input type="checkbox" name="poll" id="opt-4" />

                <div className="label_poll">
                  <label className="opt-1" >
                    <div className="row">
                      <div className="space_between">
                        <div className="column">
                          <span className="circle"></span>
                          <span className="text">HTML HTML HTML Lorem ipsum dolor, Lo</span>
                        </div>
                      </div>
                    </div>
                    <div class="progress_full">
                      <div class="progress" style={{ width: "25%" }}><p>25%</p></div>
                    </div>
                  </label>

                  <label className="opt-2">
                    <div className="row">
                      <div className="space_between">
                        <div className="column">
                          <span className="circle"></span>
                          <span className="text">Java</span>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="progress" style={{ width: "20%" }}><p>20%</p></div>
                    </div>
                  </label>

                  <label className="opt-3">
                    <div className="row">
                      <div className="space_between">
                        <div className="column">
                          <span className="circle"></span>
                          <span className="text">Python</span>
                        </div>
                      </div>
                    </div>
                    <div class="">
                      <div class="progress" style={{ width: "40%" }}><p>40%</p></div>
                    </div>
                  </label>

                  <label className="opt-4">
                    <div className="row">
                      <div className="space_between">
                        <div className="column">
                          <span className="circle"></span>
                          <span className="text">jQuery</span>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="progress" style={{ width: "90%" }}><p>90%</p></div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="action-button">
            <div className="interaction-buttons">
              <span><i className="uil uil-heart"></i></span>
              <span><i className="uil uil-comment-dots"></i></span>
              <span><i className="uil uil-share-alt"></i></span>
            </div>

            <div className="bookmark">
              <span><i className="uil uil-bookmark-full"></i></span>
            </div>
          </div>

          <div className="liked-by">
            <span>  <img src={profile2} alt="" /> </span>
            <span>  <img src={profile4} alt="" /> </span>
            <span>  <img src={profile5} alt="" /> </span>
            <p>Linked by <b>Ernest Achiever</b> and 2,323 others</p>
          </div>
          <div className="text-muted comments">View all 299 comments</div>
        </div>


      </div>
    </>
  )
}

export default Feeds