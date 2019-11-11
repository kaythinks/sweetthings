const sweetthings = () => {
  
	let thoughtArray = [
			"You are a great programmer !",
			"Relax, try again later mate !",
			"Don't stop till you finish !",
			"Tomorrow is another day !",
			"Your codes will compile now ,Trust me !",
			"You can do this !",
			"Yeah, You did it ! Congrats !",
			"Well done , Champ !",
			"Keep at it, Victory is sure !",
			"You are a freaking Genius !",
		];
		let index = Math.floor((Math.random() * thoughtArray.length) + 0);
		return thoughtArray[index];

}
module.exports = sweetthings;