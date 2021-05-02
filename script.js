var iframe_src = [
    "https://fr.vittascience.com/microbit/?link=60892fabc6128&mode=code&simu=1",
    "https://fr.vittascience.com/microbit/?link=60892fe16768d&mode=code&simu=1",
    "https://fr.vittascience.com/microbit/?link=60892ffceee1c&mode=code&simu=1",
    "https://fr.vittascience.com/microbit/?link=608930383f5b6&mode=code&simu=1",
    "https://fr.vittascience.com/microbit/?link=6089308091424&mode=code&simu=1",
    "https://fr.vittascience.com/microbit/?link=608930c9248ed&mode=code&simu=1",
    "https://fr.vittascience.com/microbit/?link=608930fe9b5bf&mode=code&simu=1",
    "https://fr.vittascience.com/microbit/?link=60893120a1ada&mode=code&simu=1",
    "https://fr.vittascience.com/microbit/?link=60893145735f4&mode=code&simu=1",
    "https://fr.vittascience.com/microbit/?link=608931961b1f3&mode=code&simu=1",
    "https://fr.vittascience.com/microbit/?link=60892e6b76d3e&mode=code&simu=1",
    "https://fr.vittascience.com/microbit/?link=60892bfdbd17a&mode=code&simu=1",
    "https://fr.vittascience.com/microbit/?link=60893709f1d03&mode=code&simu=1"
]

num = 0

function change(add) {
    if (num + add < 0) {
        return;
      } else if (num + add > iframe_src.length - 1) {
        return;
      }
    
    if (num + add + 1 == 13) {
        exo_num = "12 prolongement"
    } else if (num + add + 1 > 13) {
        exo_num = num + add
    } else {
        exo_num = num + add + 1
    }

    document.getElementById("exo").innerHTML = "Exercice " + exo_num;
    document.getElementById('iframe').src = iframe_src[num + add];
    document.getElementById("consigne").style.transform = "translate(-" + ((num + add)*100) + "%, 0)";
    num += add
  }