function randomize_f() {
    f = boring_rule();
    console.log(f);
}
function random_fog() {
    add_random_fog(0.10);
    plot_cells_page();
}
function new_random_cells() {
    randomize_cells_hills(.05);
    plot_cells_page();
}

function auto() {
    delay += 200;
    if (delay > 500) delay = 50;
    clearInterval(interval);
    interval = setInterval(update, delay);
}
// function auto() {
//     interval = setInterval(update, 500);
// }

function button_step() {
    clearInterval(interval);
    apply_rule(f);
    plot_cells_page();
}