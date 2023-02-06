import React from 'react'

const Post = () => {

  function preview() {//onChange
    let fileInput = document.getElementById("file-input");
    let imageContainer = document.getElementById("images");
    let numOfFiles = document.getElementById("num-of-files");

    imageContainer.innerHTML = "";
    numOfFiles.textContent = `${fileInput.files.length} Image Selected`;

    for (let i of fileInput.files) {
        let reader = new FileReader();
        let figure = document.createElement("figure");
        let figCap = document.createElement("figcaption");
        figCap.innerText = i.name;
        figure.appendChild(figCap);
        reader.onload = () => {
            let img = document.createElement("img");
            img.setAttribute("src", reader.result);
            figure.insertBefore(img, figCap);
        }
        imageContainer.appendChild(figure);
        reader.readAsDataURL(i);
    }
}


  return (
    <>
      <div className="card-item">
        <h2>Create Your Post</h2>
        <p className="text-muted">What's your mind?</p>

 

        <div className="horizontal_center">
          <textarea className='post_textarea' placeholder='Write Something...' name="" rows="3"></textarea>
        </div>

        <div className="image_upload">
          <div class="container_img">
            <input type="file" id="file-input" accept="image/png, image/jpeg" onChange={preview} multiple />
            <label for="file-input">
              <i class="fas fa-upload"></i> &nbsp; Choose Image
            </label>
            <p id="num-of-files">No Image Chosen</p>
            <div id="images"></div>
          </div>
        </div>

        <button type='submit' style={{ marginTop: "15px" }} className="btn btn-primary">Post</button>
      </div>
    </>
  )
}

export default Post