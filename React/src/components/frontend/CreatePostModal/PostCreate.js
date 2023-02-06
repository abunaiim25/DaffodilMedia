import React, { useState } from "react";

const PostCreate = () => {

    const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    // FOR BUG IN CHROME
    event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  return (
    <>

    <div className="space_between_profile">
        <h3>What's your mind?</h3>

        <label className="px-3 py-2">
        + Images

        <input
          type="file"
          name="images"
          onChange={onSelectFile}
          multiple
          accept="image/*"
        />
      </label>
    </div>

      <div className="">
          <textarea className='post_textarea' placeholder='Write Something...' name="" rows="3"></textarea>
        </div>

 <section>

      <input type="file" multiple />

      <div className="images">
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <div key={image} className="image">
                <img src={image} height="200" alt="upload" />
                <button onClick={() => deleteHandler(image)} className="px-2">
                  -
                </button>
                <p>Img-{index + 1}</p>
              </div>
            );
          })}
      </div>

      {selectedImages.length > 0 &&
        (selectedImages.length > 10 ? (
          <p className="error">
            You can't upload more than 10 images! <br />
            <span>
              please delete <b> {selectedImages.length - 10} </b> of them{" "}
            </span>
          </p>
        ) : (
          <div
            className="d-flex justify-content-center text-muted text-sm mt-3"
            onClick={() => {
              console.log(selectedImages);
            }}
          >
            UPLOAD {selectedImages.length} IMAGE
            {selectedImages.length === 1 ? "" : "S"}
          </div>
        ))}
    </section>

<div className="d-flex justify-content-center">
<button type='submit' className="btn btn_primary ">Upload</button>
</div>
    </>
  )
}

export default PostCreate