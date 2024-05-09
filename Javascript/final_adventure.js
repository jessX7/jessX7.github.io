// JavaScript Document
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

//let state = {}

function startGame() {
//	state = {}
	showTextNode(1)
}

function textNode(textNodeIndex) {
	const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
	textElement.innerText = textNode.text
	while (optionButtonsElement.firstChild) {
		optionButtonsElement.removeChild(optionButtonsElement.firstChild)
	}
	
	textNode.options.forEach(option => {
		if (showOption(option)) {
			const button = document.createElement('button')
			button.innterText = option.text
			button.classList.add('btn')
			button.addEventListener('click', () => selectOption(option))
			optionButtonsElement.appendChild(button)
		}
	}
}

function selectOption(option) {
	const nextTextNodeId = option.nextText
	if(nextTextNodeId <= 0) {
		return startGame()
	}
	showTextNode(nextTextNodeId)
}

const textNodes = [
	{
		id: 1,
		text: 'You have been chosen as a hero! Choose your class',
		options: [
			{
				text: 'Knight',
				nextText: 2
			},
			{
				text: 'Mage',
				nextText: 2
			}
		]
	},
	{
		id: 2,
		text: 'You encounter a slime! What do you do?',
		options: [
			{
				text: 'Attack',
				nextText: 7
			},
			{
				text: 'Run',
				nextText: 4
			}
		]
	},
	{
		id: 7,
		text: 'Game Over!',
		options: [
			{
				text: 'Try Again',
				nextText: -1,
			}
		]
	}
]

startGame()