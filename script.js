var image_array;

// Describe this function...
function display() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_image = document.getElementById('image');
  element_image.setAttribute("src", image_array[0]);
}


image_array = ['https://earth.esa.int/web/earth-watching/content/documents/257246/1608677/Barcelona.jpg', 'https://i.natgeofe.com/n/a4e66ca6-a34d-4197-87f0-cfbc068fcd30/citylife_barcelona_CasaBatllofacade-0721_HR.jpg?w=1280&h=1920', 'https://www.amazingbeachhotels.com/wp-content/uploads/2023/09/barceloneta-beach-scaled.jpeg'];
display();


document.getElementById('next').addEventListener('click', (event) => {
  image_array.push(image_array.shift());
  if (!image_array.length) {
    image_array = !!image_array.length;
  }
  display();

});

document.getElementById('previous').addEventListener('click', (event) => {
  image_array.unshift(image_array.pop());
  if (!image_array.length) {
    image_array = !!image_array.length;
  }
  display();

});


function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}



document.getElementById('send').addEventListener('click', (event) => {
  let element_display_name = document.getElementById('display_name');
  element_display_name.innerText = document.getElementById('input_name').value;
  let element_display_comment = document.getElementById('display_comment');
  element_display_comment.innerText = document.getElementById('comment').value;
  let element_thankyou_text = document.getElementById('thankyou_text');
  element_thankyou_text.innerText = 'Thank You For Participating';
  let element_send = document.getElementById('send');
  element_send.style.visibility = (false) ? 'visible' : 'hidden';

});
