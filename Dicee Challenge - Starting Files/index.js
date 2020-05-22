var randomNumber1 = Math.floor(Math.random()*6)+1
var randomNumber2 = Math.floor(Math.random()*6)+1
var img_arr = ['dice1.png','dice2.png','dice3.png','dice4.png','dice5.png','dice6.png']
var img_1 = document.getElementsByClassName('img1')[0]
var img_2 = document.getElementsByClassName('img2')[0]
var title = document.querySelector('h1')


img_1.setAttribute('src','images/'+img_arr[randomNumber1-1])
img_2.setAttribute('src','images/'+img_arr[randomNumber2-1])



if (randomNumber1 > randomNumber2){
    title.textContent = "Player 1 Wins"
    
}
else if(randomNumber1 < randomNumber2){
    title.textContent = "Player 2 Wins"
    
}
else{
    title.textContent = "Draw!"
}