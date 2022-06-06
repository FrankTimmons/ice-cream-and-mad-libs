$(document).ready(function() {
  function capitalize(str) {
    let somethingCapital = str.toUpperCase();
    return somethingCapital;
  }

  $("#formTwo").submit(function() {
    event.preventDefault();
    const faveThing1 = $("#iceCream1").val();
    const faveThing2 = $("#iceCream2").val();
    const faveThing3 = $("#iceCream3").val();

    let iceCreams = [faveThing1, faveThing2, faveThing3];

    iceCreams.forEach(function(iceCream){
      let list = document.createElement("li");
      list.innerText = iceCream;
      document.querySelector("#iceCreamList").appendChild(list);
    });
  });

  $("#formOne").submit(function() {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    const itemArray = [person1Input, person2Input, animalInput, exclamationInput, verbInput, nounInput];

    const idString = "#"

    itemArray.forEach(function(item){
      itemClass = idString.concat(item);
      console.log(itemClass);
      $(itemClass).text(item);
    });


    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();
  });
});