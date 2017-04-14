var moods = {
  "shocked": " 0 _ 0 ",
  "glum": " . _ . ",
  "happy": " ^ ᴗ ^ ",
  "grumpy": "｀ ⌒ ´ ",
  "excited": "  ˃ ᴗ ˂ ",
  "sad": " 0 ⌒ 0;",
  "depressed": " - ⌒ -; ",
  "sleeping": " - ᴗ - zZ"
};


const wodehouse = document.getElementById("wodehouse");

// setup page

// connect to smartthings


// check current status of house
function getMood(){
	var status = "happy";
	return setMood(status)
}

// set appropriate face

function setMood(status){
	wodehouse.innerHTML = moods[status];
}

getMood(status)