//ES6 solution:

const catcher =
	"Anyway, I keep picturing all these little kids playing some game in this big field of rye and all. Thousands of little kids, and nobody's around - nobody big, I mean - except me. And I'm standing on the edge of some crazy cliff. What I have to do, I have to catch everybody if they start to go over the cliff - I mean if they're running and they don't look where they're going I have to come out from somewhere and catch them. That's all I do all day. I'd just be the catcher in the rye and all. I know it's crazy, but that's the only thing I'd really like to be. ";

const countThoseWords = (string) => {
    const reg = /[\[\\\^\$\.\|\?\*\+\(\)\{\}!@#%&\/:;,"\-]/g;
	let filtered = string
		//filter out funky characters
		.replace(reg, '')
		//turn to array for reduce
		.split(' ')
		.reduce((counter, word) => {
			//filter out extra white space (empty string)
			if (!word) {
				return counter;
			}
			//case insensitive
			word = word.toLowerCase();
			//if word has been counted, add one, otherwise, set it to one
			counter[word] ? (counter[word] += 1) : (counter[word] = 1);
			return counter;
		}, {});
	//send back object with frequency!
	return filtered;
};

const obj = countThoseWords(catcher);
//in case you guys meant print to console haha! Also going to put it on the page just for fun
console.log(obj);

const makeThatList = (obj) => {
	const ul = document.getElementById('word-list');
	for (const word in obj) {
		let li = document.createElement('li');
        li.innerHTML = `${word}: ${obj[word]}`;
        ul.appendChild(li);
	}
};

makeThatList(obj);

//solution without arrow functions, let/const, or template literal for backwards compatibility:
function countThoseWordsTwo(string) {
	var reg = /[\[\\\^\$\.\|\?\*\+\(\)\{\}!@#%&\/:;,"\-]/g;
	var filtered = string
		.replace(reg, '')
		.split(' ')
		.reduce(function(counter, word) {
			if (!word) {
				return counter;
			}
			word = word.toLowerCase();
			counter[word] ? (counter[word] += 1) : (counter[word] = 1);
			return counter;
		}, {});
	return filtered;
};

var obj2 = countThoseWordsTwo(catcher);
function makeThatListTwo(obj2) {
	var ul = document.getElementById('word-list');
	for (var word in obj2) {
		var li = document.createElement('li');
		li.innerHTML = word + ": " + obj2[word];
		ul.appendChild(li);
	}
};

// makeThatListTwo(obj);
