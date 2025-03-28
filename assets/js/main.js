$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

$(".delete").click(function (event) {
    event.stopPropagation();
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
});

$("#input").keypress(function(event) { 
    if (event.which === 13 && $(this).val().trim() !== "") { // Check if Enter key is pressed & input is not empty
        let todoText = $(this).val().trim(); // Trim spaces from input
        $(this).val(""); // Clear input field
        $("ul").append(`<li><span class="delete"><i class="fas fa-trash-alt"></i></span> ${todoText}</li>`);

        // Reattach event listener to newly added delete buttons
        $(".delete").off("click").on("click", function(event) {
            event.stopPropagation();
            $(this).closest("li").fadeOut(500, function() {
                $(this).remove();
            });
        });
    }
});

$("#add").on("click", function() {
    $("#input").fadeToggle();
});