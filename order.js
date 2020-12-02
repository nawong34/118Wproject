

$('.add-to-cart').on('click', function() {
    var cart = $('.shopping-cart');
    var imgtodrag = $(this).parent('.item').find("img").eq(0);
    if (imgtodrag) {
        var imgclone = imgtodrag.clone()
            .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
            .css({
                'opacity': '0.8',
                'position': 'absolute',
                'height': '150px',
                'width': '150px',
                'z-index': '100'
            })
            .appendTo($('body'))
            .animate({
                'top': cart.offset().top + 10,
                'left': cart.offset().left + 10,
                'width': 75,
                'height': 75
            }, 1000, 'easeInOutExpo');

        setTimeout(function() {
            cart.effect("shake", {
                times: 2
            }, 200);
        }, 1500);

        imgclone.animate({
            'width': 0,
            'height': 0
        }, function() {
            $(this).detach()
        });
    }



});

var balance = 0;


function addNachos() {
    var quantity = parseInt(document.getElementById('add-nachos').value, 10);
    var price = 11;
    var runningTotal = quantity * price;
    balance += runningTotal;


    document.getElementById('running-total').innerHTML = balance;
    document.getElementById('add-nachos').value = 0;
}

function addTaquitos() {
    var quantity = parseInt(document.getElementById('add-taquitos').value, 10);
    var price = 9;
    var runningTotal = quantity * price;
    balance += runningTotal;

    document.getElementById('running-total').innerHTML = balance;
    document.getElementById('add-taquitos').value = 0;
}

function addSoup() {
    var quantity = parseInt(document.getElementById('add-soup').value, 10);
    var price = 6;
    var runningTotal = quantity * price;
    balance += runningTotal;

    document.getElementById('running-total').innerHTML = balance;
    document.getElementById('add-soup').value = 0;
}

function addSalad() {
    var quantity = parseInt(document.getElementById('add-salad').value, 10);
    var price = 8;
    var runningTotal = quantity * price;
    balance += runningTotal;

    document.getElementById('running-total').innerHTML = balance;
    document.getElementById('add-salad').value = 0;
}

function addTacos() {
    var quantity = parseInt(document.getElementById('add-tacos').value, 10);
    var price = 14;
    var runningTotal = quantity * price;
    balance += runningTotal;

    document.getElementById('running-total').innerHTML = balance;
    document.getElementById('add-tacos').value = 0;
}

function addRegBurrito() {
    var quantity = parseInt(document.getElementById('add-reg-burrito').value, 10);
    var price = 12;
    var runningTotal = quantity * price;
    balance += runningTotal;

    document.getElementById('running-total').innerHTML = balance;
    document.getElementById('add-reg-burrito').value = 0;
}

function addSuperBurrito() {
    var quantity = parseInt(document.getElementById('add-super-burrito').value, 10);
    var price = 16;
    var runningTotal = quantity * price;
    balance += runningTotal;

    document.getElementById('running-total').innerHTML = balance;
    document.getElementById('add-super-burrito').value = 0;
}

function addWetBurrito() {
    var quantity = parseInt(document.getElementById('add-wet-burrito').value, 10);
    var price = 18;
    var runningTotal = quantity * price;
    balance += runningTotal;

    document.getElementById('running-total').innerHTML = balance;
    document.getElementById('add-wet-burrito').value = 0;
}

function addRegQuesadilla() {
    var quantity = parseInt(document.getElementById('add-reg-quesadilla').value, 10);
    var price = 10;
    var runningTotal = quantity * price;
    balance += runningTotal;

    document.getElementById('running-total').innerHTML = balance;
    document.getElementById('add-reg-quesadilla').value = 0;
}

function addSuperQuesadilla() {
    var quantity = parseInt(document.getElementById('add-super-quesadilla').value, 10);
    var price = 12;
    var runningTotal = quantity * price;
    balance += runningTotal;

    document.getElementById('running-total').innerHTML = balance;
    document.getElementById('add-super-quesadilla').value = 0;
}

function addWetQuesadilla() {
    var quantity = parseInt(document.getElementById('add-wet-quesadilla').value, 10);
    var price = 14;
    var runningTotal = quantity * price;
    balance += runningTotal;

    document.getElementById('running-total').innerHTML = balance;
    document.getElementById('add-wet-quesadilla').value = 0;
}

function addTacoPlate() {
    var quantity = parseInt(document.getElementById('add-taco-plate').value, 10);
    var price = 18;
    var runningTotal = quantity * price;
    balance += runningTotal;

    document.getElementById('running-total').innerHTML = balance;
    document.getElementById('add-taco-plate').value = 0;
}

function addEnchiladas() {
    var quantity = parseInt(document.getElementById('add-enchiladas').value, 10);
    var price = 20;
    var runningTotal = quantity * price;
    balance += runningTotal;

    document.getElementById('running-total').innerHTML = balance;
    document.getElementById('add-enchiladas').value = 0;
}

function addHuevosRancheros() {
    var quantity = parseInt(document.getElementById('add-huevos-rancheros').value, 10);
    var price = 18;
    var runningTotal = quantity * price;
    balance += runningTotal;

    document.getElementById('running-total').innerHTML = balance;
    document.getElementById('add-huevos-rancheros').value = 0;
}

function addPozole() {
    var quantity = parseInt(document.getElementById('add-pozol').value, 10);
    var price = 22;
    var runningTotal = quantity * price;
    balance += runningTotal;

    document.getElementById('running-total').innerHTML = balance;
    document.getElementById('add-pozole').value = 0;
}

function addPan() {
    var quantity = parseInt(document.getElementById('add-pan').value, 10);
    var price = 8;
    var runningTotal = quantity * price;
    balance += runningTotal;

    document.getElementById('running-total').innerHTML = balance;
    document.getElementById('add-pan').value = 0;
}

function addFlan() {
    var quantity = parseInt(document.getElementById('add-flan').value, 10);
    var price = 8;
    var runningTotal = quantity * price;
    balance += runningTotal;

    document.getElementById('running-total').innerHTML = balance;
    document.getElementById('add-flan').value = 0;
}

function addCake() {
    var quantity = parseInt(document.getElementById('add-cake').value, 10);
    var price = 10;
    var runningTotal = quantity * price;
    balance += runningTotal;

    document.getElementById('running-total').innerHTML = balance;
    document.getElementById('add-cake').value = 0;
}

function addYogurt() {
    var quantity = parseInt(document.getElementById('add-yogurt').value, 10);
    var price = 8;
    var runningTotal = quantity * price;
    balance += runningTotal;

    document.getElementById('running-total').innerHTML = balance;
    document.getElementById('add-yogurt').value = 0;
}