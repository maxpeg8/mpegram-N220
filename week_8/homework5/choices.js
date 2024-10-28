const wakeUpAction =
  prompt(`BZZZZ BZZZZ BZZZZ! You wake up as your alarm goes off. What do you do?
    \n 1. Hit the snooze button
    \n 2. Get out of bed
    \n (Enter the number of your choice)`);

document.getElementById("story").innerHTML +=
  "<br/> BZZZZ BZZZZ BZZZZ! You wake up as your alarm goes off. What do you do? <br/>";

if (wakeUpAction === "1") {
  document.getElementById("story").innerHTML +=
    "10 more minutes... Snooze button it is.";
  // Next if statement
  const sleepInAction =
    prompt(`BZZZZ BZZZZ BZZZZ! There it goes again. What now?
    \n 1. Hit snooze again
    \n 2. Will yourself out of bed
    \n (Enter the number of your choice)`);

  document.getElementById("story").innerHTML +=
    "<br/> <br/> BZZZZ BZZZZ BZZZZ! There it goes again. What now? <br/>";

  if (sleepInAction === "1") {
    document.getElementById("story").innerHTML +=
      "Just a bit more sleep won't hurt... right?";
    const overSleptAction = prompt(`BZZZZ BZZZZ BZZZZ! Ughhh, what time is it?
      \n 1. What does it matter? SNOOZE
      \n 2. Check the time
      \n (Enter the number of your choice)`);

    document.getElementById("story").innerHTML +=
      "<br/> <br/> BZZZZ BZZZZ BZZZZ! Ughhh, what time is it? <br/>";

    if (overSleptAction === "1") {
      document.getElementById("story").innerHTML +=
        "OOPS. You accidently hit Stop instead of Snooze and now you missed your class";
    } else {
      document.getElementById("story").innerHTML +=
        "8:46! CRAP! Oh no I can't miss class again.";
    }
  } else {
    document.getElementById("story").innerHTML +=
      "No time for breakfast, I'll just grab a snack and head to class";
  }
} else {
  document.getElementById("story").innerHTML +=
    "Good Morning, Lets get ready for the day.";

  const wokeUpAction = prompt(`What should I eat for breakfast?
    \n 1. Eggs
    \n 2. Cereal
    \n (Enter the number of your choice)`);

  document.getElementById("story").innerHTML +=
    "<br/> <br/> What should I eat for breakfast? <br/>";

  if (wokeUpAction === "1") {
    document.getElementById("story").innerHTML +=
      "Eggs make a perfect breakfast";
    const eggsAction = prompt(`Now how do I make them?
      \n 1. Scrambled
      \n 2. Sunny Side Up
      \n (Enter the number of your choice)`);

    document.getElementById("story").innerHTML +=
      "<br/> <br/> Now how do I make them? <br/>";

    if (eggsAction === "1") {
      document.getElementById("story").innerHTML +=
        "Scrambled is better obviously. Now off to class";
    } else {
      document.getElementById("story").innerHTML +=
        "Sunny Side Up is so yummy. Now off to class";
    }
  } else {
    document.getElementById("story").innerHTML +=
      "Cereal is quick n easy after all";
    const cerealAction = prompt(`Which box should I choose?
      \n 1. Cheerios
      \n 2. Lucky Charms
      \n (Enter the number of your choice)`);

    document.getElementById("story").innerHTML +=
      "<br/> <br/> Which box should I choose? <br/>";

    if (cerealAction === "1") {
      document.getElementById("story").innerHTML +=
        "Cheerios are healthier so yeah. Now off to class";
    } else {
      document.getElementById("story").innerHTML +=
        "Lucky Charms, only cause I already spent the money on them. Now off to class";
    }
  }
}
