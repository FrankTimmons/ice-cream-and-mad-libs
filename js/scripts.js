$(document).ready(function() {
  function capitalize(str) {
    let somethingCapital = str.toUpperCase();
    return somethingCapital;
  }

  $("#formOne").submit(function() {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();
    
    const somethingInput = $("input#something").val();
    $("#result").text(capitalize(somethingInput));
  });
});