function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5oA5yEWLnz7":
        Script1();
        break;
      case "6YuTk8BPTNe":
        Script2();
        break;
  }
}

function Script1()
{
  //Getting the player
const player = GetPlayer();

//Where to start
let sec = 0;

//Set up the timer
function startTimer(){
  sec += 1;
  player.SetVar("birdScore",sec);
  if (sec == 100) {
    clearInterval(timerId);
  }
}

//Start the timer
timerId=setInterval(startTimer,1000);
}

function Script2()
{
   clearInterval(timerId);
}

