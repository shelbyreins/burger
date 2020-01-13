
$(function () {
    $(".devour").on("click", function(){
        var id = $(this).data("id");
    var newDevoured = {
        devoured: 1
    }

    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevoured
    }).then(
        function(){
            location.reload();
        }
    )
    })

    $("#addBtn").on("click", function (event) {
        event.preventDefault();

        var burgerData = {
            burger_name: $("#burger").val().trim()

        }


        console.log(burgerData);
        $.ajax("/api/burger", {
            type: "POST",
            data: burgerData
        }).then(
            function () {
                location.reload();
            }
        );
    })
})
