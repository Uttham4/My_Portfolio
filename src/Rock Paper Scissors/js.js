function game()
{
    const choice="rock paper scissors";
    let summa=choice.split(" ");
    let compIP;
    retry=confirm("Do you want to start the game");
    let userIP=prompt("Enter rock or paper or scissors");
    if(retry===true)
    {
        compIP=summa[Math.floor(Math.random()*3)];
        switch(userIP)
        {
            case "rock":
                if(compIP==="paper")
                {
                    alert("Computer Won");
                    retry=confirm("Do you want to try the game");
                    if(retry===true)
                    {
                        game();
                    }
                    else{
                        alert("Thanks for playing");
                        break;
                    }
                    break;
                }
                else{
                    alert("You have won");
                    retry=confirm("Do you want to try again");
                    if(retry===true)
                    {
                        game();
                    }
                    else{
                        alert("Thanks for playing");
                        break;
                    }
                    break;

                }
            case "paper":
                if(compIP==="scissors")
                {
                    alert("Computer Won");
                    retry=confirm("Do you want to try again");
                    if(retry===true)
                    {
                        game();
                    }
                    else{
                        alert("Thanks for playing");
                        break;
                    }
                    break;
                }
                else{
                    alert("You have won");
                    retry=confirm("Do you want to try again");
                    if(retry===true)
                    {
                        game();
                    }
                    else{
                        alert("Thanks for playing");
                        break;
                    }
                    break;

                }
            case "scissors":
                if(compIP==="rock")
                {
                    alert("Computer Won");
                    retry=confirm("Do you want to try again");
                    if(retry===true)
                    {
                        game();
                    }
                    else{
                        alert("Thanks for playing");
                        break;
                    }
                    break;
                }
                else{
                    alert("You have won");
                    retry=confirm("Do you want to try again");
                    if(retry===true)
                    {
                        game();
                    }
                    else{
                        alert("Thanks for playing");
                        break;
                    }
                    break;

                }

        }
    }
    else
    {
        alert("You cancelled the game")
    }
}
game();